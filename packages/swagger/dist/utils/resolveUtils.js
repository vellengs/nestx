"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decoratorUtils_1 = require("./decoratorUtils");
const jsDocUtils_1 = require("./jsDocUtils");
const ts = require("typescript");
const metadataGenerator_1 = require("./../metadata/metadataGenerator");
exports.syntaxKindMap = {};
exports.syntaxKindMap[ts.SyntaxKind.NumberKeyword] = 'number';
exports.syntaxKindMap[ts.SyntaxKind.StringKeyword] = 'string';
exports.syntaxKindMap[ts.SyntaxKind.BooleanKeyword] = 'boolean';
exports.syntaxKindMap[ts.SyntaxKind.VoidKeyword] = 'void';
function getPrimitiveType(typeNode) {
    const primitiveType = exports.syntaxKindMap[typeNode.kind];
    if (!primitiveType) {
        return;
    }
    if (primitiveType === 'number') {
        const parentNode = typeNode.parent;
        if (!parentNode) {
            return { typeName: 'double' };
        }
        const validDecorators = ['IsInt', 'IsLong', 'IsFloat', 'IsDouble'];
        const jsdocTagName = jsDocUtils_1.getFirstMatchingJSDocTagName(parentNode, tag => {
            return validDecorators.some(t => t === tag.tagName.text);
        });
        const decoratorName = decoratorUtils_1.getDecoratorName(parentNode, identifier => {
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
exports.getPrimitiveType = getPrimitiveType;
function resolveSimpleTypeName(type) {
    if (type.kind === ts.SyntaxKind.Identifier) {
        return type.text;
    }
    const qualifiedType = type;
    return qualifiedType.right.text;
}
exports.resolveSimpleTypeName = resolveSimpleTypeName;
function getDateType(typeNode) {
    const parentNode = typeNode.parent;
    if (!parentNode) {
        return { typeName: 'datetime' };
    }
    const decoratorName = decoratorUtils_1.getDecoratorName(parentNode, identifier => {
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
exports.getDateType = getDateType;
function getEnumerateType(typeNode) {
    const enumName = typeNode.typeName.text;
    const enumTypes = metadataGenerator_1.MetadataGenerator.current.nodes
        .filter(node => node.kind === ts.SyntaxKind.EnumDeclaration)
        .filter(node => node.name.text === enumName);
    if (!enumTypes.length) {
        return;
    }
    if (enumTypes.length > 1) {
        throw new Error(`Multiple matching enum found for enum ${enumName}; please make enum names unique.`);
    }
    const enumDeclaration = enumTypes[0];
    function getEnumValue(member) {
        const initializer = member.initializer;
        if (initializer) {
            if (initializer.expression) {
                return initializer.expression.text;
            }
            return initializer.text;
        }
        return;
    }
    return {
        enumMembers: enumDeclaration.members.map((member, index) => {
            return getEnumValue(member) || index;
        }),
        typeName: 'enum'
    };
}
exports.getEnumerateType = getEnumerateType;
function getLiteralType(typeNode) {
    const literalName = typeNode.typeName.text;
    const literalTypes = metadataGenerator_1.MetadataGenerator.current.nodes
        .filter(node => node.kind === ts.SyntaxKind.TypeAliasDeclaration)
        .filter(node => {
        const innerType = node.type;
        return (innerType.kind === ts.SyntaxKind.UnionType && innerType.types);
    })
        .filter(node => node.name.text === literalName);
    if (!literalTypes.length) {
        return;
    }
    if (literalTypes.length > 1) {
        throw new Error(`Multiple matching enum found for enum ${literalName}; please make enum names unique.`);
    }
    const unionTypes = literalTypes[0].type.types;
    return {
        enumMembers: unionTypes.map((unionNode) => {
            if (unionNode && unionNode.literal) {
                return unionNode.literal.text;
            }
            else {
                return '';
            }
        }),
        typeName: 'enum'
    };
}
exports.getLiteralType = getLiteralType;
function getTypeName(typeName, genericTypes) {
    if (!genericTypes || !genericTypes.length) {
        return typeName;
    }
    return typeName + '$' + genericTypes.map(t => getAnyTypeName(t)).join('');
}
exports.getTypeName = getTypeName;
function getAnyTypeName(typeNode) {
    const primitiveType = exports.syntaxKindMap[typeNode.kind];
    if (primitiveType) {
        return primitiveType;
    }
    if (typeNode.kind === ts.SyntaxKind.ArrayType) {
        const arrayType = typeNode;
        return getAnyTypeName(arrayType.elementType) + 'Array';
    }
    if (typeNode.kind === ts.SyntaxKind.UnionType ||
        typeNode.kind === ts.SyntaxKind.AnyKeyword) {
        return 'object';
    }
    if (typeNode.kind !== ts.SyntaxKind.TypeReference) {
        throw new Error(`Unknown type: ${ts.SyntaxKind[typeNode.kind]}`);
    }
    const typeReference = typeNode;
    try {
        return typeReference.typeName.text;
    }
    catch (e) {
        console.error(e);
        return typeNode.toString();
    }
}
exports.getAnyTypeName = getAnyTypeName;
function resolveFqTypeName(type) {
    if (type.kind === ts.SyntaxKind.Identifier) {
        return type.text;
    }
    const qualifiedType = type;
    return (resolveFqTypeName(qualifiedType.left) +
        '.' +
        qualifiedType.right.text);
}
exports.resolveFqTypeName = resolveFqTypeName;
function createCircularDependencyResolver(typeName) {
    const referenceType = {
        description: '',
        properties: new Array(),
        typeName: typeName
    };
    metadataGenerator_1.MetadataGenerator.current.onFinish(referenceTypes => {
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
exports.createCircularDependencyResolver = createCircularDependencyResolver;
function getModelDescription(modelTypeDeclaration) {
    return getNodeDescription(modelTypeDeclaration);
}
exports.getModelDescription = getModelDescription;
function getNodeDescription(node) {
    const symbol = metadataGenerator_1.MetadataGenerator.current.typeChecker.getSymbolAtLocation(node.name);
    if (symbol) {
        if (node.kind === ts.SyntaxKind.Parameter) {
            symbol.flags = 0;
        }
        const comments = symbol.getDocumentationComment(metadataGenerator_1.MetadataGenerator.current.typeChecker);
        if (comments.length) {
            return ts.displayPartsToString(comments);
        }
    }
    return '';
}
exports.getNodeDescription = getNodeDescription;
function resolveTypeArguments(node, typeArguments, parentTypeArguments) {
    const result = buildGenericTypeMap(node, typeArguments);
    if (parentTypeArguments) {
        result.forEach((value, key) => {
            const typeName = getAnyTypeName(value);
            if (parentTypeArguments.has(typeName)) {
                result.set(key, parentTypeArguments.get(typeName));
            }
        });
    }
    return result;
}
exports.resolveTypeArguments = resolveTypeArguments;
function buildGenericTypeMap(node, typeArguments) {
    const result = new Map();
    if (node.typeParameters && typeArguments) {
        node.typeParameters.forEach((typeParam, index) => {
            const paramName = typeParam.name.text;
            result.set(paramName, typeArguments[index]);
        });
    }
    return result;
}
exports.buildGenericTypeMap = buildGenericTypeMap;
function getSubClassGenericTypes(genericTypeMap, typeArguments) {
    if (genericTypeMap && typeArguments) {
        const result = [];
        typeArguments.forEach((t) => {
            const typeName = getAnyTypeName(t);
            if (genericTypeMap.has(typeName)) {
                result.push(genericTypeMap.get(typeName));
            }
            else {
                result.push(t);
            }
        });
        return result;
    }
    return null;
}
exports.getSubClassGenericTypes = getSubClassGenericTypes;
function mergeReferenceTypeProperties(properties, extendedProperties) {
    extendedProperties.forEach(prop => {
        const existingProp = properties.find(p => p.name === prop.name);
        if (existingProp) {
            existingProp.description = existingProp.description || prop.description;
        }
        else {
            properties.push(prop);
        }
    });
}
exports.mergeReferenceTypeProperties = mergeReferenceTypeProperties;
function nodeIsUsable(node) {
    switch (node.kind) {
        case ts.SyntaxKind.InterfaceDeclaration:
        case ts.SyntaxKind.ClassDeclaration:
        case ts.SyntaxKind.TypeAliasDeclaration:
            return true;
        default:
            return false;
    }
}
exports.nodeIsUsable = nodeIsUsable;
function resolveLeftmostIdentifier(type) {
    while (type.kind !== ts.SyntaxKind.Identifier) {
        type = type.left;
    }
    return type;
}
exports.resolveLeftmostIdentifier = resolveLeftmostIdentifier;
function resolveModelTypeScope(leftmost, statements) {
    return statements;
}
exports.resolveModelTypeScope = resolveModelTypeScope;
function hasPublicMemberModifier(node) {
    return (!node.modifiers ||
        node.modifiers.every(modifier => {
            return (modifier.kind !== ts.SyntaxKind.ProtectedKeyword &&
                modifier.kind !== ts.SyntaxKind.PrivateKeyword);
        }));
}
exports.hasPublicMemberModifier = hasPublicMemberModifier;
function hasPublicConstructorModifier(node) {
    return (node.modifiers &&
        node.modifiers.some(modifier => {
            return modifier.kind === ts.SyntaxKind.PublicKeyword;
        }));
}
exports.hasPublicConstructorModifier = hasPublicConstructorModifier;
function resolveTypeParameter(type, classDeclaration, genericTypes) {
    if (genericTypes &&
        classDeclaration.typeParameters &&
        classDeclaration.typeParameters.length) {
        for (let i = 0; i < classDeclaration.typeParameters.length; i++) {
            if (type.typeName &&
                classDeclaration.typeParameters[i].name.text === type.typeName.text) {
                return genericTypes[i];
            }
        }
    }
    return type;
}
exports.resolveTypeParameter = resolveTypeParameter;
function getLiteralValue(expression) {
    if (expression.kind === ts.SyntaxKind.StringLiteral) {
        return expression.text;
    }
    if (expression.kind === ts.SyntaxKind.NumericLiteral) {
        return parseFloat(expression.text);
    }
    if (expression.kind === ts.SyntaxKind.TrueKeyword) {
        return true;
    }
    if (expression.kind === ts.SyntaxKind.FalseKeyword) {
        return false;
    }
    if (expression.kind === ts.SyntaxKind.ArrayLiteralExpression) {
        return expression.elements.map(e => getLiteralValue(e));
    }
    return;
}
exports.getLiteralValue = getLiteralValue;
function getSuperClass(node, typeArguments) {
    const clauses = node.heritageClauses;
    if (clauses) {
        const filteredClauses = clauses.filter(clause => clause.token === ts.SyntaxKind.ExtendsKeyword);
        if (filteredClauses.length > 0) {
            const clause = filteredClauses[0];
            if (clause.types && clause.types.length) {
                const type = metadataGenerator_1.MetadataGenerator.current.getClassDeclaration(clause.types[0].expression.getText());
                return {
                    type: type,
                    typeArguments: resolveTypeArguments(type, clause.types[0].typeArguments, typeArguments)
                };
            }
        }
    }
    return undefined;
}
exports.getSuperClass = getSuperClass;
