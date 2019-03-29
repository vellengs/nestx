"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const _ = require("lodash");
const resolveUtils_1 = require("../utils/resolveUtils");
const metadataGenerator_1 = require("./metadataGenerator");
const localReferenceTypeCache = {};
const inProgressTypes = {};
class TypesResolver {
    constructor(typeNode, genericTypeMap) {
        this.typeNode = typeNode;
        this.genericTypeMap = genericTypeMap;
    }
    static getCommonPrimitiveAndArrayUnionType(typeNode) {
        if (typeNode && typeNode.kind === ts.SyntaxKind.UnionType) {
            const union = typeNode;
            const types = union.types.map(t => new TypesResolver(t).resolveType());
            const arrType = types.find(t => t.typeName === 'array');
            const primitiveType = types.find(t => t.typeName !== 'array');
            if (types.length === 2 &&
                arrType &&
                arrType.elementType &&
                primitiveType &&
                arrType.elementType.typeName === primitiveType.typeName) {
                return arrType;
            }
        }
        return null;
    }
    resolveType() {
        const typeNode = this.typeNode;
        if (!typeNode) {
            return { typeName: 'void' };
        }
        const primitiveType = resolveUtils_1.getPrimitiveType(typeNode);
        if (primitiveType) {
            return primitiveType;
        }
        if (typeNode.kind === ts.SyntaxKind.ArrayType) {
            const arrayType = typeNode;
            const elementType = new TypesResolver(arrayType.elementType, this.genericTypeMap).resolveType();
            return {
                elementType,
                typeName: 'array'
            };
        }
        if (typeNode.kind === ts.SyntaxKind.UnionType ||
            typeNode.kind === ts.SyntaxKind.AnyKeyword ||
            typeNode.kind === ts.SyntaxKind.ObjectKeyword) {
            return { typeName: 'object' };
        }
        if (typeNode.kind === ts.SyntaxKind.TypeLiteral) {
            return this.getInlineObjectType(typeNode);
        }
        if (typeNode.kind !== ts.SyntaxKind.TypeReference) {
            throw new Error(`Unknown type: ${ts.SyntaxKind[typeNode.kind]}`);
        }
        let typeReference = typeNode;
        let typeName = resolveUtils_1.resolveSimpleTypeName(typeReference.typeName);
        if (typeName === 'Date') {
            return resolveUtils_1.getDateType(typeNode);
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
            return new TypesResolver(typeReference, this.genericTypeMap).resolveType();
        }
        if (typeName === 'Array') {
            typeReference = typeReference.typeArguments[0];
            const elementType = new TypesResolver(typeReference, this.genericTypeMap).resolveType();
            return {
                elementType,
                typeName: 'array'
            };
        }
        const enumType = resolveUtils_1.getEnumerateType(typeNode);
        if (enumType) {
            return enumType;
        }
        const literalType = resolveUtils_1.getLiteralType(typeNode);
        if (literalType) {
            return literalType;
        }
        let referenceType;
        if (typeReference.typeArguments &&
            typeReference.typeArguments.length === 1) {
            const typeT = typeReference.typeArguments;
            referenceType = this.getReferenceType(typeReference.typeName, this.genericTypeMap, typeT);
            typeName = resolveUtils_1.resolveSimpleTypeName(typeReference.typeName);
            if ([
                'NewResource',
                'RequestAccepted',
                'MovedPermanently',
                'MovedTemporarily'
            ].indexOf(typeName) >= 0) {
                referenceType.typeName = typeName;
                referenceType.typeArgument = new TypesResolver(typeT[0], this.genericTypeMap).resolveType();
            }
            else {
                metadataGenerator_1.MetadataGenerator.current.addReferenceType(referenceType);
            }
        }
        else {
            referenceType = this.getReferenceType(typeReference.typeName, this.genericTypeMap);
            metadataGenerator_1.MetadataGenerator.current.addReferenceType(referenceType);
        }
        return referenceType;
    }
    getReferenceType(type, genericTypeMap, genericTypes) {
        let typeName = resolveUtils_1.resolveFqTypeName(type);
        if (genericTypeMap && genericTypeMap.has(typeName)) {
            const refType = genericTypeMap.get(typeName);
            type = refType.typeName;
            typeName = resolveUtils_1.resolveFqTypeName(type);
        }
        const typeNameWithGenerics = resolveUtils_1.getTypeName(typeName, genericTypes);
        try {
            const existingType = localReferenceTypeCache[typeNameWithGenerics];
            if (existingType) {
                return existingType;
            }
            if (inProgressTypes[typeNameWithGenerics]) {
                return resolveUtils_1.createCircularDependencyResolver(typeNameWithGenerics);
            }
            inProgressTypes[typeNameWithGenerics] = true;
            const modelTypeDeclaration = this.getModelTypeDeclaration(type);
            const properties = this.getModelTypeProperties(modelTypeDeclaration, genericTypes);
            const additionalProperties = this.getModelTypeAdditionalProperties(modelTypeDeclaration);
            const referenceType = {
                description: resolveUtils_1.getModelDescription(modelTypeDeclaration),
                properties: properties,
                typeName: typeNameWithGenerics
            };
            if (additionalProperties && additionalProperties.length) {
                referenceType.additionalProperties = additionalProperties;
            }
            const extendedProperties = this.getInheritedProperties(modelTypeDeclaration, genericTypes);
            resolveUtils_1.mergeReferenceTypeProperties(referenceType.properties, extendedProperties);
            localReferenceTypeCache[typeNameWithGenerics] = referenceType;
            return referenceType;
        }
        catch (err) {
            console.error(`There was a problem resolving type of '${resolveUtils_1.getTypeName(typeName, genericTypes)}'.`);
            throw err;
        }
    }
    getInheritedProperties(modelTypeDeclaration, genericTypes) {
        const properties = new Array();
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
            clause.types.forEach((t) => {
                let type = metadataGenerator_1.MetadataGenerator.current.getClassDeclaration(t.expression.getText());
                if (!type) {
                    type = metadataGenerator_1.MetadataGenerator.current.getInterfaceDeclaration(t.expression.getText());
                }
                const baseEntityName = t.expression;
                const parentGenericTypes = resolveUtils_1.resolveTypeArguments(modelTypeDeclaration, genericTypes);
                const genericTypeMap = resolveUtils_1.resolveTypeArguments(type, t.typeArguments, parentGenericTypes);
                const subClassGenericTypes = resolveUtils_1.getSubClassGenericTypes(genericTypeMap, t.typeArguments);
                this.getReferenceType(baseEntityName, genericTypeMap, subClassGenericTypes).properties.forEach(property => properties.push(property));
            });
        });
        return properties;
    }
    getModelTypeAdditionalProperties(node) {
        if (node.kind === ts.SyntaxKind.InterfaceDeclaration) {
            const interfaceDeclaration = node;
            return interfaceDeclaration.members
                .filter(member => member.kind === ts.SyntaxKind.IndexSignature)
                .map((member) => {
                const indexSignatureDeclaration = member;
                const indexType = new TypesResolver(indexSignatureDeclaration.parameters[0].type).resolveType();
                if (indexType.typeName !== 'string') {
                    throw new Error(`Only string indexers are supported. Found ${indexType.typeName}.`);
                }
                return {
                    description: '',
                    name: '',
                    required: true,
                    type: new TypesResolver((indexSignatureDeclaration.type)).resolveType()
                };
            });
        }
        return undefined;
    }
    getModelTypeDeclaration(type) {
        const leftmostIdentifier = resolveUtils_1.resolveLeftmostIdentifier(type);
        const statements = resolveUtils_1.resolveModelTypeScope(leftmostIdentifier, metadataGenerator_1.MetadataGenerator.current.nodes);
        let typeName = type.kind === ts.SyntaxKind.Identifier
            ? type.text
            : type.right.text;
        if (this.genericTypeMap && this.genericTypeMap.has(typeName)) {
            const genericType = this.genericTypeMap.get(typeName);
            typeName = genericType.typeName.getText();
        }
        const modelTypes = statements.filter(node => {
            if (!resolveUtils_1.nodeIsUsable(node)) {
                return false;
            }
            const modelTypeDeclaration = node;
            return modelTypeDeclaration.name.text === typeName;
        });
        if (!modelTypes.length) {
            return null;
        }
        const modelType = modelTypes[0];
        return modelType;
    }
    getInlineObjectType(typeNode) {
        const type = {
            properties: this.getModelTypeProperties(typeNode),
            typeName: ''
        };
        return type;
    }
    getModelTypeProperties(node, genericTypes) {
        const genericMapping = new Map();
        if (genericTypes &&
            node.typeParameters &&
            node.typeParameters.length === genericTypes.length) {
            node.typeParameters.forEach((p, index) => {
                genericMapping.set(p.name.text, genericTypes[index]);
            });
        }
        if (node.kind === ts.SyntaxKind.TypeLiteral ||
            node.kind === ts.SyntaxKind.InterfaceDeclaration) {
            const interfaceDeclaration = node;
            return interfaceDeclaration.members
                .filter(member => {
                if (member.type &&
                    member.type.kind === ts.SyntaxKind.FunctionType) {
                    return false;
                }
                return member.kind === ts.SyntaxKind.PropertySignature;
            })
                .map((member) => {
                const propertyDeclaration = member;
                const identifier = propertyDeclaration.name;
                if (!propertyDeclaration.type) {
                    throw new Error('No valid type found for property declaration.');
                }
                let aType = propertyDeclaration.type;
                if (aType.kind === ts.SyntaxKind.TypeReference &&
                    genericTypes &&
                    genericTypes.length &&
                    node.typeParameters) {
                    const typeParams = _.map(node.typeParameters, (typeParam) => {
                        return typeParam.name.text;
                    });
                    const typeIdentifier = aType.typeName;
                    let typeIdentifierName;
                    if (typeIdentifier.text) {
                        typeIdentifierName = typeIdentifier.text;
                    }
                    else {
                        typeIdentifierName = typeIdentifier.right
                            .text;
                    }
                    const indexOfType = _.indexOf(typeParams, typeIdentifierName);
                    if (indexOfType >= 0) {
                        aType = genericTypes[indexOfType];
                    }
                }
                return {
                    description: resolveUtils_1.getNodeDescription(propertyDeclaration),
                    name: identifier.text,
                    required: !propertyDeclaration.questionToken,
                    type: new TypesResolver(aType, genericMapping).resolveType()
                };
            });
        }
        if (node.kind === ts.SyntaxKind.TypeAliasDeclaration) {
            return this.getModelTypeProperties(node.type, genericTypes);
        }
        const classDeclaration = node;
        let properties = classDeclaration.members.filter((member) => {
            if (member.kind !== ts.SyntaxKind.PropertyDeclaration) {
                return false;
            }
            const propertySignature = member;
            return propertySignature && resolveUtils_1.hasPublicMemberModifier(propertySignature);
        });
        const classConstructor = classDeclaration.members.find((member) => member.kind === ts.SyntaxKind.Constructor);
        if (classConstructor && classConstructor.parameters) {
            properties = properties.concat(classConstructor.parameters.filter(parameter => resolveUtils_1.hasPublicConstructorModifier(parameter)));
        }
        return properties.map(declaration => {
            const identifier = declaration.name;
            if (!declaration.type) {
                throw new Error('No valid type found for property declaration.');
            }
            const name = identifier.text;
            const description = resolveUtils_1.getNodeDescription(declaration);
            const typeNode = resolveUtils_1.resolveTypeParameter(declaration.type, classDeclaration, genericTypes);
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
exports.TypesResolver = TypesResolver;
