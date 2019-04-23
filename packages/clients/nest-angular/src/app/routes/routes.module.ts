import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardComponent } from './dashboard/default/dashboard.component';
import { CustomLoginComponent } from '../pages/login/login.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { HomeComponent } from '../pages/home/home.component';

@NgModule({
    imports: [SharedModule, RouteRoutingModule],
    declarations: [
        DashboardAnalysisComponent,
        HomeComponent,
        DashboardComponent,
        UserLockComponent,
        // passport pages
        UserLoginComponent,
        CustomLoginComponent,
        UserRegisterComponent,
        UserRegisterResultComponent,
        // single pages
        CallbackComponent,
        Exception403Component,
        Exception404Component,
        Exception500Component
    ]
})
export class RoutesModule { }
