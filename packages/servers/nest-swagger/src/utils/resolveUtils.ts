import { getDecoratorName } from './decoratorUtils';
import { getFirstMatchingJSDocTagName } from './jsDocUtils';
import * as ts from 'typescript';
import { Type, Property, EnumerateType } from './../metadata';
import { MetadataGenerator } from './../metadata/metadataGenerator';
export const syntaxKindMap: { [kind: number]: string } = {};
syntaxKindMap[ts.SyntaxKind.NumberKeyword] = 'number';
syntaxKindMap[ts.SyntaxKind.StringKeyword] = 'string';
syntaxKindMap[ts.SyntaxKind.BooleanKeyword] = 'boolean';
syntaxKindMap[ts.SyntaxKind.VoidKeyword] = 'void';

export type UsableDeclaration =
  | ts.InterfaceDeclaration
  | ts.ClassDeclaration
  | ts.TypeAliasDeclaration;

export function getPrimitiveType(typeNode: ts.TypeNode): Type | undefined {
  const primitiveType = syntaxKindMap[typeNode.kind];
  if (!primitiveType) {
    return;
  }

  if (primitiveType === 'number') {
    const parentNode = typeNode.parent as ts.Node;
    if (!parentNode) {
      return { typeName: 'double' };
    }

    const validDecorators = ['IsInt', 'IsLong', 'IsFloat', 'IsDouble'];

    // Can't use decorators on interface/type properties, so support getting the type from jsdoc too.
    const jsdocTagName = getFirstMatchingJSDocTagName(parentNode, tag => {
      return validDecorators.some(t => t === tag.tagName.text);
    });

    const decoratorName = getDecoratorName(parentNode, identifier => {
      return validDecorators.some(m => m === identifier.text);
    });

    switch (decoratorName || jsdocTagName) {
      case 'IsInt':
        return { typeName: 'integer' };
      case 'IsLong':
        return { typeName: 'long' };
      case 'IsFloat':
        return { typeName: 'float' };
      case 'IsDouble':
        return { typeName: 'double' };
      default:
        return { typeName: 'double' };
    }
  }
  return { typeName: primitiveType };
}

export function resolveSimpleTypeName(type: ts.EntityName): string {
  if (type.kind === ts.SyntaxKind.Identifier) {
    return (type as ts.Identifier).text;
  }
  const qualifiedType = type as ts.QualifiedName;
  return (qualifiedType.right as ts.Identifier).text;
}

export function getDateType(typeNode: ts.TypeNode): Type {
  const parentNode = typeNode.parent as ts.Node;
  if (!parentNode) {
    return { typeName: 'datetime' };
  }
  const decoratorName = getDecoratorName(parentNode, identifier => {
    return ['IsDate', 'IsDateTime'].some(m => m === identifier.text);
  });
  switch (decoratorName) {
    case 'IsDate':
      return { typeName: 'date' };
    case 'IsDateTime':
      return { typeName: 'datetime' };
    default:
      return { typeName: 'datetime' };
  }
}

export function getEnumerateType(
  typeNode: ts.TypeNode
): EnumerateType | undefined {
  const enumName = (typeNode as any).typeName.text;
  const enumTypes = MetadataGenerator.current.nodes
    .filter(node => node.kind === ts.SyntaxKind.EnumDeclaration)
    .filter(node => (node as any).name.text === enumName);

  if (!enumTypes.length) {
    return;
  }
  if (enumTypes.length > 1) {
    throw new Error(
      `Multiple matching enum found for enum ${enumName}; please make enum names unique.`
    );
  }

  const enumDeclaration = enumTypes[0] as ts.EnumDeclaration;

  function getEnumValue(member: any) {
    const initializer = member.initializer;
    if (initializer) {
      if (initializer.expression) {
        return initializer.expression.text;
      }
      return initializer.text;
    }
    return;
  }
  return <EnumerateType>{
    enumMembers: enumDeclaration.members.map((member: any, index) => {
      return getEnumValue(member) || index;
    }),
    typeName: 'enum'
  };
}

