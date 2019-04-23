import * as ts from 'typescript';
import { Type, ReferenceType, ObjectType, ArrayType, Property } from './';
import * as _ from 'lodash';
import {
  getPrimitiveType,
  resolveSimpleTypeName,
  getDateType,
  getEnumerateType,
  getLiteralType,
  getTypeName,
  resolveFqTypeName,
  createCircularDependencyResolver,
  getModelDescription,
  UsableDeclaration,
  resolveTypeArguments,
  getSubClassGenericTypes,
  mergeReferenceTypeProperties,
  nodeIsUsable,
  resolveLeftmostIdentifier,
  resolveModelTypeScope,
  getNodeDescription,
  hasPublicMemberModifier,
  hasPublicConstructorModifier,
  resolveTypeParameter
} from '../utils/resolveUtils';
import { MetadataGenerator } from './metadataGenerator';

const localReferenceTypeCache: { [typeName: string]: ReferenceType } = {};
const inProgressTypes: { [typeName: string]: boolean } = {};

export class TypesResolver {
  public static getCommonPrimitiveAndArrayUnionType(
    typeNode?: ts.TypeNode
  ): Type | null {
    if (typeNode && typeNode.kind === ts.SyntaxKind.UnionType) {
      const union = typeNode as ts.UnionTypeNode;
      const types = union.types.map(t => new TypesResolver(t).resolveType());
      const arrType = types.find(t => t.typeName === 'array') as
        | ArrayType
        | undefined;
      const primitiveType = types.find(t => t.typeName !== 'array');

      if (
        types.length === 2 &&
        arrType &&
        arrType.elementType &&
        primitiveType &&
        arrType.elementType.typeName === primitiveType.typeName
      ) {
        return arrType;
      }
    }

    return null;
  }

  constructor(
    readonly typeNode?: ts.TypeNode,
    readonly genericTypeMap?: Map<String, ts.TypeReferenceNode>
  ) {}

  public resolveType(): Type {
    const typeNode = this.typeNode;
    if (!typeNode) {
      return { typeName: 'void' };
    }
    const primitiveType = getPrimitiveType(typeNode);
    if (primitiveType) {
      return primitiveType;
    }

    if (typeNode.kind === ts.SyntaxKind.ArrayType) {
      const arrayType = typeNode as ts.ArrayTypeNode;
      const elementType = new TypesResolver(
        arrayType.elementType,
        this.genericTypeMap
      ).resolveType();
      return <ArrayType>{
        elementType,
        typeName: 'array'
      };
    }

    if (
      typeNode.kind === ts.SyntaxKind.UnionType ||
      typeNode.kind === ts.SyntaxKind.AnyKeyword ||
      typeNode.kind === ts.SyntaxKind.ObjectKeyword
    ) {
      return { typeName: 'object' };
    }

    if (typeNode.kind === ts.SyntaxKind.TypeLiteral) {
      return this.getInlineObjectType(typeNode);
    }

    if (typeNode.kind !== ts.SyntaxKind.TypeReference) {
      throw new Error(`Unknown type: ${ts.SyntaxKind[typeNode.kind]}`);
    }
    let typeReference: any = typeNode;
    let typeName = resolveSimpleTypeName(
      typeReference.typeName as ts.EntityName
    );

    if (typeName === 'Date') {
      return getDateType(typeNode);
    }
    if (typeName === 'Buffer') {
      return { typeName: 'buffer' };
    }
    if (typeName === 'DownloadBinaryData') {
      return { typeName: 'buffer' };
    }
    if (typeName === 'DownloadResource') {
      return { typeName: 'buffer' };
    }

    if (typeName === 'Promise') {
      typeReference = typeReference.typeArguments[0];
      return new TypesResolver(
        typeReference,
        this.genericTypeMap
      ).resolveType();
    }
    if (typeName === 'Array') {
      typeReference = typeReference.typeArguments[0];
      const elementType = new TypesResolver(
        typeReference,
        this.genericTypeMap
      ).resolveType();
      return <ArrayType>{
        elementType,
        typeName: 'array'
      };
    }

    const enumType = getEnumerateType(typeNode);
    if (enumType) {
      return enumType;
    }

    const literalType = getLiteralType(typeNode);
    if (literalType) {
      return literalType;
    }

    let referenceType: ReferenceType;

    if (
      typeReference.typeArguments &&
      typeReference.typeArguments.length === 1
    ) {
      const typeT: ts.TypeNode[] = typeReference.typeArguments as ts.TypeNode[];
      referenceType = this.getReferenceType(
        typeReference.typeName as ts.EntityName,
        this.genericTypeMap,
        typeT
      );
      typeName = resolveSimpleTypeName(typeReference.typeName as ts.EntityName);
      if (
        [
          'NewResource',
          'RequestAccepted',
          'MovedPermanently',
          'MovedTemporarily'
        ].indexOf(typeName) >= 0
      ) {
        referenceType.typeName = typeName;
        referenceType.typeArgument = new TypesResolver(
          typeT[0],
          this.genericTypeMap
        ).resolveType();
      } else {
        MetadataGenerator.current.addReferenceType(referenceType);
      }
    } else {
      referenceType = this.getReferenceType(
        typeReference.typeName as ts.EntityName,
        this.genericTypeMap
      );
      MetadataGenerator.current.addReferenceType(referenceType);
    }

    return referenceType;
  }

