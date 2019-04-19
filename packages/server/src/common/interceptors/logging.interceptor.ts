import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { Reflector } from '@nestjs/core';
import { LoggerService } from './../../core/controllers/logger.service';
import { User } from './../../core';
import { method } from 'bluebird';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(
    private readonly logger: LoggerService,
    private readonly reflector: Reflector,
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const now = Date.now();
    const request: Request & {
      user: User;
      connection: any;
      headers: any;
      socket: any;
      ip: any;
      ips: any;
    } = context.switchToHttp().getRequest();
    const controller = this.reflector.get<string>('path', context.getClass());
    const { method, user, headers, connection, socket } = request;
    const ip = (
      headers['x-forwarded-for'] ||
      headers['x-real-ip'] ||
      connection.remoteAddress ||
      socket.remoteAddress ||
      connection.socket.remoteAddress ||
      request.ip ||
      request.ips[0]
    ).replace('::ffff:', '');

    return next.handle().pipe(
      tap(async val => {
        const elapsed = Date.now() - now;
        const action = `${controller}/${method}`;

        if (user && method !== 'GET') {
          const userId = user.id;
          const username = user.name || user.username;
          await this.logger.log({
            ip,
            elapsed,
            controller,
            method,
            userId,
            username,
          });
        }

        if (controller) {
          console.log(`${action} takes: ${Date.now() - now}ms`, ip, val);
        }
      }),
    );
  }
}