export function getLiteralType(
  typeNode: ts.TypeNode
): EnumerateType | undefined {
  const literalName = (typeNode as any).typeName.text;
  const literalTypes = MetadataGenerator.current.nodes
    .filter(node => node.kind === ts.SyntaxKind.TypeAliasDeclaration)
    .filter(node => {
      const innerType = (node as any).type;
      return (
        innerType.kind === ts.SyntaxKind.UnionType && (innerType as any).types
      );
    })
    .filter(node => (node as any).name.text === literalName);

  if (!literalTypes.length) {
    return;
  }
  if (literalTypes.length > 1) {
    throw new Error(
      `Multiple matching enum found for enum ${literalName}; please make enum names unique.`
    );
  }

  const unionTypes = (literalTypes[0] as any).type.types;
  return <EnumerateType>{
    enumMembers: unionTypes.map((unionNode: any) => {
      if (unionNode && unionNode.literal) {
        return unionNode.literal.text as string;
      } else {
        return ''; // TODO;
      }
    }),
    typeName: 'enum'
  };
}

export function getTypeName(
  typeName: string,
  genericTypes?: ts.TypeNode[]
): string {
  if (!genericTypes || !genericTypes.length) {
    return typeName;
  }
  return typeName + '$' + genericTypes.map(t => getAnyTypeName(t)).join('');
}

export function getAnyTypeName(typeNode: ts.TypeNode): string {
  const primitiveType = syntaxKindMap[typeNode.kind];
  if (primitiveType) {
    return primitiveType;
  }

  if (typeNode.kind === ts.SyntaxKind.ArrayType) {
    const arrayType = typeNode as ts.ArrayTypeNode;
    return getAnyTypeName(arrayType.elementType) + 'Array';
  }

  if (
    typeNode.kind === ts.SyntaxKind.UnionType ||
    typeNode.kind === ts.SyntaxKind.AnyKeyword
  ) {
    return 'object';
  }

  if (typeNode.kind !== ts.SyntaxKind.TypeReference) {
    throw new Error(`Unknown type: ${ts.SyntaxKind[typeNode.kind]}`);
  }

  const typeReference = typeNode as ts.TypeReferenceNode;
  try {
    return (typeReference.typeName as ts.Identifier).text;
  } catch (e) {
    // idk what would hit this? probably needs more testing
    console.error(e);
    return typeNode.toString();
  }
}

export function resolveFqTypeName(type: ts.EntityName): string {
  if (type.kind === ts.SyntaxKind.Identifier) {
    return (type as ts.Identifier).text;
  }

  const qualifiedType = type as ts.QualifiedName;
  return (
    resolveFqTypeName(qualifiedType.left) +
    '.' +
    (qualifiedType.right as ts.Identifier).text
  );
}

export function createCircularDependencyResolver(typeName: string) {
  const referenceType = {
    description: '',
    properties: new Array<Property>(),
    typeName: typeName
  };

  MetadataGenerator.current.onFinish(referenceTypes => {
    const realReferenceType = referenceTypes[typeName];
    if (!realReferenceType) {
      return;
    }
    referenceType.description = realReferenceType.description;
    referenceType.properties = realReferenceType.properties;
    referenceType.typeName = realReferenceType.typeName;
  });

  return referenceType;
}

export function getModelDescription(modelTypeDeclaration: UsableDeclaration) {
  return getNodeDescription(modelTypeDeclaration);
}

export function getNodeDescription(
  node: UsableDeclaration | ts.PropertyDeclaration | ts.ParameterDeclaration
) {
  const symbol = MetadataGenerator.current.typeChecker.getSymbolAtLocation(
    node.name as ts.Node
  );

  if (symbol) {
    /**
     * TODO: Workaround for what seems like a bug in the compiler
     * Warrants more investigation and possibly a PR against typescript
     */
    //
    if (node.kind === ts.SyntaxKind.Parameter) {
      // TypeScript won't parse jsdoc if the flag is 4, i.e. 'Property'
      symbol.flags = 0;
    }

    const comments = symbol.getDocumentationComment(
      MetadataGenerator.current.typeChecker
    );
    if (comments.length) {
      return ts.displayPartsToString(comments);
    }
  }

  return '';
}

export function resolveTypeArguments(
  node: ts.ClassDeclaration,
  typeArguments?: ReadonlyArray<ts.TypeNode>,
  parentTypeArguments?: Map<String, ts.TypeNode>
) {
  const result = buildGenericTypeMap(node, typeArguments);
  if (parentTypeArguments) {
    result.forEach((value: any, key) => {
      const typeName = getAnyTypeName(value);
      if (parentTypeArguments.has(typeName)) {
        result.set(key, <ts.TypeNode>parentTypeArguments.get(typeName));
      }
    });
  }
  return result;
}

