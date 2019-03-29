import * as ts from 'typescript';
import { Type, Property, EnumerateType } from './../metadata';
export declare const syntaxKindMap: {
    [kind: number]: string;
};
export declare type UsableDeclaration = ts.InterfaceDeclaration | ts.ClassDeclaration | ts.TypeAliasDeclaration;
export declare function getPrimitiveType(typeNode: ts.TypeNode): Type | undefined;
export declare function resolveSimpleTypeName(type: ts.EntityName): string;
export declare function getDateType(typeNode: ts.TypeNode): Type;
export declare function getEnumerateType(typeNode: ts.TypeNode): EnumerateType | undefined;
export declare function getLiteralType(typeNode: ts.TypeNode): EnumerateType | undefined;
export declare function getTypeName(typeName: string, genericTypes?: ts.TypeNode[]): string;
export declare function getAnyTypeName(typeNode: ts.TypeNode): string;
export declare function resolveFqTypeName(type: ts.EntityName): string;
export declare function createCircularDependencyResolver(typeName: string): {
    description: string;
    properties: Property[];
    typeName: string;
};
export declare function getModelDescription(modelTypeDeclaration: UsableDeclaration): string;
export declare function getNodeDescription(node: UsableDeclaration | ts.PropertyDeclaration | ts.ParameterDeclaration): string;
export declare function resolveTypeArguments(node: ts.ClassDeclaration, typeArguments?: ReadonlyArray<ts.TypeNode>, parentTypeArguments?: Map<String, ts.TypeNode>): Map<String, ts.TypeNode>;
export declare function buildGenericTypeMap(node: ts.ClassDeclaration, typeArguments?: ReadonlyArray<ts.TypeNode>): Map<String, ts.TypeNode>;
export declare function getSubClassGenericTypes(genericTypeMap?: Map<String, ts.TypeNode>, typeArguments?: Array<ts.TypeNode>): ts.TypeNode[];
export declare function mergeReferenceTypeProperties(properties: Property[], extendedProperties: Property[]): void;
export declare function nodeIsUsable(node: ts.Node): boolean;
export declare function resolveLeftmostIdentifier(type: ts.EntityName): ts.Identifier;
export declare function resolveModelTypeScope(leftmost: ts.EntityName, statements: any[]): any[];
export declare function hasPublicMemberModifier(node: ts.Node): boolean;
export declare function hasPublicConstructorModifier(node: ts.Node): boolean;
export declare function resolveTypeParameter(type: any, classDeclaration: ts.ClassDeclaration, genericTypes?: ts.TypeNode[]): any;
export declare function getLiteralValue(expression: ts.Expression): any;
export declare function getSuperClass(node: ts.ClassDeclaration, typeArguments?: Map<String, ts.TypeNode>): {
    type: any;
    typeArguments: Map<String, ts.TypeNode>;
};
