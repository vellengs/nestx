import * as ts from 'typescript';
import { Controller } from '.';
import { MethodGenerator } from './methodGenerator';
import { getDecorators, getControllerDecorator } from '../utils/decoratorUtils';
import { normalizePath } from '../utils/pathUtils';
import * as _ from 'lodash';
import { getSuperClass } from '../utils/resolveUtils';

export class ControllerGenerator {
  private readonly pathValue: string | undefined;
  private readonly isController: boolean;
  private genMethods: Set<string> = new Set<string>();

  constructor(private readonly node: ts.ClassDeclaration) {
    const decorator = getControllerDecorator(node);
    if (!decorator) {
      this.isController = false;
      return;
    }
    this.isController = true;
    const param = decorator.arguments[0];
    if (typeof param === 'string') {
      this.pathValue = normalizePath(param);
      return;
    }

    const option =
      typeof param === 'object' ? (param as { [key: string]: any }) : undefined;
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
    this.pathValue = normalizePath(value);
  }

  public isValid() {
    return this.isController || !!this.pathValue || this.pathValue === '';
  }

  public generate(): Controller {
    if (!this.node.parent) {
      throw new Error(
        "Controller node doesn't have a valid parent source file."
      );
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

  private buildMethods() {
    let result: any[] = [];
    let targetClass: any = {
      type: this.node,
      typeArguments: null
    };
    while (targetClass) {
      result = _.union(
        result,
        this.buildMethodsForClass(targetClass.type, targetClass.typeArguments)
      );
      targetClass = getSuperClass(targetClass.type, targetClass.typeArguments);
    }

    return result;
  }

  private buildMethodsForClass(
    node: ts.ClassDeclaration,
    genericTypeMap?: Map<String, ts.TypeReferenceNode>
  ) {
    return node.members
      .filter(m => m.kind === ts.SyntaxKind.MethodDeclaration)
      .map(
        (m: ts.MethodDeclaration) =>
          new MethodGenerator(m, this.pathValue || '', genericTypeMap)
      )
      .filter(generator => {
        if (
          generator.isValid() &&
          !this.genMethods.has(generator.getMethodName())
        ) {
          this.genMethods.add(generator.getMethodName());
          return true;
        }
        return false;
      })
      .map(generator => generator.generate());
  }

  private getDecoratorValues(decoratorName: string) {
    if (!this.node.parent) {
      throw new Error(
        "Controller node doesn't have a valid parent source file."
      );
    }
    if (!this.node.name) {
      throw new Error("Controller node doesn't have a valid name.");
    }

    const decorators = getDecorators(
      this.node,
      decorator => decorator.text === decoratorName
    );
    if (!decorators || !decorators.length) {
      return [];
    }
    if (decorators.length > 1) {
      throw new Error(
        `Only one ${decoratorName} decorator allowed in '${
          this.node.name.text
        }' controller.`
      );
    }

    const d = decorators[0];
    return d.arguments;
  }

  private getMethodSecurity() {
    if (!this.node.parent) {
      throw new Error(
        "Controller node doesn't have a valid parent source file."
      );
    }
    if (!this.node.name) {
      throw new Error("Controller node doesn't have a valid name.");
    }

    const securityDecorators = getDecorators(
      this.node,
      decorator => decorator.text === 'Security'
    );
    if (!securityDecorators || !securityDecorators.length) {
      return undefined;
    }

    return securityDecorators.map(d => ({
      name: d.arguments[0],
      scopes: d.arguments[1]
        ? (d.arguments[1] as any).elements.map((e: any) => e.text)
        : undefined
    }));
  }
}
