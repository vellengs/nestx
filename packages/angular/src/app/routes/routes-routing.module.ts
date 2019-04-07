import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';
import { CanAuthProvide } from '@services/can.auth.provide';
import { CustomLoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', canActivate: [CanAuthProvide], component: HomeComponent, data: { title: '仪表盘' } },
            { path: 'system', canActivate: [CanAuthProvide], loadChildren: './../pages/system/system.module#SystemModule' },
            { path: 'cms', canActivate: [CanAuthProvide], loadChildren: './../pages/cms/cms.module#CmsModule' },
            { path: 'appearances', canActivate: [CanAuthProvide], loadChildren: './../../appearances/appearance.module#AppearanceModule' },
        ]
    },
    {
        path: 'passport',
        component: LayoutPassportComponent,
        children: [
            { path: 'login', component: CustomLoginComponent },
            { path: 'register', component: UserRegisterComponent },
            { path: 'register-result', component: UserRegisterResultComponent }
        ]
    },
    { path: 'callback/:type', component: CallbackComponent },
    { path: '403', component: Exception403Component },
    { path: '404', component: Exception404Component },
    { path: '500', component: Exception500Component },
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
    exports: [RouterModule]
})
export class RouteRoutingModule { }
