/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://github.com/ng-alain/ng-alain/issues/180
 */
import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
  SystemJsNgModuleLoader,
} from '@angular/core';
import { throwIfAlreadyLoaded } from '@core/module-import-guard';

import { AlainThemeModule } from '@delon/theme';

// #region mock
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
import { environment } from '@env/environment';
const MOCK_MODULES = !environment.production
  ? [DelonMockModule.forRoot({ data: MOCKDATA })]
  : [];
// #endregion

// #region reuse-tab
/**
 * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
 * 1、增加 `REUSETAB_PROVIDES`
 * 2、在 `src/app/layout/default/default.component.html` 修改：
 *  ```html
 *  <section class="alain-default__content">
 *    <reuse-tab></reuse-tab>
 *    <router-outlet></router-outlet>
 *  </section>
 *  ```
 */
import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
const REUSE_TAB_PROVIDES = [
  // {
  //   provide: RouteReuseStrategy,
  //   useClass: ReuseTabStrategy,
  //   deps: [ReuseTabService],
  // },
];
// #endregion

// #region global config functions

import { PageHeaderConfig } from '@delon/abc';
export function fnPageHeaderConfig(): PageHeaderConfig {
  return Object.assign(new PageHeaderConfig(), { homeI18n: 'home' });
}


import { DelonAuthConfig } from '@delon/auth';
import { ApiModule, Configuration } from 'generated';
import { UserService } from '@services/user.service';
import { ListContext } from '@services/list.context';
import { CanAdminProvide } from '@services/can.admin.provide';
import { CanAuthProvide } from '@services/can.auth.provide';
import { TreeService } from '@services/tree.service';

export function fnDelonAuthConfig(): DelonAuthConfig {
  return Object.assign(new DelonAuthConfig(), <DelonAuthConfig>{
    login_url: '/passport/login',
  });
}

export function apiConfig(): Configuration {
  return new Configuration({
    basePath: `${location.protocol}//${location.host}/api`
  });
}

import { STConfig } from '@delon/abc';
import { SchemaValidatorFactory } from '@delon/form';
import { CustomSchemaValidatorFactory } from './custom.form.factory';
export function fnSTConfig(): STConfig {
  return Object.assign(new STConfig(), <STConfig>{
    modal: { size: 'lg' },
  });
}

const GLOBAL_CONFIG_PROVIDES = [
  // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `st` 的页码默认为 `20` 行
  { provide: STConfig, useFactory: fnSTConfig },
  { provide: PageHeaderConfig, useFactory: fnPageHeaderConfig },
  { provide: DelonAuthConfig, useFactory: fnDelonAuthConfig },
  {
    provide: SchemaValidatorFactory,
    useClass: CustomSchemaValidatorFactory,
  },
];

// #endregion

@NgModule({
  imports: [
    AlainThemeModule.forRoot(),
    // mock
    ...MOCK_MODULES,
    ApiModule.forRoot(apiConfig),
  ],
  providers: [
    TreeService,
    UserService,
    ListContext,
    CanAdminProvide,
    CanAuthProvide,
    SystemJsNgModuleLoader,
  ]
})
export class DelonModule {
  constructor(@Optional() @SkipSelf() parentModule: DelonModule) {
    throwIfAlreadyLoaded(parentModule, 'DelonModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [...REUSE_TAB_PROVIDES, ...GLOBAL_CONFIG_PROVIDES],
    };
  }
}
