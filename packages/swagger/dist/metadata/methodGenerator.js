"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const parameterGenerator_1 = require("./parameterGenerator");
const jsDocUtils_1 = require("../utils/jsDocUtils");
const decoratorUtils_1 = require("../utils/decoratorUtils");
const pathUtils_1 = require("../utils/pathUtils");
const pathUtil = require("path");
const typesResolver_1 = require("./typesResolver");
class MethodGenerator {
    constructor(node, controllerPath, genericTypeMap) {
        this.node = node;
        this.controllerPath = controllerPath;
        this.genericTypeMap = genericTypeMap;
        this.processMethodDecorators();
    }
    isValid() {
        return !!this.method;
    }
    getMethodName() {
        const identifier = this.node.name;
        return identifier.text;
    }
    generate() {
        if (!this.isValid()) {
            throw new Error("This isn't a valid controller method.");
        }
        const identifier = this.node.name;
        const type = new typesResolver_1.TypesResolver(this.node.type, this.genericTypeMap).resolveType();
        const responses = this.mergeResponses(this.getMethodResponses(), this.getMethodSuccessResponse(type));
        return {
            consumes: this.getDecoratorValues('Accept'),
            deprecated: jsDocUtils_1.isExistJSDocTag(this.node, 'deprecated'),
            description: jsDocUtils_1.getJSDocDescription(this.node),
            method: this.method,
            name: identifier.text,
            parameters: this.buildParameters(),
            path: this.path,
            produces: this.getDecoratorValues('Produces'),
            responses,
            security: this.getMethodSecurity(),
            summary: jsDocUtils_1.getJSDocTag(this.node, 'summary'),
            tags: this.getDecoratorValues('Tags'),
            type
        };
    }
    buildParameters() {
        const parameters = this.node.parameters
            .map(p => {
            try {
                const path = pathUtil.posix.join('/', this.controllerPath ? this.controllerPath : '', this.path);
                return new parameterGenerator_1.ParameterGenerator(p, this.method, path, this.genericTypeMap).generate();
            }
            catch (e) {
                const methodId = this.node.name;
                const controllerId = this.node.parent
                    .name;
                const parameterId = p.name;
                throw new Error(`Error generate parameter method: '${controllerId.text}.${methodId.text}' argument: ${parameterId.text} ${e}`);
            }
        })
            .filter(p => p.in !== 'context' && p.in !== 'cookie');
        const bodyParameters = parameters.filter(p => p.in === 'body');
        const formParameters = parameters.filter(p => p.in === 'formData');
        if (bodyParameters.length > 1) {
            throw new Error(`Only one body parameter allowed in '${this.getCurrentLocation()}' method.`);
        }
        if (bodyParameters.length > 0 && formParameters.length > 0) {
            throw new Error(`Choose either during @FormParam and @FileParam or body parameter  in '${this.getCurrentLocation()}' method.`);
        }
        return parameters;
    }
    getCurrentLocation() {
        const methodId = this.node.name;
        const controllerId = this.node.parent
            .name;
        return `${controllerId.text}.${methodId.text}`;
    }
    processMethodDecorators() {
        const httpMethodDecorators = decoratorUtils_1.getDecorators(this.node, decorator => this.supportsPathMethod(decorator.text));
        if (!httpMethodDecorators || !httpMethodDecorators.length) {
            return;
        }
        if (httpMethodDecorators.length > 1) {
            throw new Error(`Only one HTTP Method decorator in '${this.getCurrentLocation}' method is acceptable, Found: ${httpMethodDecorators
                .map(d => d.text)
                .join(', ')}`);
        }
        const methodDecorator = httpMethodDecorators[0];
        this.method = methodDecorator.text.toLowerCase();
        const pathDecorators = decoratorUtils_1.getDecorators(this.node, decorator => {
            return [
                'PATH',
                'GET',
                'POST',
                'PATCH',
                'DELETE',
                'PUT',
                'OPTIONS',
                'HEAD',
                'ALL'
            ].includes(decorator.text.toUpperCase());
        });
        if (pathDecorators && pathDecorators.length > 1) {
            throw new Error(`Only one Path decorator in '${this.getCurrentLocation}' method is acceptable, Found: ${httpMethodDecorators
                .map(d => d.text)
                .join(', ')}`);
        }
        if (pathDecorators) {
            const pathDecorator = pathDecorators[0];
            let normalPath = pathUtils_1.normalizePath(pathDecorator.arguments[0]);
            normalPath = normalPath ? normalPath : '';
            this.path = pathDecorator ? `/${normalPath}` : '';
        }
        else {
            this.path = '';
        }
    }
    getMethodResponses() {
        const decorators = decoratorUtils_1.getDecorators(this.node, decorator => decorator.text === 'Response');
        if (!decorators || !decorators.length) {
            return [];
        }
        return decorators.map(decorator => {
            let description = '';
            let status = '200';
            let examples = undefined;
            if (decorator.arguments.length > 0 && decorator.arguments[0]) {
                status = decorator.arguments[0];
            }
            if (decorator.arguments.length > 1 && decorator.arguments[1]) {
                description = decorator.arguments[1];
            }
            if (decorator.arguments.length > 2 && decorator.arguments[2]) {
                const argument = decorator.arguments[2];
                examples = this.getExamplesValue(argument);
            }
            return {
                description: description,
                examples: examples,
                schema: decorator.typeArguments && decorator.typeArguments.length > 0
                    ? new typesResolver_1.TypesResolver(decorator.typeArguments[0], this.genericTypeMap).resolveType()
                    : undefined,
                status: status
            };
        });
    }
    getMethodSuccessResponse(type) {
        const responseData = this.getMethodSuccessResponseData(type);
        return {
            description: type.typeName === 'void' ? 'No content' : 'Ok',
            examples: this.getMethodSuccessExamples(),
            schema: responseData.type,
            status: responseData.status
        };
    }
    getMethodSuccessResponseData(type) {
        switch (type.typeName) {
            case 'void':
                return { status: '204', type: type };
            case 'NewResource':
                return { status: '201', type: type.typeArgument || type };
            case 'RequestAccepted':
                return { status: '202', type: type.typeArgument || type };
            case 'MovedPermanently':
                return { status: '301', type: type.typeArgument || type };
            case 'MovedTemporarily':
                return { status: '302', type: type.typeArgument || type };
            case 'DownloadResource':
            case 'DownloadBinaryData':
                return { status: '200', type: { typeName: 'buffer' } };
            default:
                return { status: '200', type: type };
        }
    }
    getMethodSuccessExamples() {
        const exampleDecorators = decoratorUtils_1.getDecorators(this.node, decorator => decorator.text === 'Example');
        if (!exampleDecorators || !exampleDecorators.length) {
            return undefined;
        }
        if (exampleDecorators.length > 1) {
            throw new Error(`Only one Example decorator allowed in '${this.getCurrentLocation}' method.`);
        }
        const d = exampleDecorators[0];
        const argument = d.arguments[0];
        return this.getExamplesValue(argument);
    }
    mergeResponses(responses, defaultResponse) {
        if (!responses || !responses.length) {
            return [defaultResponse];
        }
        const index = responses.findIndex(resp => resp.status === defaultResponse.status);
        if (index >= 0) {
            if (defaultResponse.examples && !responses[index].examples) {
                responses[index].examples = defaultResponse.examples;
            }
        }
        else {
            responses.push(defaultResponse);
        }
        return responses;
    }
    supportsPathMethod(method) {
        return [
            'GET',
            'POST',
            'PATCH',
            'DELETE',
            'PUT',
            'OPTIONS',
            'HEAD',
            'ALL'
        ].some(m => m.toUpperCase() === method.toUpperCase());
    }
    getExamplesValue(argument) {
        let example = {};
        if (argument.properties) {
            argument.properties.forEach((p) => {
                example[p.name.text] = this.getInitializerValue(p.initializer);
            });
        }
        else {
            example = this.getInitializerValue(argument);
        }
        return example;
    }
    getDecoratorValues(decoratorName) {
        const tagsDecorators = decoratorUtils_1.getDecorators(this.node, decorator => decorator.text === decoratorName);
        if (!tagsDecorators || !tagsDecorators.length) {
            return [];
        }
        if (tagsDecorators.length > 1) {
            throw new Error(`Only one ${decoratorName} decorator allowed in '${this.getCurrentLocation}' method.`);
        }
        const d = tagsDecorators[0];
        return d.arguments;
    }
    getMethodSecurity() {
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
    getInitializerValue(initializer) {
        switch (initializer.kind) {
            case ts.SyntaxKind.ArrayLiteralExpression:
                return initializer.elements.map((e) => this.getInitializerValue(e));
            case ts.SyntaxKind.StringLiteral:
                return initializer.text;
            case ts.SyntaxKind.TrueKeyword:
                return true;
            case ts.SyntaxKind.FalseKeyword:
                return false;
            case ts.SyntaxKind.NumberKeyword:
            case ts.SyntaxKind.FirstLiteralToken:
                return parseInt(initializer.text, 10);
            case ts.SyntaxKind.ObjectLiteralExpression:
                const nestedObject = {};
                initializer.properties.forEach((p) => {
                    nestedObject[p.name.text] = this.getInitializerValue(p.initializer);
                });
                return nestedObject;
            default:
                return undefined;
        }
    }
}
exports.MethodGenerator = MethodGenerator;
