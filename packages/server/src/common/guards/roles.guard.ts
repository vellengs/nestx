import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from './../../core/interfaces'; // TODO

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    // private readonly manager: AccessManagement,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const permissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );

    const ctrl = this.reflector.get<string[]>('path', context.getClass());
    const request: Request & {
      user: User;
    } = context.switchToHttp().getRequest();
    const { user, method } = request;

    console.log('roles:', user.roles, ctrl, permissions, method);

    // const result = this.manager.canAccess(user.roles, ctrl[0], method as any);

    return true;
  }
}
