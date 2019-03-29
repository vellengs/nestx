import { Parameter } from '.';
import * as ts from 'typescript';
export declare class ParameterGenerator {
    private readonly parameter;
    private readonly method;
    private readonly path;
    private readonly genericTypeMap?;
    constructor(parameter: ts.ParameterDeclaration, method: string, path: string, genericTypeMap?: Map<String, ts.TypeReferenceNode>);
    generate(): Parameter;
    private getCurrentLocation;
    private getContextParameter;
    private getFileParameter;
    private getFilesParameter;
    private getCookieParameter;
    private getBodyParameter;
    private getHeaderParameter;
    private getQueryParameter;
    private getPathParameter;
    private getParameterDescription;
    private getNameAndParameterName;
    private supportsBodyParameters;
    private supportParameterDecorator;
    private supportPathDataType;
    private supportQueryDataType;
    private getValidatedType;
    private getDefaultValue;
}
