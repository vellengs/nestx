# Nestjs RBAC 权限控制管理实践 （一）

目前由于在做 Nodejs 构架的迁移, 把原有的 typerx 的后端项目迁移到 NestJS 框架上来, 做到权限管理部分, 特和大家分享下。
项目地址:

[typerx](https://github.com/vellengs/typerx) 

[nestx](https://github.com/vellengs/nestx)

## NestJs 官方角色控制介绍
因为这篇文章主要是对权限管理部分对介绍, 所以暂定已经有了用户身份知识的了解, 若想了解用户登录相关内容, 请参阅其他相关文档。

1. [Guards](https://docs.nestjs.com/guards)
Guards 是一个注解式的守卫, 他描述了所修饰的控制器的访问限制是什么。他应该实现 CanActivate 这个接口。
Guards 有一个单一的职责就是决定请求是否能被路由处理。
*** 值得注意的是 Guards 处于每个 middleware 之后, 但在 interceptor 和 pipe 之前。**

2. 在了解权限之前我们需要了解两个概念一个是 Authentication , 一个是 Authorization, 你没看花眼, 是的他们很像, 但是实际上是不一样的。

  [Authentication 与 Authorization](https://stackoverflow.com/questions/6556522/authentication-versus-authorization)

  Authentication 主要是身份检查, 意思就像问你有没身份证（有没登录）-> 401 

  Authorization 主要是角色识别, 意思就像问你身份证的户口是不是本地的(角色是什么，有权限吗) -> 403。

(官方文档 Authorization guard# 和 Role-based authentication# 是不是有点反掉了呢?)
auth.guard.ts 

```
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
```
roles.guard.ts
```
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}
```

有了 AuthGuard 和 RolesGuard 之后，我们的控制器可以这么写, 当然你可以绑定多个用逗号隔开。

采用依赖注入的 RolesGuard 

```
@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {}

```
非采用依赖注入的， 还可以使用new的方式创建实例给他。
```
@Controller('cats')
@UseGuards(new RolesGuard())
export class CatsController {}
```

采用全局方式, 可以省去每个地方去注解, 但不会对 gateways 和 microservices 起作用（待验证下）

```
const app = await NestFactory.create(ApplicationModule);
app.useGlobalGuards(new RolesGuard());

```

3. 经过上面的来回我们已经有了 RolesGuard 了，但我们还需要把角色关联到控制器。

直接看  cats.controller.ts 的写法

```
@Post()
@SetMetadata('roles', ['admin'])
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```
这样角色就关联到控制器了，我们这样就可以限定只有管理员才能访问这个接口, 但是代码是不是有点丑, 不太简洁对不对？
那我们换个方式：
```
@Post()
@Roles('admin')
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

这样是不是好多了？
这个主要我们加个下面的装饰器就可以了

roles.decorator.ts

```
import { SetMetadata } from '@nestjs/common';
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
```

roles.guard.ts 实现的细节

```

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler()); // 从控制器注解中得到的角色组信息。
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () => user.roles.some((role) => roles.includes(role)); // 是否匹配到角色
    return user && user.roles && hasRole();
  }
}
```
这里主要是从上下文中获得 User 并从 User中取出角色和控制器中角色的注解看下是否有无交集匹配，如果有就放行。

总的来说官方提供的文档不是很多, 且这样下来，整个方案也只是简单的角色守护, 还无法完成复杂的权限系统，但对一般性非灵活配置的系统也能满足了。

## nestx 权限系统的需求

1. 角色可以自行定义。
   图示:
 
 ![](https://user-gold-cdn.xitu.io/2019/4/17/16a295ee5e86ce18?w=2428&h=1084&f=jpeg&s=147720)
 
2. 菜单下分多种类型的权限节点，如：读写控制等。
   图示:
![](https://user-gold-cdn.xitu.io/2019/4/17/16a2963780f19de9?w=1816&h=1480&f=jpeg&s=152411)

3. 角色可以配置管理菜单下的权限配置节点。
   图示同上。

## 参考借鉴资源
- https://github.com/nestjs-community/nest-access-control
- https://github.com/casbin/node-casbin

### nest-access-control

```
import { Get, Controller, UseGuards } from '@nestjs/common';
import { UserRoles, UseRoles, ACGuard } from 'nest-access-control';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';
import { AppRoles } from 'app.roles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: 'video',
    action: 'read',
    possession: 'any',
  })
  @Get()
  root(@UserRoles() userRoles: any) {
    return this.appService.root(userRoles);
  }
}
```

Guard 注解方式比较有意思，分成资源、行为、权限, 看样子这个注解方式比较合乎我们的需要。

有个 RolesBuilder 的类可以创建定义：

```
// app.roles.ts

export enum AppRoles {
  USER_CREATE_ANY_VIDEO = 'USER_CREATE_ANY_VIDEO',
  ADMIN_UPDATE_OWN_VIDEO = 'ADMIN_UPDATE_OWN_VIDEO',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(AppRoles.USER_CREATE_ANY_VIDEO) // define new or modify existing role. also takes an array.
  .createOwn('video') // equivalent to .createOwn('video', ['*'])
  .deleteOwn('video')
  .readAny('video')
  .grant(AppRoles.ADMIN_UPDATE_OWN_VIDEO) // switch to another role without breaking the chain
  .extend(AppRoles.USER_CREATE_ANY_VIDEO) // inherit role capabilities. also takes an array
  .updateAny('video', ['title']) // explicitly defined attributes
  .deleteAny('video');
```
目前看到的方式，主要是文件的方式存储的，我们需要放置到数据库，这个模块可以参考, 待后续分析。

### node-casbin

casbin 看起来是比较流行的一个权限模块了,各种语言都有, 提供的功能也比较全。

1. 支持自定义请求的格式，默认的请求格式为{subject, object, action}；
2. 具有访问控制模型 model 和策略 policy 两个核心概念；
3. 支持 RBAC 中的多层角色继承，不止主体可以有角色，资源也可以具有角色；
4. 支持超级用户，如 root 或 Administrator，超级用户可以不受授权策略的约束访问任意资源；
5. 支持多种内置的操作符，如 keyMatch，方便对路径式的资源进行管理，如 /foo/bar 可以映射到 /foo*；

对于 node-casbin 目前的集成到nestjs 的示例有: nest-casbin 和 nt-casbin, 但这两个模块都比较简陋，只提供了简单都service 的包装调用 
```
enforcer.enforce(sub, obj, act);
```
且没有封装注解标签。
以上是一些准备和了解分析, 具体实现待续。