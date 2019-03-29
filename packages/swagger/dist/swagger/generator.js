"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const mkdirp = require("mkdirp");
const YAML = require("yamljs");
const pathUtil = require("path");
const _ = require("lodash");
class SpecGenerator {
    constructor(metadata, config) {
        this.metadata = metadata;
        this.config = config;
    }
    generate(swaggerDirs, yaml) {
        return new Promise((resolve, reject) => {
            if (!Array.isArray(swaggerDirs)) {
                swaggerDirs = [swaggerDirs];
            }
            const spec = this.getSpec();
            swaggerDirs.forEach(swaggerDir => {
                mkdirp(swaggerDir, (dirErr) => {
                    if (dirErr) {
                        throw dirErr;
                    }
                    fs.writeFile(`${swaggerDir}/swagger.json`, JSON.stringify(spec, null, '\t'), (err) => {
                        if (err) {
                            reject(err);
                        }
                        if (yaml) {
                            fs.writeFile(`${swaggerDir}/swagger.yaml`, YAML.stringify(spec, 1000), (errYaml) => {
                                if (errYaml) {
                                    reject(errYaml);
                                }
                                resolve();
                            });
                        }
                        else {
                            resolve();
                        }
                    });
                });
            });
        });
    }
    getSpec() {
        let spec = {
            basePath: this.config.basePath,
            definitions: this.buildDefinitions(),
            info: {},
            paths: this.buildPaths(),
            swagger: '2.0'
        };
        spec.securityDefinitions = this.config.securityDefinitions
            ? this.config.securityDefinitions
            : {};
        if (this.config.consumes) {
            spec.consumes = this.config.consumes;
        }
        if (this.config.produces) {
            spec.produces = this.config.produces;
        }
        if (this.config.description) {
            spec.info.description = this.config.description;
        }
        if (this.config.license) {
            spec.info.license = { name: this.config.license };
        }
        if (this.config.name) {
            spec.info.title = this.config.name;
        }
        if (this.config.version) {
            spec.info.version = this.config.version;
        }
        if (this.config.host) {
            spec.host = this.config.host;
        }
        if (this.config.spec) {
            spec = require('merge').recursive(spec, this.config.spec);
        }
        return spec;
    }
    buildDefinitions() {
        const definitions = {};
        Object.keys(this.metadata.referenceTypes).map(typeName => {
            const referenceType = this.metadata.referenceTypes[typeName];
            if (!referenceType.typeName.includes('Generic~')) {
                definitions[referenceType.typeName] = {
                    description: referenceType.description,
                    properties: this.buildProperties(referenceType.properties),
                    type: 'object'
                };
                const requiredFields = referenceType.properties
                    .filter(p => p.required)
                    .map(p => p.name);
                if (requiredFields && requiredFields.length) {
                    definitions[referenceType.typeName].required = requiredFields;
                }
                if (referenceType.additionalProperties) {
                    definitions[referenceType.typeName].additionalProperties = this.buildAdditionalProperties(referenceType.additionalProperties);
                }
            }
        });
        return definitions;
    }
    buildPaths() {
        const paths = {};
        this.metadata.controllers.forEach(controller => {
            controller.methods.forEach(method => {
                const path = pathUtil.posix.join('/', controller.path ? controller.path : '', method.path);
                paths[path] = paths[path] || {};
                method.consumes = _.union(controller.consumes, method.consumes);
                method.produces = _.union(controller.produces, method.produces);
                method.tags = _.union(controller.tags, method.tags);
                method.security = method.security || controller.security;
                this.buildPathMethod(controller.name, method, paths[path]);
            });
        });
        return paths;
    }
    buildPathMethod(controllerName, method, pathObject) {
        const pathMethod = (pathObject[method.method] = this.buildOperation(controllerName, method));
        pathMethod.description = method.description;
        if (method.summary) {
            pathMethod.summary = method.summary;
        }
        if (method.deprecated) {
            pathMethod.deprecated = method.deprecated;
        }
        if (method.tags.length) {
            pathMethod.tags = method.tags;
        }
        if (method.security) {
            pathMethod.security = method.security.map(s => ({
                [s.name]: s.scopes || []
            }));
        }
        this.handleMethodConsumes(method, pathMethod);
        pathMethod.parameters = method.parameters
            .filter(p => p.in !== 'param')
            .map(p => this.buildParameter(p));
        method.parameters
            .filter(p => p.in === 'param')
            .forEach(p => {
            pathMethod.parameters.push(this.buildParameter({
                description: p.description,
                in: 'query',
                name: p.name,
                parameterName: p.parameterName,
                required: false,
                type: p.type
            }));
            pathMethod.parameters.push(this.buildParameter({
                description: p.description,
                in: 'formData',
                name: p.name,
                parameterName: p.parameterName,
                required: false,
                type: p.type
            }));
        });
        if (pathMethod.parameters.filter((p) => p.in === 'body').length > 1) {
            throw new Error('Only one body parameter allowed per controller method.');
        }
    }
    handleMethodConsumes(method, pathMethod) {
        if (method.consumes.length) {
            pathMethod.consumes = method.consumes;
        }
        if (!pathMethod.consumes || !pathMethod.consumes.length) {
            if (method.parameters.some(p => p.in === 'formData' && p.type.typeName === 'file')) {
                pathMethod.consumes = pathMethod.consumes || [];
                pathMethod.consumes.push('multipart/form-data');
            }
            else if (this.hasFormParams(method)) {
                pathMethod.consumes = pathMethod.consumes || [];
                pathMethod.consumes.push('application/x-www-form-urlencoded');
            }
            else if (this.supportsBodyParameters(method.method)) {
                pathMethod.consumes = pathMethod.consumes || [];
                pathMethod.consumes.push('application/json');
            }
        }
    }
    hasFormParams(method) {
        return method.parameters.find(p => p.in === 'formData');
    }
    supportsBodyParameters(method) {
        return ['post', 'put', 'patch'].some(m => m === method);
    }
    buildParameter(parameter) {
        const swaggerParameter = {
            description: parameter.description,
            in: parameter.in,
            name: parameter.name,
            required: parameter.required
        };
        const parameterType = this.getSwaggerType(parameter.type);
        if (parameterType.$ref) {
            swaggerParameter.schema = parameterType;
        }
        else if (parameter.in === 'body') {
            swaggerParameter.schema = { type: parameterType.type };
        }
        else {
            swaggerParameter.type = parameterType.type;
        }
        if (parameterType.items) {
            swaggerParameter.items = parameterType.items;
            if (parameter.collectionFormat || this.config.collectionFormat) {
                swaggerParameter.collectionFormat =
                    parameter.collectionFormat || this.config.collectionFormat;
            }
        }
        if (parameterType.format) {
            swaggerParameter.format = parameterType.format;
        }
        if (parameter.default !== undefined) {
            swaggerParameter.default = parameter.default;
        }
        if (parameterType.enum) {
            swaggerParameter.enum = parameterType.enum;
        }
        return swaggerParameter;
    }
    buildProperties(properties) {
        const swaggerProperties = {};
        properties.forEach(property => {
            const swaggerType = this.getSwaggerType(property.type);
            if (!swaggerType.$ref) {
                swaggerType.description = property.description;
            }
            swaggerProperties[property.name] = swaggerType;
        });
        return swaggerProperties;
    }
    buildAdditionalProperties(properties) {
        const swaggerAdditionalProperties = {};
        properties.forEach(property => {
            const swaggerType = this.getSwaggerType(property.type);
            if (swaggerType.$ref) {
                swaggerAdditionalProperties['$ref'] = swaggerType.$ref;
            }
        });
        return swaggerAdditionalProperties;
    }
    buildOperation(controllerName, method) {
        const operation = {
            operationId: this.getOperationId(controllerName, method.name),
            produces: [],
            responses: {}
        };
        const methodReturnTypes = new Set();
        method.responses.forEach((res) => {
            operation.responses[res.status] = {
                description: res.description
            };
            if (res.schema) {
                const swaggerType = this.getSwaggerType(res.schema);
                if (swaggerType.type !== 'void') {
                    operation.responses[res.status]['schema'] = swaggerType;
                }
                methodReturnTypes.add(this.getMimeType(swaggerType));
            }
            if (res.examples) {
                operation.responses[res.status]['examples'] = {
                    'application/json': res.examples
                };
            }
        });
        this.handleMethodProduces(method, operation, methodReturnTypes);
        return operation;
    }
    getMimeType(swaggerType) {
        if (swaggerType.$ref ||
            swaggerType.type === 'array' ||
            swaggerType.type === 'object') {
            return 'application/json';
        }
        else if (swaggerType.type === 'string' &&
            swaggerType.format === 'binary') {
            return 'application/octet-stream';
        }
        else {
            return 'text/html';
        }
    }
    handleMethodProduces(method, operation, methodReturnTypes) {
        if (method.produces.length) {
            operation.produces = method.produces;
        }
        else if (methodReturnTypes && methodReturnTypes.size > 0) {
            operation.produces = Array.from(methodReturnTypes);
        }
    }
    getOperationId(controllerName, methodName) {
        const controllerNameWithoutSuffix = controllerName.replace(new RegExp('Controller$'), '');
        return `${controllerNameWithoutSuffix}${methodName.charAt(0).toUpperCase() +
            methodName.substr(1)}`;
    }
    getSwaggerType(type) {
        const swaggerType = this.getSwaggerTypeForPrimitiveType(type);
        if (swaggerType) {
            return swaggerType;
        }
        const arrayType = type;
        if (arrayType.elementType) {
            return this.getSwaggerTypeForArrayType(arrayType);
        }
        const enumType = type;
        if (enumType.enumMembers) {
            return this.getSwaggerTypeForEnumType(enumType);
        }
        const refType = type;
        if (refType.properties && refType.description !== undefined) {
            return this.getSwaggerTypeForReferenceType(type);
        }
        const objectType = type;
        return this.getSwaggerTypeForObjectType(objectType);
    }
    getSwaggerTypeForPrimitiveType(type) {
        const typeMap = {
            binary: { type: 'string', format: 'binary' },
            boolean: { type: 'boolean' },
            buffer: { type: 'file' },
            byte: { type: 'string', format: 'byte' },
            date: { type: 'string', format: 'date' },
            datetime: { type: 'string', format: 'date-time' },
            double: { type: 'number', format: 'double' },
            file: { type: 'file' },
            float: { type: 'number', format: 'float' },
            integer: { type: 'integer', format: 'int32' },
            long: { type: 'integer', format: 'int64' },
            object: { type: 'object' },
            string: { type: 'string' },
            void: { type: 'void' }
        };
        return typeMap[type.typeName];
    }
    getSwaggerTypeForObjectType(objectType) {
        return {
            type: 'object',
            properties: this.buildProperties(objectType.properties)
        };
    }
    getSwaggerTypeForArrayType(arrayType) {
        return { type: 'array', items: this.getSwaggerType(arrayType.elementType) };
    }
    getSwaggerTypeForEnumType(enumType) {
        return {
            type: 'string',
            enum: enumType.enumMembers.map(member => member)
        };
    }
    getSwaggerTypeForReferenceType(referenceType) {
        return { $ref: `#/definitions/${referenceType.typeName}` };
    }
}
exports.SpecGenerator = SpecGenerator;
