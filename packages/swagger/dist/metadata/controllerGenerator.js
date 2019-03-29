"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const methodGenerator_1 = require("./methodGenerator");
const decoratorUtils_1 = require("../utils/decoratorUtils");
const pathUtils_1 = require("../utils/pathUtils");
const _ = require("lodash");
const resolveUtils_1 = require("../utils/resolveUtils");
class ControllerGenerator {
    constructor(node) {
        this.node = node;
        this.genMethods = new Set();
        const decorator = decoratorUtils_1.getControllerDecorator(node);
        if (!decorator) {
            this.isController = false;
            return;
        }
        this.isController = true;
        const param = decorator.arguments[0];
        if (typeof param === 'string') {
            this.pathValue = pathUtils_1.normalizePath(param);
            return;
        }
        const option = typeof param === 'object' ? param : undefined;
        if (!option) {
            this.pathValue = '';
            return;
        }
        const existingProp = option.properties.find(p => p.name.text === 'path');
        if (!existingProp) {
            this.pathValue = '';
            return;
        }
        const value = existingProp.symbol.valueDeclaration.initializer.text;
        this.pathValue = pathUtils_1.normalizePath(value);
    }
    isValid() {
        return this.isController || !!this.pathValue || this.pathValue === '';
    }
    generate() {
        if (!this.node.parent) {
            throw new Error("Controller node doesn't have a valid parent source file.");
        }
        if (!this.node.name) {
            throw new Error("Controller node doesn't have a valid name.");
        }
        const sourceFile = this.node.parent.getSourceFile();
        return {
            consumes: this.getDecoratorValues('Accept'),
            location: sourceFile.fileName,
            methods: this.buildMethods(),
            name: this.node.name.text,
            path: this.pathValue || '',
            produces: this.getDecoratorValues('Produces'),
            security: this.getMethodSecurity(),
            tags: this.getDecoratorValues('Tags')
        };
    }
    buildMethods() {
        let result = [];
        let targetClass = {
            type: this.node,
            typeArguments: null
        };
        while (targetClass) {
            result = _.union(result, this.buildMethodsForClass(targetClass.type, targetClass.typeArguments));
            targetClass = resolveUtils_1.getSuperClass(targetClass.type, targetClass.typeArguments);
        }
        return result;
    }
    buildMethodsForClass(node, genericTypeMap) {
        return node.members
            .filter(m => m.kind === ts.SyntaxKind.MethodDeclaration)
            .map((m) => new methodGenerator_1.MethodGenerator(m, this.pathValue || '', genericTypeMap))
            .filter(generator => {
            if (generator.isValid() &&
                !this.genMethods.has(generator.getMethodName())) {
                this.genMethods.add(generator.getMethodName());
                return true;
            }
            return false;
        })
            .map(generator => generator.generate());
    }
    getDecoratorValues(decoratorName) {
        if (!this.node.parent) {
            throw new Error("Controller node doesn't have a valid parent source file.");
        }
        if (!this.node.name) {
            throw new Error("Controller node doesn't have a valid name.");
        }
        const decorators = decoratorUtils_1.getDecorators(this.node, decorator => decorator.text === decoratorName);
        if (!decorators || !decorators.length) {
            return [];
        }
        if (decorators.length > 1) {
            throw new Error(`Only one ${decoratorName} decorator allowed in '${this.node.name.text}' controller.`);
        }
        const d = decorators[0];
        return d.arguments;
    }
    getMethodSecurity() {
        if (!this.node.parent) {
            throw new Error("Controller node doesn't have a valid parent source file.");
        }
        if (!this.node.name) {
            throw new Error("Controller node doesn't have a valid name.");
        }
        const securityDecorators = decoratorUtils_1.getDecorators(this.node, decorator => decorator.text === 'Security');
        if (!securityDecorators || !securityDecorators.length) {
            return undefined;
        }
        return securityDecorators.map(d => ({
            name: d.arguments[0],
            scopes: d.arguments[1]
                ? d.arguments[1].elements.map((e) => e.text)
                : undefined
        }));
    }
}
exports.ControllerGenerator = ControllerGenerator;
