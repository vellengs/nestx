
# Nestx 
A full stack infrastructure base on nestjs

## 什么是 Nestx
nestx 是一套以 nestjs 为框架基础框架的全技术栈真实项目系统, 项目为创建一套基础完整开箱即用, 可方便扩展, 易于二次开发的基础框架平台。
系统由多个模块组成, 使用 lerna 进行模块包管理包含如下模块:
- nest-server 后台服务端
- nest-swagger Swagger 生成器
- nest-angular Angular 中后台管理端
- nest-react  React 中后台管理端
- nest-testing API 测试

## 为什么用 Nestjs 

Nestjs 提供了nodejs 的后端模块化管理, 完整的控制器注解装饰器, 强大的模块集成能力, 为 nodejs 开发大规模项目提供了一致的协作开发方式, 对前端 Angular 很接近友好。

## 为什么是 Swagger
Swagger 为 Restful 开发提供了一套接口的标准, 如果我们需要服务端和客户端解耦开发, 就必须依赖一定的标准手段来维护这个接口, 否则在技术升级, 外部衔接, 版本迭代上碰到一鼻子灰。
Swagger 为接口-> 前端, 前端-> 接口, 接口-> 后端, 后端->接口, 或者敏捷迭代给了多种灵活到次序实现方案。
Swagger 能很方便的生成前后端的代理类, 基础领域代码, 基础测试接口代码, 让编码便捷高效, 且减少出错。

## 为什么用 Lerna

nodejs 开发的模块多了，需要对版本和源代码进行统一的管理, Lerna 提供了一组命令行方便, 简化了多模块的管理流程。

## 为什么是 angular 和 react 

受限与生态与资源的限制, angular 和 react 都有高质量的组件市场, 并且技术各有优势, 所以在前端方面提供了一个可切换的兼容模式, 但基础依赖必须是 typescript 。

## 为什么 要测试

测试是代码质量保障的必要手段, 而持久化的测试代码能保证开发迭代的稳步进行, 让问题定位的更清晰明确, 让项目验收有依据。

## 如何使用

使用前请配置 server 目录下的 .env 文件

```
npm install lerna -g
```

```
lerna bootstrap
```

```
npm run start:serve
```

```
npm run start:angular
```