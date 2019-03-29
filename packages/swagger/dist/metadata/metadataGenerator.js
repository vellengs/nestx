"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const controllerGenerator_1 = require("./controllerGenerator");
class MetadataGenerator {
    constructor(entryFile, compilerOptions) {
        this.nodes = new Array();
        this.referenceTypes = {};
        this.circularDependencyResolvers = new Array();
        this.program = ts.createProgram([entryFile], compilerOptions);
        this.typeChecker = this.program.getTypeChecker();
        MetadataGenerator.current = this;
    }
    generate() {
        this.program.getSourceFiles().forEach(sf => {
            ts.forEachChild(sf, node => {
                this.nodes.push(node);
            });
        });
        const controllers = this.buildControllers();
        this.circularDependencyResolvers.forEach(c => c(this.referenceTypes));
        return {
            controllers: controllers,
            referenceTypes: this.referenceTypes
        };
    }
    TypeChecker() {
        return this.typeChecker;
    }
    addReferenceType(referenceType) {
        this.referenceTypes[referenceType.typeName] = referenceType;
    }
    getReferenceType(typeName) {
        return this.referenceTypes[typeName];
    }
    onFinish(callback) {
        this.circularDependencyResolvers.push(callback);
    }
    getClassDeclaration(className) {
        const found = this.nodes.filter(node => {
            const classDeclaration = node;
            return (node.kind === ts.SyntaxKind.ClassDeclaration &&
                classDeclaration.name &&
                classDeclaration.name.text === className);
        });
        if (found && found.length) {
            return found[0];
        }
        return undefined;
    }
    getInterfaceDeclaration(className) {
        const found = this.nodes.filter(node => {
            const interfaceDeclaration = node;
            return (node.kind === ts.SyntaxKind.InterfaceDeclaration &&
                interfaceDeclaration.name &&
                interfaceDeclaration.name.text === className);
        });
        if (found && found.length) {
            return found[0];
        }
        return undefined;
    }
    buildControllers() {
        const nodes = this.nodes.filter(node => node.kind === ts.SyntaxKind.ClassDeclaration);
        const validNodes = nodes
            .map((classDeclaration) => new controllerGenerator_1.ControllerGenerator(classDeclaration))
            .filter(generator => generator.isValid());
        return validNodes.map(generator => generator.generate());
    }
}
exports.MetadataGenerator = MetadataGenerator;
