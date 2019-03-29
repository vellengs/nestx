"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolveUtils_1 = require("./../utils/resolveUtils");
const decoratorUtils_1 = require("../utils/decoratorUtils");
const ts = require("typescript");
const typesResolver_1 = require("./typesResolver");
const metadataGenerator_1 = require("./metadataGenerator");
const DescribingParameters = {
    cookie: 'cookie',
    body: 'body',
    query: 'query',
    path: 'path',
    header: 'header',
    formData: 'formData',
    context: 'context'
};
const DecoratorTypes = {
    REQ: 'Req',
    RES: 'Res',
    REQUEST: 'Request',
    RESPONSE: 'Response',
    NEXT: 'Next',
    BODY: 'Body',
    QUERY: 'Query',
    PARAM: 'Param',
    HEADERS: 'Headers',
    SESSION: 'Session',
    FILE: 'File',
    FILES: 'Files'
};
class ParameterGenerator {
    constructor(parameter, method, path, genericTypeMap) {
        this.parameter = parameter;
        this.method = method;
        this.path = path;
        this.genericTypeMap = genericTypeMap;
    }
    generate() {
        const decoratorName = decoratorUtils_1.getDecoratorName(this.parameter, identifier => this.supportParameterDecorator(identifier.text));
        switch (decoratorName) {
            case DecoratorTypes.PARAM:
                return this.getPathParameter(this.parameter, decoratorName);
            case DecoratorTypes.HEADERS:
                return this.getHeaderParameter(this.parameter, decoratorName);
            case DecoratorTypes.QUERY:
                return this.getQueryParameter(this.parameter, decoratorName);
            case DecoratorTypes.FILE:
                return this.getFileParameter(this.parameter, decoratorName);
            case DecoratorTypes.FILES:
                return this.getFilesParameter(this.parameter, decoratorName);
            case DecoratorTypes.SESSION:
                return this.getCookieParameter(this.parameter, decoratorName);
            case DecoratorTypes.NEXT:
            case DecoratorTypes.REQ:
            case DecoratorTypes.RES:
            case DecoratorTypes.REQUEST:
            case DecoratorTypes.RESPONSE:
                return this.getContextParameter(this.parameter);
            default:
                return this.getBodyParameter(this.parameter);
        }
    }
    getCurrentLocation() {
        const methodId = this.parameter.parent
            .name;
        const controllerId = this.parameter.parent
            .parent.name;
        return `${controllerId.text}.${methodId.text}`;
    }
    getContextParameter(parameter) {
        const parameterName = parameter.name.text;
        return {
            description: this.getParameterDescription(parameter),
            in: DescribingParameters.context,
            name: parameterName,
            parameterName,
            required: !parameter.questionToken,
            type: { typeName: '' }
        };
    }
    getFileParameter(parameter, decoratorName) {
        const { parameterName, name } = this.getNameAndParameterName(parameter, decoratorName);
        if (!this.supportsBodyParameters(this.method)) {
            throw new Error(`FileParam can't support '${this.getCurrentLocation()}' method.`);
        }
        return {
            description: this.getParameterDescription(parameter),
            in: DescribingParameters.formData,
            name,
            parameterName,
            required: !parameter.questionToken,
            type: { typeName: 'file' }
        };
    }
    getFilesParameter(parameter, decoratorName) {
        const { parameterName, name } = this.getNameAndParameterName(parameter, decoratorName);
        if (!this.supportsBodyParameters(this.method)) {
            throw new Error(`FilesParam can't support '${this.getCurrentLocation()}' method.`);
        }
        return {
            description: this.getParameterDescription(parameter),
            in: DescribingParameters.formData,
            name,
            parameterName,
            required: !parameter.questionToken,
            type: { typeName: 'file' }
        };
    }
    getCookieParameter(parameter, decoratorName) {
        const { parameterName, name } = this.getNameAndParameterName(parameter, decoratorName);
        return {
            description: this.getParameterDescription(parameter),
            in: DescribingParameters.cookie,
            name,
            parameterName,
            required: !parameter.questionToken && !parameter.initializer,
            type: { typeName: '' }
        };
    }
    getBodyParameter(parameter) {
        const parameterName = parameter.name.text;
        const type = this.getValidatedType(parameter);
        if (!this.supportsBodyParameters(this.method)) {
            throw new Error(`Body can't support ${this.method} method`);
        }
        return {
            description: this.getParameterDescription(parameter),
            in: DescribingParameters.body,
            name: parameterName,
            parameterName,
            required: !parameter.questionToken && !parameter.initializer,
            type
        };
    }
    getHeaderParameter(parameter, decoratorName) {
        const { parameterName, name } = this.getNameAndParameterName(parameter, decoratorName);
        const type = this.getValidatedType(parameter);
        if (!this.supportPathDataType(type)) {
            throw new InvalidParameterException(`Parameter '${parameterName}' can't be passed as a header parameter in '${this.getCurrentLocation()}'.`);
        }
        return {
            description: this.getParameterDescription(parameter),
            in: DescribingParameters.header,
            name,
            parameterName,
            required: !parameter.questionToken && !parameter.initializer,
            type
        };
    }
    getQueryParameter(parameter, decoratorName) {
        const { parameterName, name } = this.getNameAndParameterName(parameter, decoratorName);
        const parameterOptions = decoratorUtils_1.getDecoratorOptions(this.parameter, ident => ident.text === decoratorName) || {};
        let type = this.getValidatedType(parameter);
        if (!this.supportQueryDataType(type)) {
            const arrayType = typesResolver_1.TypesResolver.getCommonPrimitiveAndArrayUnionType(parameter.type);
            if (arrayType && this.supportQueryDataType(arrayType)) {
                type = arrayType;
            }
            else {
                throw new InvalidParameterException(`Parameter '${parameterName}' can't be passed as a query parameter in '${this.getCurrentLocation()}'.`);
            }
        }
        return {
            collectionFormat: parameterOptions.collectionFormat,
            default: this.getDefaultValue(parameter.initializer),
            description: this.getParameterDescription(parameter),
            in: DescribingParameters.query,
            name,
            parameterName,
            required: !parameter.questionToken && !parameter.initializer,
            type
        };
    }
    getPathParameter(parameter, decoratorName) {
        const { parameterName, name } = this.getNameAndParameterName(parameter, decoratorName);
        const type = this.getValidatedType(parameter);
        if (!this.supportPathDataType(type)) {
            throw new InvalidParameterException(`Parameter '${parameterName}:${type}' can't be passed as a path parameter in '${this.getCurrentLocation()}'.`);
        }
        if (!this.path.includes(`{${name}}`) && !this.path.includes(`:${name}`)) {
            throw new Error(`Parameter '${parameterName}' can't match in path: '${this.path}'`);
        }
        return {
            description: this.getParameterDescription(parameter),
            in: DescribingParameters.path,
            name,
            parameterName,
            required: true,
            type
        };
    }
    getParameterDescription(node) {
        const symbol = metadataGenerator_1.MetadataGenerator.current.typeChecker.getSymbolAtLocation(node.name);
        if (symbol) {
            const comments = symbol.getDocumentationComment(metadataGenerator_1.MetadataGenerator.current.typeChecker);
            if (comments.length) {
                return ts.displayPartsToString(comments);
            }
        }
        return '';
    }
    getNameAndParameterName(parameter, decoratorName) {
        const parameterName = parameter.name.text;
        const name = decoratorUtils_1.getDecoratorTextValue(this.parameter, ident => ident.text === decoratorName) || parameterName;
        return { parameterName, name };
    }
    supportsBodyParameters(method) {
        return ['delete', 'post', 'put', 'patch'].some(m => m === method);
    }
    supportParameterDecorator(decoratorName) {
        return Object.values(DecoratorTypes).some(d => d === decoratorName);
    }
    supportPathDataType(parameterType) {
        return [
            'string',
            'integer',
            'long',
            'float',
            'double',
            'date',
            'datetime',
            'buffer',
            'boolean',
            'enum'
        ].find(t => t === parameterType.typeName);
    }
    supportQueryDataType(parameterType) {
        return [
            'string',
            'integer',
            'long',
            'float',
            'double',
            'date',
            'datetime',
            'buffer',
            'boolean',
            'enum',
            'array'
        ].find(t => t === parameterType.typeName);
    }
    getValidatedType(parameter) {
        if (!parameter.type) {
            throw new Error(`Parameter ${parameter.name} doesn't have a valid type assigned in '${this.getCurrentLocation()}'.`);
        }
        return new typesResolver_1.TypesResolver(parameter.type, this.genericTypeMap).resolveType();
    }
    getDefaultValue(initializer) {
        if (!initializer) {
            return;
        }
        return resolveUtils_1.getLiteralValue(initializer);
    }
}
exports.ParameterGenerator = ParameterGenerator;
class InvalidParameterException extends Error {
}
