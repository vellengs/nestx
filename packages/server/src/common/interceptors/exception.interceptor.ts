import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomException } from '../exceptions/custom.exception';
import { Reflector } from '@nestjs/core';
import { ErrorMessage } from './../';
import { META, TEXT } from './../../constants';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const call$ = next.handle();
    const target = context.getHandler();
    const statusCode = this.reflector.get<HttpStatus>(
      META.HTTP_ERROR_CODE,
      target,
    );
    const message =
      this.reflector.get<ErrorMessage>(META.HTTP_ERROR_MESSAGE, target) ||
      TEXT.HTTP_DEFAULT_ERROR_TEXT;

    return call$.pipe(
      catchError(error =>
        throwError(new CustomException({ message, error }, statusCode)),
      ),
    );
  }
}
