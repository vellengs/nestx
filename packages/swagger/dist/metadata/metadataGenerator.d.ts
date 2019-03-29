import * as ts from 'typescript';
import { ReferenceType, Metadata } from '.';
export declare class MetadataGenerator {
    static current: MetadataGenerator;
    readonly nodes: ts.Node[];
    readonly typeChecker: ts.TypeChecker;
    private readonly program;
    private referenceTypes;
    private circularDependencyResolvers;
    constructor(entryFile: string, compilerOptions: ts.CompilerOptions);
    generate(): Metadata;
    TypeChecker(): ts.TypeChecker;
    addReferenceType(referenceType: ReferenceType): void;
    getReferenceType(typeName: string): ReferenceType;
    onFinish(callback: (referenceTypes: {
        [typeName: string]: ReferenceType;
    }) => void): void;
    getClassDeclaration(className: string): ts.Node;
    getInterfaceDeclaration(className: string): ts.Node;
    private buildControllers;
}
