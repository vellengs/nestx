import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Inject
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { IUser, IAccessManagement } from "../interfaces";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    @Inject("IAccessManagement") private readonly manager: IAccessManagement,
    private readonly reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request & {
      user: IUser;
    } = context.switchToHttp().getRequest();
    const { user, method } = request;

    if (!user) {
      return false;
    }
    if (user.isAdmin) {
      return true;
    }

    if (!user.roles) {
      return false;
    }

    // const permissions = this.reflector.get<string[]>(
    //   'permissions',
    //   context.getHandler(),
    // );  // TODO

    const ctrl = this.reflector.get<string>("path", context.getClass());
    const result = await this.manager.canAccess(user.roles, ctrl, method);
    return result;
  }
}
