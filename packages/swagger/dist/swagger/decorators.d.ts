export declare function Response<T>(name: string | number, description?: string, example?: T): any;
export declare function Example<T>(example: T): any;
export declare function Tags(...values: string[]): any;
export declare function Security(name: string, scopes?: string[]): any;
export declare function Produces(...values: string[]): any;
export declare function IsInt(target: any, propertyKey: string, parameterIndex?: number): void;
export declare function IsLong(target: any, propertyKey: string, parameterIndex?: number): void;
export declare function IsFloat(target: any, propertyKey: string, parameterIndex?: number): void;
export declare function IsDouble(target: any, propertyKey: string, parameterIndex?: number): void;
