# Nestjs RBAC 权限控制管理实践 （二）

上回分析了 node-casbin 模块, Casbin 主要是提供了多种的权限控制策略, 支持 ACL, RBAC, ABAC, RESTful 以及复杂的拒绝覆盖, 权限优先等级等。
不得不说 Casbin 功能强大，不过对于我提的需求，直接用起来，看似又比较复杂了。 
因为我这个项目主要是用RESTful API, 所以借鉴了 accesscontrol 和 casbin 的 RESTful 的控制模式。

## 控制器守卫 

1. @RolesGuard 与 @Roles 的关系

上回我们看官网的方式是，使用 @RolesGuard 和 @Roles 组合的方式, 使用 @RolesGuard 去守护, @Roles 则去标记哪个角色可以通过。

我们回顾下代码 @RolesGuard 搭档 @Roles

```
@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Post()
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
```
2. AuthGuard 是如何实现的，为什么能带参数。
   
由于注意到常用的 AuthGuard('jwt') 是又参数的, 但是 RolesGuard 是没有参数的, 也无法带上参数, 所以特地去翻了下 AuthGuard 的源代码.
[auth.guard.ts](https://github.com/nestjs/passport/blob/master/lib/auth.guard.ts)

```
export const AuthGuard: (type?: string) => Type<IAuthGuard> = memoize(
  createAuthGuard
);

function createAuthGuard(type?: string): Type<CanActivate> {
  class MixinAuthGuard<TUser = any> implements CanActivate {
    ...
  }
}

```
3.  RESTFul 的动作匹配
对比 AuthGuard 发现其是比较特殊的函数方式返回一个 CanActivate 的实现类, 这个实现比较复杂，同时也失去了依赖注入的能力。
并且由于项目需求是由界去配置权限和 API 的关联关系的，所以这里并不能直接用角色去关联API。
还有另外一个原因是 RESTFul 的 API 可以采用约定的规则来匹配权限，所以并不必要每个 API 去打标记, 匹配形式为 :

```
{
  GET: 'read', // 读取
  POST: 'create', // 创建
  PUT: 'update',  // 更新
  DELETE: 'delete', // 删除
}
```

4. @RolesGuard 如何得到控制器的注解信息

经过上面的处理, 我们在控制器上可以解放出来了，我们只要一个 @RolesGuard, 并不要 @Roles 来配合了。

但由于 @RolesGuard 无法传递控制器参数, 所以我们只能另寻办法了, 想到 @RolesGuard 能获取到 @Roles 里注解参数, 我们是不是能从 @Controller 里获得参数呢？
这样我们就能定位当前的请求资源了，于是有了下面的代码:
[最终代码](https://github.com/vellengs/nestx/blob/master/packages/server/src/common/guards/roles.guard.ts)
```
async canActivate(context: ExecutionContext): Promise<boolean> {
 
     const roles = this.reflector.get<string[]>(
       'roles',
        context.getHandler(),
     ); // 这里我们能从 context.getHandler() 里得到 roles;

    /** 那么我们也就能从  context.getClass() 里得到 @Controller 里的注解参数，
     当然，我们也能从 request.url 里分析得到，但是控制器的注解有时候可能写的复杂 如 abc/efg 我们就不知道怎么截断了。
    **/
    const ctrl = this.reflector.get<string>('path', context.getClass());  
    ...
  }

```

5. 关联 API 到菜单。
   我写了一个 API 的描述文件 

   ```
   const actions = {
  create: '创建',
  read: '读取',
  update: '更新',
  delete: '删除',
};

export interface GrantNode {
  name: string;
  actions: {
    [k: string]: string;
    create?: string;
    read?: string;
    update?: string;
    delete?: string;
  };
}

export const grants: {
  [key: string]: GrantNode;
} = {
  dict: {
    name: '字典',
    actions,
  },
  group: {
    name: '用户组',
    actions,
  },
  log: {
    name: '日志',
    actions,
  },
  menu: {
    name: '菜单',
    actions,
  },
  notice: {
    name: '通知',
    actions,
  },
  role: {
    name: '角色',
    actions,
  },
  setting: {
    name: '设置',
    actions,
  },
  user: {
    name: '用户',
    actions,
  },
};

   ```
通过一个脚本，插入到数据库 [脚本在这里](https://github.com/vellengs/nestx/blob/master/packages/server/src/scripts/access.init.ts),
插入到菜单, 之后就可以选配到菜单的叶子节点来关联权限了。
