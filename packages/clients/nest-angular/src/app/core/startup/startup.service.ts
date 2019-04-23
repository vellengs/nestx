import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {
    MenuService,
    SettingsService,
    TitleService,
    ALAIN_I18N_TOKEN
} from '@delon/theme';
import { ACLService } from '@delon/acl';
import { TranslateService } from '@ngx-translate/core';
import { I18NService } from '@core/i18n/i18n.service';
import { CoreService } from 'generated';
import { zip } from 'rxjs';
import { NzIconService } from 'ng-zorro-antd';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';
import { ArrayService } from '@delon/util';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
    constructor(
        iconSrv: NzIconService,
        private menuService: MenuService,
        private translate: TranslateService,
        @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
        private settingService: SettingsService,
        private aclService: ACLService,
        private titleService: TitleService,
        private httpClient: HttpClient,
        private arrayService: ArrayService,
        private coreService: CoreService
    ) {
        iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
    }

    load(): Promise<any> {
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise(resolve => {
            zip(
                this.httpClient.get(
                    `assets/i18n/${this.i18n.defaultLang}.json`
                ),
                this.coreService.settingsGetSettingsByName('main'),
                this.coreService.menusGetUserMenus()
            )
                .pipe(
                    // 接收其他拦截器后产生的异常消息
                    catchError(([langData, settingsData, menuData]) => {
                        resolve(null);
                        return [langData, settingsData, menuData];
                    })
                )
                .subscribe(
                    ([langData, settings, menuData]) => {
                        // setting language data
                        this.translate.setTranslation(
                            this.i18n.defaultLang,
                            langData
                        );
                        this.translate.setDefaultLang(this.i18n.defaultLang);

                        this.settingService.setApp(settings);

                        // ACL：设置权限为全量
                        this.aclService.setFull(true);
                        // 初始化菜单

                        // 设置页面标题的后缀
                        this.titleService.suffix = settings.name;

                        if (menuData && Array.isArray(menuData)) {
                            const menus = menuData.map(item => {
                                return {
                                    id: item.id,
                                    text: item.name,
                                    group: item.group,
                                    icon: item.icon,
                                    link: item.link,
                                    parent: item.parent
                                };
                            });

                            const tree = this.arrayService.arrToTree(menus, {
                                idMapName: 'id',
                                parentIdMapName: 'parent'
                            });

                            this.menuService.add([
                                {
                                    text: '主导航',
                                    group: true,
                                    children: tree
                                }
                            ]);
                        }
                    },
                    () => {},
                    () => {
                        resolve(null);
                    }
                );
        });
    }
}
