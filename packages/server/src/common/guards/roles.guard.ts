import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from './../../core/interfaces'; // TODO
import { AccessManagement } from './../../core/controllers/access.management';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly manager: AccessManagement,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request & {
      user: User;
    } = context.switchToHttp().getRequest();
    const { user, method } = request;

    if (!user) {
      return false;
    }
    if (user.isAdmin) {
      return true;
    }

    if (!user.roles) {
      // TODO
      return false;
    }

    // const permissions = this.reflector.get<string[]>(
    //   'permissions',
    //   context.getHandler(),
    // );

    const ctrl = this.reflector.get<string>('path', context.getClass());
    const result = await this.manager.canAccess(user.roles, ctrl, method);
    return result;
  }
}