  private getReferenceType(
    type: ts.EntityName,
    genericTypeMap?: Map<String, ts.TypeNode>,
    genericTypes?: ts.TypeNode[]
  ): ReferenceType {
    let typeName = resolveFqTypeName(type);
    if (genericTypeMap && genericTypeMap.has(typeName)) {
      const refType: any = genericTypeMap.get(typeName);
      type = refType.typeName as ts.EntityName;
      typeName = resolveFqTypeName(type);
    }
    const typeNameWithGenerics = getTypeName(typeName, genericTypes);

    try {
      const existingType = localReferenceTypeCache[typeNameWithGenerics];
      if (existingType) {
        return existingType;
      }

      if (inProgressTypes[typeNameWithGenerics]) {
        return createCircularDependencyResolver(typeNameWithGenerics);
      }

      inProgressTypes[typeNameWithGenerics] = true;

      const modelTypeDeclaration = this.getModelTypeDeclaration(type);

      const properties = this.getModelTypeProperties(
        modelTypeDeclaration,
        genericTypes
      );
      const additionalProperties = this.getModelTypeAdditionalProperties(
        modelTypeDeclaration
      );

      const referenceType: ReferenceType = {
        description: getModelDescription(modelTypeDeclaration),
        properties: properties,
        typeName: typeNameWithGenerics
      };
      if (additionalProperties && additionalProperties.length) {
        referenceType.additionalProperties = additionalProperties;
      }

      const extendedProperties = this.getInheritedProperties(
        modelTypeDeclaration,
        genericTypes
      );
      mergeReferenceTypeProperties(
        referenceType.properties,
        extendedProperties
      );

      localReferenceTypeCache[typeNameWithGenerics] = referenceType;

      return referenceType;
    } catch (err) {
      console.error(
        `There was a problem resolving type of '${getTypeName(
          typeName,
          genericTypes
        )}'.`
      );
      throw err;
    }
  }

  private getInheritedProperties(
    modelTypeDeclaration: UsableDeclaration,
    genericTypes?: ts.TypeNode[]
  ): Property[] {
    const properties = new Array<Property>();
    if (modelTypeDeclaration.kind === ts.SyntaxKind.TypeAliasDeclaration) {
      return [];
    }
    const heritageClauses = modelTypeDeclaration.heritageClauses;
    if (!heritageClauses) {
      return properties;
    }

    heritageClauses.forEach(clause => {
      if (!clause.types) {
        return;
      }

      clause.types.forEach((t: any) => {
        let type: any = MetadataGenerator.current.getClassDeclaration(
          t.expression.getText()
        );
        if (!type) {
          type = MetadataGenerator.current.getInterfaceDeclaration(
            t.expression.getText()
          );
        }
        const baseEntityName = t.expression as ts.EntityName;
        const parentGenericTypes = resolveTypeArguments(
          modelTypeDeclaration as ts.ClassDeclaration,
          genericTypes
        );
        const genericTypeMap = resolveTypeArguments(
          type,
          t.typeArguments,
          parentGenericTypes
        );
        const subClassGenericTypes: any = getSubClassGenericTypes(
          genericTypeMap,
          t.typeArguments
        );
        this.getReferenceType(
          baseEntityName,
          genericTypeMap,
          subClassGenericTypes
        ).properties.forEach(property => properties.push(property));
      });
    });

    return properties;
  }

  private getModelTypeAdditionalProperties(node: UsableDeclaration) {
    if (node.kind === ts.SyntaxKind.InterfaceDeclaration) {
      const interfaceDeclaration = node as ts.InterfaceDeclaration;
      return interfaceDeclaration.members
        .filter(member => member.kind === ts.SyntaxKind.IndexSignature)
        .map((member: any) => {
          const indexSignatureDeclaration = member as ts.IndexSignatureDeclaration;

          const indexType = new TypesResolver(
            indexSignatureDeclaration.parameters[0].type
          ).resolveType();
          if (indexType.typeName !== 'string') {
            throw new Error(
              `Only string indexers are supported. Found ${indexType.typeName}.`
            );
          }

          return {
            description: '',
            name: '',
            required: true,
            type: new TypesResolver(<ts.TypeNode>(
              indexSignatureDeclaration.type
            )).resolveType()
          };
        });
    }

    return undefined;
  }

  private getModelTypeDeclaration(type: ts.EntityName) {
    const leftmostIdentifier = resolveLeftmostIdentifier(type);
    const statements: any[] = resolveModelTypeScope(
      leftmostIdentifier,
      MetadataGenerator.current.nodes
    );

    let typeName =
      type.kind === ts.SyntaxKind.Identifier
        ? (type as ts.Identifier).text
        : (type as ts.QualifiedName).right.text;

    if (this.genericTypeMap && this.genericTypeMap.has(typeName)) {
      const genericType = this.genericTypeMap.get(typeName);
      typeName = genericType.typeName.getText();
    }

    const modelTypes = statements.filter(node => {
      if (!nodeIsUsable(node)) {
        return false;
      }

      const modelTypeDeclaration = node as UsableDeclaration;
      return (modelTypeDeclaration.name as ts.Identifier).text === typeName;
    }) as Array<UsableDeclaration>;

    if (!modelTypes.length) {
      return null;
    }

    const modelType = modelTypes[0];
    return modelType;
  }

