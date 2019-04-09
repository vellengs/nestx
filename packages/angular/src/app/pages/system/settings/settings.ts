import { Component, OnInit, Injector, Input, ViewChild } from '@angular/core';
import { BaseComponent } from '@shared/base/base.component';
import { FormSets } from 'types/types';
import { SFComponent } from '@delon/form';
import { EditSettingReq } from 'generated';
@Component({
    selector: 'app-settings-page',
    templateUrl: './settings.html',
    styles: [
        `
        :host ::ng-deep .ant-upload img {
            width: 128px;
            height: 128px;
          }
        `
    ]
})
export class SettingsPageComponent extends BaseComponent implements OnInit {

    title = '设置管理';
    @Input() domain = 'setting';
    active = 1;

    @Input() queryParams: { [key: string]: any; };
    @Input() formSets: FormSets;
    @ViewChild('profileForm') formRef: SFComponent;

    profileValue = {};
    profileData = {};
    settingsData = {};

    constructor(injector: Injector) {
        super(injector);
        this.profileData = this.settings.user;
        this.coreService.appearancesFindOne('settings').subscribe((config) => {
            if (config && config.data) {
                this.formSets = config.data as any;
            }
        });
    }

    ngOnInit(): void {
        this.load();
    }

    reset() {
        this.formRef.reset();
    }

    formChanged($event) {
        this.profileValue = $event;


    }


    sysSettingFormChanged() {

    }

    profileFormChanged() {

    }

    handleChange() {

    }

    profileSave(event?) {
        const entry = Object.assign({}, event);
        this.coreService.usersUpdate(entry).subscribe((res) => {
            if (res) {
                this.settings.setUser(res);
                this.msg.success('个人资料修改成功');
            }
        });
    }

    saveSysSettings(event) {
        const entry = Object.assign({}, event);

        this.coreService.settingsUpdateSettingsByName('main', entry).subscribe((res) => {
            if (res) {
                this.settingsData = res;
                this.msg.success('系统设置更新成功');
            }
        });
    }

    load() {
        this.coreService.settingsGetSettingsByName('main').subscribe((res) => {
            if (res) {
                this.settingsData = res;
            }
        });
    }

}
