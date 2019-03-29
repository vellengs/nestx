import * as ts from 'typescript';
import { Controller } from '.';
export declare class ControllerGenerator {
    private readonly node;
    private readonly pathValue;
    private readonly isController;
    private genMethods;
    constructor(node: ts.ClassDeclaration);
    isValid(): boolean;
    generate(): Controller;
    private buildMethods;
    private buildMethodsForClass;
    private getDecoratorValues;
    private getMethodSecurity;
}
