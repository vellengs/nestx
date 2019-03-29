export interface Metadata {
    controllers: Controller[];
    referenceTypes: {
        [typeName: string]: ReferenceType;
    };
}
export interface Controller {
    location: string;
    methods: Method[];
    name: string;
    path: string;
    consumes: string[];
    produces: string[];
    tags: string[];
    security?: Security[];
}
export interface Method {
    deprecated?: boolean;
    description: string;
    method: string;
    name: string;
    parameters: Parameter[];
    path: string;
    type: Type;
    tags: string[];
    responses: ResponseType[];
    security?: Security[];
    summary?: string;
    consumes: string[];
    produces: string[];
}
export interface Parameter {
    parameterName: string;
    description: string;
    in: string;
    name: string;
    required: boolean;
    type: Type;
    collectionFormat?: boolean;
    allowEmptyValue?: boolean;
    default?: any;
    maxItems?: number;
    minItems?: number;
}
export interface Security {
    name: string;
    scopes?: string[];
}
export interface Type {
    typeName: string;
    typeArgument?: Type;
}
export interface EnumerateType extends Type {
    enumMembers: string[];
}
export interface ReferenceType extends Type {
    description: string;
    properties: Property[];
    additionalProperties?: Property[];
}
export interface ObjectType extends Type {
    properties: Property[];
}
export interface ArrayType extends Type {
    elementType: Type;
}
export interface ResponseType {
    description: string;
    status: string;
    schema?: Type;
    examples?: any;
}
export interface Property {
    description: string;
    name: string;
    type: Type;
    required: boolean;
}
export interface ResponseData {
    status: string;
    type: Type;
}
