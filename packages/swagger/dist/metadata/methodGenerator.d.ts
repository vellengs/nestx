import * as ts from 'typescript';
import { Method } from './';
export declare class MethodGenerator {
    private readonly node;
    private readonly controllerPath;
    private readonly genericTypeMap?;
    private method;
    private path;
    constructor(node: ts.MethodDeclaration, controllerPath: string, genericTypeMap?: Map<String, ts.TypeReferenceNode>);
    isValid(): boolean;
    getMethodName(): string;
    generate(): Method;
    private buildParameters;
    private getCurrentLocation;
    private processMethodDecorators;
    private getMethodResponses;
    private getMethodSuccessResponse;
    private getMethodSuccessResponseData;
    private getMethodSuccessExamples;
    private mergeResponses;
    private supportsPathMethod;
    private getExamplesValue;
    private getDecoratorValues;
    private getMethodSecurity;
    private getInitializerValue;
}
