import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { UMeditorModule } from 'ngx-umeditor';
import { MenusPageComponent } from './menus/menus';
import { AccountsPageComponent } from './accounts/accounts';
import { SettingsPageComponent } from './settings/settings';
import { DictsPageComponent } from './dicts/dicts';
import { LogsPageComponent } from './logs/logs';
import { PermissionPageComponent } from './permission/permission';
import { RolesPageComponent } from './roles/roles';

const routes: Routes = [
    { path: 'settings', component: SettingsPageComponent },
    { path: 'menus', component: MenusPageComponent, data: { domain: 'menu', title: '菜单管理' } },
    { path: 'accounts', component: AccountsPageComponent, data: { domain: 'account', title: '帐号管理' } },
    { path: 'dicts', component: DictsPageComponent, data: { domain: 'dict', title: '字典管理' } },
    { path: 'logs', component: LogsPageComponent, data: { domain: 'log', title: '系统日志' } },
    { path: 'permission', component: PermissionPageComponent, data: { domain: 'role', title: '权限管理' } },
    { path: 'roles', component: RolesPageComponent, data: { domain: 'role', title: '角色管理' } },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        UMeditorModule,
    ],
    declarations: [
        SettingsPageComponent,
        MenusPageComponent,
        AccountsPageComponent,
        LogsPageComponent,
        DictsPageComponent,
        PermissionPageComponent,
        RolesPageComponent,
    ],
    exports: [
        RouterModule
    ]
})

export class SystemModule { } 
