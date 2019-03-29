import * as ts from 'typescript';
import { ControllerGenerator } from './controllerGenerator';
import { ReferenceType, Metadata } from '.';

export class MetadataGenerator {
  public static current: MetadataGenerator;
  public readonly nodes = new Array<ts.Node>();
  public readonly typeChecker: ts.TypeChecker;
  private readonly program: ts.Program;
  private referenceTypes: { [typeName: string]: ReferenceType } = {};
  private circularDependencyResolvers =
    new Array<(referenceTypes: { [typeName: string]: ReferenceType }) => void>();

  constructor(entryFile: string, compilerOptions: ts.CompilerOptions) {
    this.program = ts.createProgram([entryFile], compilerOptions);
    this.typeChecker = this.program.getTypeChecker();
    MetadataGenerator.current = this;
  }

  public generate(): Metadata {
    this.program.getSourceFiles().forEach(sf => {
      // tslint:disable-next-line:no-console
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

  public TypeChecker() {
    return this.typeChecker;
  }

  public addReferenceType(referenceType: ReferenceType) {
    this.referenceTypes[referenceType.typeName] = referenceType;
  }

  public getReferenceType(typeName: string) {
    return this.referenceTypes[typeName];
  }

  public onFinish(
    callback: (referenceTypes: { [typeName: string]: ReferenceType }) => void
  ) {
    this.circularDependencyResolvers.push(callback);
  }

  public getClassDeclaration(className: string) {
    const found = this.nodes.filter(node => {
      const classDeclaration = node as ts.ClassDeclaration;
      return (
        node.kind === ts.SyntaxKind.ClassDeclaration &&
        classDeclaration.name &&
        classDeclaration.name.text === className
      );
    });
    if (found && found.length) {
      return found[0];
    }
    return undefined;
  }

  public getInterfaceDeclaration(className: string) {
    const found = this.nodes.filter(node => {
      const interfaceDeclaration = node as ts.InterfaceDeclaration;
      return (
        node.kind === ts.SyntaxKind.InterfaceDeclaration &&
        interfaceDeclaration.name &&
        interfaceDeclaration.name.text === className
      );
    });
    if (found && found.length) {
      return found[0];
    }
    return undefined;
  }

  private buildControllers() {
    const nodes = this.nodes.filter(
      node => node.kind === ts.SyntaxKind.ClassDeclaration
    );
    const validNodes = nodes
      .map(
        (classDeclaration: ts.ClassDeclaration) =>
          new ControllerGenerator(classDeclaration)
      )
      .filter(generator => generator.isValid());

    return validNodes.map(generator => generator.generate());
  }
}
