import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from './../../core/interfaces';

export const RolesGuards = (resource: string) => {
  return new RolesGuard(resource, new Reflector());
};

export class RolesGuard implements CanActivate {
  constructor(
    private readonly resource: string,
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );

    const request: Request & {
      user: User;
    } = context.switchToHttp().getRequest();
    const { user, method } = request;
    console.log('roles:', user.roles, this.resource, permissions, method);

    return true;
  }
}
