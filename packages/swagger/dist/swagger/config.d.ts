export interface Config {
    swagger: SwaggerConfig;
}
export interface SwaggerConfig {
    yaml: boolean;
    outputDirectory: string | string[];
    entryFile: string;
    host?: string;
    version?: string;
    name?: string;
    description?: string;
    license?: string;
    basePath?: string;
    spec?: any;
    securityDefinitions?: {
        [name: string]: {
            type: string;
            name?: string;
            authorizationUrl?: string;
            tokenUrl?: string;
            flow?: string;
            in?: string;
            scopes?: {
                [scopeName: string]: string;
            };
        };
    };
    consumes?: [string];
    produces?: [string];
    collectionFormat?: string;
}
