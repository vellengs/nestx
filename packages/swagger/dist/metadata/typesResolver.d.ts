import * as ts from 'typescript';
import { Type } from './';
export declare class TypesResolver {
    readonly typeNode?: ts.TypeNode;
    readonly genericTypeMap?: Map<String, ts.TypeReferenceNode>;
    static getCommonPrimitiveAndArrayUnionType(typeNode?: ts.TypeNode): Type | null;
    constructor(typeNode?: ts.TypeNode, genericTypeMap?: Map<String, ts.TypeReferenceNode>);
    resolveType(): Type;
    private getReferenceType;
    private getInheritedProperties;
    private getModelTypeAdditionalProperties;
    private getModelTypeDeclaration;
    private getInlineObjectType;
    private getModelTypeProperties;
}
