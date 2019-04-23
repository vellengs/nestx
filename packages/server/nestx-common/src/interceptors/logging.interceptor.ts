import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Inject
} from "@nestjs/common";
import { tap } from "rxjs/operators";
import { Reflector } from "@nestjs/core";
import { ILoggerService, IUser } from "../interfaces";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(
    @Inject("ILoggerService") private readonly logger: ILoggerService,
    private readonly reflector: Reflector
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const now = Date.now();
    return next.handle().pipe(
      tap(async () => {
        await this.handle(now, context);
      })
    );
  }

  private async handle(now: number, context: ExecutionContext) {
    const elapsed = Date.now() - now;
    const request: Request & {
      user: IUser;
      connection: any;
      headers: any;
      socket: any;
      ip: any;
      ips: any;
    } = context.switchToHttp().getRequest();
    const controller = this.reflector.get<string>("path", context.getClass());
    const { method, user, headers, connection, socket } = request;
    const ip = (
      headers["x-forwarded-for"] ||
      headers["x-real-ip"] ||
      connection.remoteAddress ||
      socket.remoteAddress ||
      connection.socket.remoteAddress ||
      request.ip ||
      request.ips[0]
    ).replace("::ffff:", "");
    const action = `${controller}/${method}`;
    if (user && method !== "GET") {
      const userId = user.id;
      const username = user.name || user.username;
      await this.logger.log({
        ip,
        elapsed,
        controller,
        method,
        userId,
        username
      });
    }
    if (controller) {
      console.log(`${action} takes: ${Date.now() - now}ms`, ip);
    }
  }
}
