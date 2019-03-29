import { SwaggerConfig } from './config';
import { Metadata } from '../metadata';
import { Swagger } from './swagger';
export declare class SpecGenerator {
    private readonly metadata;
    private readonly config;
    constructor(metadata: Metadata, config: SwaggerConfig);
    generate(swaggerDirs: string | string[], yaml: boolean): Promise<void>;
    getSpec(): Swagger.Spec;
    private buildDefinitions;
    private buildPaths;
    private buildPathMethod;
    private handleMethodConsumes;
    private hasFormParams;
    private supportsBodyParameters;
    private buildParameter;
    private buildProperties;
    private buildAdditionalProperties;
    private buildOperation;
    private getMimeType;
    private handleMethodProduces;
    private getOperationId;
    private getSwaggerType;
    private getSwaggerTypeForPrimitiveType;
    private getSwaggerTypeForObjectType;
    private getSwaggerTypeForArrayType;
    private getSwaggerTypeForEnumType;
    private getSwaggerTypeForReferenceType;
}
