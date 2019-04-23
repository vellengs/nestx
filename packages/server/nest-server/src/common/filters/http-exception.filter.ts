import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { TExceptionOption } from './../';
import {
  ErrorMessage,
  THttpErrorResponse,
  HttpStatusTypes,
} from './../interfaces';
import * as lodash from 'lodash';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const request = host.switchToHttp().getRequest();
    const response = host.switchToHttp().getResponse();
    const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
    const errorOption: TExceptionOption = exception.getResponse() as TExceptionOption;
    const isString = (value: TExceptionOption): value is ErrorMessage =>
      lodash.isString(value);
    const errMessage = isString(errorOption)
      ? errorOption
      : errorOption.message;
    const errorInfo = isString(errorOption) ? null : errorOption.error;
    const parentErrorInfo = errorInfo ? String(errorInfo) : null;
    const isChildrenError = errorInfo && errorInfo.status && errorInfo.message;
    const resultError =
      (isChildrenError && errorInfo.message) || parentErrorInfo;
    const resultStatus = isChildrenError ? errorInfo.status : status;
    const data: THttpErrorResponse = {
      status: HttpStatusTypes.Error,
      message: errMessage,
      error: resultError,
    };

    if (status === HttpStatus.NOT_FOUND) {
      data.error = `RESOURCE NOT FOUND`;
      data.message = `INTERFACE ${request.method} -> ${request.url} INVALID`;
    }
    return response.status(resultStatus).jsonp(data);
  }
}