  private getInlineObjectType(typeNode: ts.TypeNode): ObjectType {
    const type: ObjectType = {
      properties: this.getModelTypeProperties(typeNode),
      typeName: ''
    };
    return type;
  }

  private getModelTypeProperties(
    node: any,
    genericTypes?: ts.TypeNode[]
  ): Property[] {
    const genericMapping = new Map<string, ts.TypeReferenceNode>();
    if (
      genericTypes &&
      node.typeParameters &&
      node.typeParameters.length === genericTypes.length
    ) {
      node.typeParameters.forEach(
        (p: { name: { text: string } }, index: number) => {
          genericMapping.set(p.name.text, genericTypes[
            index
          ] as ts.TypeReferenceNode);
        }
      );
    }

    if (
      node.kind === ts.SyntaxKind.TypeLiteral ||
      node.kind === ts.SyntaxKind.InterfaceDeclaration
    ) {
      const interfaceDeclaration = node as ts.InterfaceDeclaration;
      return interfaceDeclaration.members
        .filter(member => {
          if (
            (<any>member).type &&
            (<any>member).type.kind === ts.SyntaxKind.FunctionType
          ) {
            return false;
          }
          return member.kind === ts.SyntaxKind.PropertySignature;
        })
        .map((member: any) => {
          const propertyDeclaration = member as ts.PropertyDeclaration;
          const identifier = propertyDeclaration.name as ts.Identifier;

          if (!propertyDeclaration.type) {
            throw new Error('No valid type found for property declaration.');
          }

          // Declare a variable that can be overridden if needed
          let aType = propertyDeclaration.type;

          // aType.kind will always be a TypeReference when the property of Interface<T> is of type T
          if (
            aType.kind === ts.SyntaxKind.TypeReference &&
            genericTypes &&
            genericTypes.length &&
            node.typeParameters
          ) {
            // The type definitions are conveniently located on the object which allow us to map -> to the genericTypes
            const typeParams = _.map(
              node.typeParameters,
              (typeParam: ts.TypeParameterDeclaration) => {
                return typeParam.name.text;
              }
            );

            // I am not sure in what cases
            const typeIdentifier = (aType as ts.TypeReferenceNode).typeName;
            let typeIdentifierName: string;

            // typeIdentifier can either be a Identifier or a QualifiedName
            if ((typeIdentifier as ts.Identifier).text) {
              typeIdentifierName = (typeIdentifier as ts.Identifier).text;
            } else {
              typeIdentifierName = (typeIdentifier as ts.QualifiedName).right
                .text;
            }

            // I could not produce a situation where this did not find it so its possible this check is irrelevant
            const indexOfType = _.indexOf<string>(
              typeParams,
              typeIdentifierName
            );
            if (indexOfType >= 0) {
              aType = genericTypes[indexOfType] as ts.TypeNode;
            }
          }

          return {
            description: getNodeDescription(propertyDeclaration),
            name: identifier.text,
            required: !propertyDeclaration.questionToken,
            type: new TypesResolver(aType, genericMapping).resolveType()
          };
        });
    }

    if (node.kind === ts.SyntaxKind.TypeAliasDeclaration) {
      return this.getModelTypeProperties(<any>node.type, genericTypes);
    }

    const classDeclaration = node as ts.ClassDeclaration;

    let properties = classDeclaration.members.filter((member: any) => {
      if (member.kind !== ts.SyntaxKind.PropertyDeclaration) {
        return false;
      }

      const propertySignature = member as ts.PropertySignature;
      return propertySignature && hasPublicMemberModifier(propertySignature);
    }) as Array<ts.PropertyDeclaration | ts.ParameterDeclaration>;

    const classConstructor = classDeclaration.members.find(
      (member: any) => member.kind === ts.SyntaxKind.Constructor
    ) as ts.ConstructorDeclaration;
    if (classConstructor && classConstructor.parameters) {
      properties = properties.concat(classConstructor.parameters.filter(
        parameter => hasPublicConstructorModifier(parameter)
      ) as any);
    }

    return properties.map(declaration => {
      const identifier = declaration.name as ts.Identifier;
      if (!declaration.type) {
        throw new Error('No valid type found for property declaration.');
      }
      const name = identifier.text;
      const description = getNodeDescription(declaration);
      const typeNode = resolveTypeParameter(
        declaration.type,
        classDeclaration,
        genericTypes
      );

      // const genericTypeMap = new Map();
      // (genericTypes || []).forEach((t: any) => {
      //   genericTypeMap.set(t.typeName.text, t);
      // });

      const type = new TypesResolver(typeNode, genericMapping).resolveType();
      return {
        description,
        name,
        required: !declaration.questionToken,
        type
      };
    });
  }
}