export function buildGenericTypeMap(
  node: ts.ClassDeclaration,
  typeArguments?: ReadonlyArray<ts.TypeNode>
) {
  const result: Map<String, ts.TypeNode> = new Map<String, ts.TypeNode>();
  if (node.typeParameters && typeArguments) {
    node.typeParameters.forEach((typeParam, index) => {
      const paramName = typeParam.name.text;
      result.set(paramName, typeArguments[index]);
    });
  }
  return result;
}

export function getSubClassGenericTypes(
  genericTypeMap?: Map<String, ts.TypeNode>,
  typeArguments?: Array<ts.TypeNode>
) {
  if (genericTypeMap && typeArguments) {
    const result: Array<ts.TypeNode> = [];
    typeArguments.forEach((t: any) => {
      const typeName = getAnyTypeName(t);
      if (genericTypeMap.has(typeName)) {
        result.push(<ts.TypeNode>genericTypeMap.get(typeName));
      } else {
        result.push(t);
      }
    });
    return result;
  }
  return null;
}

export function mergeReferenceTypeProperties(
  properties: Property[],
  extendedProperties: Property[]
) {
  extendedProperties.forEach(prop => {
    const existingProp = properties.find(p => p.name === prop.name);
    if (existingProp) {
      existingProp.description = existingProp.description || prop.description;
    } else {
      properties.push(prop);
    }
  });
}

export function nodeIsUsable(node: ts.Node) {
  switch (node.kind) {
    case ts.SyntaxKind.InterfaceDeclaration:
    case ts.SyntaxKind.ClassDeclaration:
    case ts.SyntaxKind.TypeAliasDeclaration:
      return true;
    default:
      return false;
  }
}

export function resolveLeftmostIdentifier(type: ts.EntityName): ts.Identifier {
  while (type.kind !== ts.SyntaxKind.Identifier) {
    type = (type as ts.QualifiedName).left;
  }
  return type as ts.Identifier;
}

export function resolveModelTypeScope(
  leftmost: ts.EntityName,
  statements: any[]
): any[] {
  // TODO if has conflict types then need find unique type;
  return statements;
}

export function hasPublicMemberModifier(node: ts.Node) {
  return (
    !node.modifiers ||
    node.modifiers.every(modifier => {
      return (
        modifier.kind !== ts.SyntaxKind.ProtectedKeyword &&
        modifier.kind !== ts.SyntaxKind.PrivateKeyword
      );
    })
  );
}

export function hasPublicConstructorModifier(node: ts.Node) {
  return (
    node.modifiers &&
    node.modifiers.some(modifier => {
      return modifier.kind === ts.SyntaxKind.PublicKeyword;
    })
  );
}

export function resolveTypeParameter(
  type: any,
  classDeclaration: ts.ClassDeclaration,
  genericTypes?: ts.TypeNode[]
) {
  if (
    genericTypes &&
    classDeclaration.typeParameters &&
    classDeclaration.typeParameters.length
  ) {
    for (let i = 0; i < classDeclaration.typeParameters.length; i++) {
      if (
        type.typeName &&
        classDeclaration.typeParameters[i].name.text === type.typeName.text
      ) {
        return genericTypes[i];
      }
    }
  }
  return type;
}

export function getLiteralValue(expression: ts.Expression): any {
  if (expression.kind === ts.SyntaxKind.StringLiteral) {
    return (expression as ts.StringLiteral).text;
  }
  if (expression.kind === ts.SyntaxKind.NumericLiteral) {
    return parseFloat((expression as ts.NumericLiteral).text);
  }
  if (expression.kind === ts.SyntaxKind.TrueKeyword) {
    return true;
  }
  if (expression.kind === ts.SyntaxKind.FalseKeyword) {
    return false;
  }
  if (expression.kind === ts.SyntaxKind.ArrayLiteralExpression) {
    return (expression as ts.ArrayLiteralExpression).elements.map(e =>
      getLiteralValue(e)
    );
  }
  return;
}

export function getSuperClass(
  node: ts.ClassDeclaration,
  typeArguments?: Map<String, ts.TypeNode>
) {
  const clauses = node.heritageClauses;
  if (clauses) {
    const filteredClauses = clauses.filter(
      clause => clause.token === ts.SyntaxKind.ExtendsKeyword
    );
    if (filteredClauses.length > 0) {
      const clause: ts.HeritageClause = filteredClauses[0];
      if (clause.types && clause.types.length) {
        const type: any = MetadataGenerator.current.getClassDeclaration(
          clause.types[0].expression.getText()
        );
        return {
          type: type,
          typeArguments: resolveTypeArguments(
            type,
            clause.types[0].typeArguments,
            typeArguments
          )
        };
      }
    }
  }
  return undefined;
}
