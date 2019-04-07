

import { Component, Inject } from '@angular/core';
import { NzMessageService, ModalOptionsForService } from 'ng-zorro-antd';
import { SettingsService, ModalHelper, _HttpClient } from '@delon/theme';
import { CoreService } from 'generated';
import { Router } from '@angular/router';
import { BaseDetailComponent } from '@shared/base/base.detail.component';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  changePasswordSchema = {
    type: 'object',
    required: ['oldPassword', 'newPassword', 'confirm'],
    properties: {
      oldPassword: {
        type: 'string',
        title: '旧密码',
        ui: {
          type: 'password'
        }
      },
      newPassword: {
        type: 'string',
        title: '新密码',
        ui: {
          type: 'password'
        }
      },
      confirm: {
        type: 'string',
        title: '确认密码',
        ui: {
          type: 'password'
        }
      }
    }
  };


  constructor(
    public settings: SettingsService,
    public coreService: CoreService,
    public msgSrv: NzMessageService,
    public router: Router,
    public modalHelper: ModalHelper,
    public client: _HttpClient,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService

  ) { }

  logout() {

    this.coreService.userLogout().subscribe(
      (result) => {
        if (result) {
          this.msgSrv.success('成功退出');
          this.router.navigateByUrl(this.tokenService.login_url);
        }
      }
    );
  }

  get User() {
    return this.settings.user as any;
  }

  profile() {
    this.router.navigate(['/system/settings']);
  }

  setSettings() {
    this.router.navigate(['/system/settings']);
  }

  changePassword() {

    const params: ModalOptionsForService = {
      nzTitle: '修改密码',
      nzMaskClosable: false
    };

    this.modalHelper
      .static(BaseDetailComponent, {
        schema: this.changePasswordSchema,
        formData: {},
        onSave: this.save,
        context: this
      }, 420,
        params
      ).subscribe(() => {

      });
  }

  async save(entry: { id: any; }) {
    const url = `api/account/password`;
    if (entry.id) {
      return this.client.put(url, entry).toPromise();
    } else {
      return this.client.post(url, entry).toPromise();
    }
  }


}
