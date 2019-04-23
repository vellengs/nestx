import { Parameter, Type } from '.';
import { getLiteralValue } from './../utils/resolveUtils';

import {
  getDecoratorName,
  getDecoratorTextValue,
  getDecoratorOptions
} from '../utils/decoratorUtils';
import * as ts from 'typescript';
import { TypesResolver } from './typesResolver';
import { MetadataGenerator } from './metadataGenerator';

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

export class ParameterGenerator {
  constructor(
    private readonly parameter: ts.ParameterDeclaration,
    private readonly method: string,
    private readonly path: string,
    private readonly genericTypeMap?: Map<String, ts.TypeReferenceNode>
  ) {}

  public generate(): Parameter {
    const decoratorName = getDecoratorName(this.parameter, identifier =>
      this.supportParameterDecorator(identifier.text)
    );

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

  private getCurrentLocation() {
    const methodId = (this.parameter.parent as ts.MethodDeclaration)
      .name as ts.Identifier;
    const controllerId = ((this.parameter.parent as ts.MethodDeclaration)
      .parent as ts.ClassDeclaration).name as ts.Identifier;
    return `${controllerId.text}.${methodId.text}`;
  }

  private getContextParameter(parameter: ts.ParameterDeclaration): Parameter {
    const parameterName = (parameter.name as ts.Identifier).text;

    return {
      description: this.getParameterDescription(parameter),
      in: DescribingParameters.context,
      name: parameterName,
      parameterName,
      required: !parameter.questionToken,
      type: { typeName: '' }
    };
  }

  private getFileParameter(
    parameter: ts.ParameterDeclaration,
    decoratorName: string
  ): Parameter {
    const { parameterName, name } = this.getNameAndParameterName(
      parameter,
      decoratorName
    );

    if (!this.supportsBodyParameters(this.method)) {
      throw new Error(
        `FileParam can't support '${this.getCurrentLocation()}' method.`
      );
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

  private getFilesParameter(
    parameter: ts.ParameterDeclaration,
    decoratorName: string
  ): Parameter {
    const { parameterName, name } = this.getNameAndParameterName(
      parameter,
      decoratorName
    );

    if (!this.supportsBodyParameters(this.method)) {
      throw new Error(
        `FilesParam can't support '${this.getCurrentLocation()}' method.`
      );
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

  private getCookieParameter(
    parameter: ts.ParameterDeclaration,
    decoratorName: string
  ): Parameter {
    const { parameterName, name } = this.getNameAndParameterName(
      parameter,
      decoratorName
    );

    return {
      description: this.getParameterDescription(parameter),
      in: DescribingParameters.cookie,
      name,
      parameterName,
      required: !parameter.questionToken && !parameter.initializer,
      type: { typeName: '' }
    };
  }

  private getBodyParameter(parameter: ts.ParameterDeclaration): Parameter {
    const parameterName = (parameter.name as ts.Identifier).text;
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

  private getHeaderParameter(
    parameter: ts.ParameterDeclaration,
    decoratorName: string
  ): Parameter {
    const { parameterName, name } = this.getNameAndParameterName(
      parameter,
      decoratorName
    );
    const type = this.getValidatedType(parameter);

    if (!this.supportPathDataType(type)) {
      throw new InvalidParameterException(
        `Parameter '${parameterName}' can't be passed as a header parameter in '${this.getCurrentLocation()}'.`
      );
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

  private getQueryParameter(
    parameter: ts.ParameterDeclaration,
    decoratorName: string
  ): Parameter {
    const { parameterName, name } = this.getNameAndParameterName(
      parameter,
      decoratorName
    );
    const parameterOptions =
      getDecoratorOptions(
        this.parameter,
        ident => ident.text === decoratorName
      ) || {};
    let type = this.getValidatedType(parameter);

    if (!this.supportQueryDataType(type)) {
      const arrayType = TypesResolver.getCommonPrimitiveAndArrayUnionType(
        parameter.type
      );
      if (arrayType && this.supportQueryDataType(arrayType)) {
        type = arrayType;
      } else {
        throw new InvalidParameterException(
          `Parameter '${parameterName}' can't be passed as a query parameter in '${this.getCurrentLocation()}'.`
        );
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

  private getPathParameter(
    parameter: ts.ParameterDeclaration,
    decoratorName: string
  ): Parameter {
    const { parameterName, name } = this.getNameAndParameterName(
      parameter,
      decoratorName
    );
    const type = this.getValidatedType(parameter);

    if (!this.supportPathDataType(type)) {
      throw new InvalidParameterException(
        `Parameter '${parameterName}:${type}' can't be passed as a path parameter in '${this.getCurrentLocation()}'.`
      );
    }
    if (!this.path.includes(`{${name}}`) && !this.path.includes(`:${name}`)) {
      throw new Error(
        `Parameter '${parameterName}' can't match in path: '${this.path}'`
      );
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

  private getParameterDescription(node: ts.ParameterDeclaration) {
    const symbol = MetadataGenerator.current.typeChecker.getSymbolAtLocation(
      node.name
    );

    if (symbol) {
      const comments = symbol.getDocumentationComment(
        MetadataGenerator.current.typeChecker
      );
      if (comments.length) {
        return ts.displayPartsToString(comments);
      }
    }

    return '';
  }

  private getNameAndParameterName(
    parameter: ts.ParameterDeclaration,
    decoratorName: string
  ) {
    const parameterName = (parameter.name as ts.Identifier).text;
    const name =
      getDecoratorTextValue(
        this.parameter,
        ident => ident.text === decoratorName
      ) || parameterName;
    return { parameterName, name };
  }

  private supportsBodyParameters(method: string) {
    return ['delete', 'post', 'put', 'patch'].some(m => m === method);
  }

  private supportParameterDecorator(decoratorName: string) {
    return Object.values(DecoratorTypes).some(d => d === decoratorName);
  }

  private supportPathDataType(parameterType: Type) {
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

  private supportQueryDataType(parameterType: Type) {
    // Copied from supportPathDataType and added 'array'. Not sure if all options apply to queries, but kept to avoid breaking change.
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

  private getValidatedType(parameter: ts.ParameterDeclaration) {
    if (!parameter.type) {
      throw new Error(
        `Parameter ${
          parameter.name
        } doesn't have a valid type assigned in '${this.getCurrentLocation()}'.`
      );
    }
    return new TypesResolver(parameter.type, this.genericTypeMap).resolveType();
  }

  private getDefaultValue(initializer?: ts.Expression) {
    if (!initializer) {
      return;
    }
    return getLiteralValue(initializer);
  }
}

class InvalidParameterException extends Error {}
