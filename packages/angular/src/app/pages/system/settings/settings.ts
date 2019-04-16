import { Component, OnInit, Injector, Input, ViewChild } from '@angular/core';
import { BaseComponent } from '@shared/base/base.component';
import { FormSets } from 'types/types';
import { SFComponent } from '@delon/form';
import { EditSettingReq, EditUserReq } from 'generated';

type CustomFormSets = FormSets & { [k: string]: any };

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

    @Input() queryParams: { [key: string]: any };
    @Input() formSets: CustomFormSets;
    @ViewChild('profileForm') formRef: SFComponent;

    get Profile() {
        return this.formSets.profile;
    }

    get SysSetting() {
        return this.formSets.sysSetting;
    }

    profileValue = {};
    profileData = {};
    settingsData = {};

    constructor(injector: Injector) {
        super(injector);
        this.profileData = this.settings.user;
        this.coreService
            .appearancesGetAppearanceByName(this.domain)
            .subscribe(config => {
                if (config && config.data) {
                    this.formSets = config.data.formSets as any;
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

    sysSettingFormChanged() {}

    profileFormChanged() {}

    handleChange() {}

    profileSave(event?) {
        const entry: EditUserReq = Object.assign({}, event);

        const {
            name,
            mobile,
            password,
            email,
            company,
            siteUrl,
            address
        } = entry;

        this.coreService
            .usersUpdateProfile({
                name,
                mobile,
                password,
                email,
                company,
                siteUrl,
                address
            })
            .subscribe(res => {
                if (res) {
                    this.settings.setUser(res);
                    this.profileData = Object.assign(this.profileData, res);
                    this.msg.success('个人资料修改成功');
                }
            });
    }

    saveSysSettings(event?) {
        const options = Object.assign({}, ...event);
        this.coreService
            .settingsUpdateSettingsByName('main', {
                options
            })
            .subscribe(res => {
                if (res) {
                    this.settingsData = res.options;
                    this.msg.success('系统设置更新成功');
                }
            });
    }

    load() {
        this.coreService.settingsGetSettingsByName('main').subscribe(res => {
            if (res) {
                this.settingsData = res.options;
            }
        });
    }
}
