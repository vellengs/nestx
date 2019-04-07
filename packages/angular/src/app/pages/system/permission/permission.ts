import { Component, OnInit, Injector, Input, ViewChild } from '@angular/core';
import { BaseStandComponent } from '@shared/base/base.stand.component';
import { BaseSelectorComponent } from '@shared/base/base.selector';

@Component({
    selector: 'app-permission-page',
    templateUrl: './permission.html',
    styles: []
})
export class PermissionPageComponent extends BaseStandComponent implements OnInit {

    url;
    @Input() domain = 'menu';
    title = '接口访问配置';
    selectedItem: any = {};

    permissions = [];
    _queryParams: { [key: string]: any; } = {};
    slaveQueryParams: { [key: string]: any; } = {};
    slaveColumns;
    slaveFormSets;

    @ViewChild('slaves') slaves: BaseStandComponent;

    set queryParams(val) {
        this._queryParams = val;
    }

    get queryParams() {
        const params = Object.assign({}, {
            isMenu: false
        }, this._queryParams);
        return params;
    }

    constructor(injector: Injector) {
        super(injector);
    }

    async ngOnInit() {
        this.url = `api/${this.domain}/query`;
        this.onConfigChanged.subscribe(() => {
        });
        this.load();
        this.coreService.apiGetConfig().subscribe((res) => {
            if (res) {
                this.slaveColumns = res.columnSets['default'];
                this.slaveFormSets = res.formSets;
            }
        });
        const self = this;
        this.operations = {
            title: '操作',
            width: '180px',
            buttons: [
                {
                    text: '移出',
                    type: 'del',
                    click: (record: any) => {
                        self.coreService.apiRemoveApisToPermission(this.selectedItem.id, record.id).subscribe(
                            (res) => {
                                if (res) {
                                    self.msg.success('移除成功！');
                                    self.slaves.reload();
                                }
                            }
                        );
                    }
                }
            ]
        };
    }

    addApiPermission() {
        const self = this;
        this.modalHelper.static(BaseSelectorComponent, {
            queryUrl: 'api/api/query',
            columns: this.slaveColumns,
            formSets: this.slaveFormSets,
        }, 1170, {
                nzTitle: '添加接口权限',
            }).subscribe((res) => {
                if (res) {
                    const ids = res.map(a => a.id);
                    self.coreService.apiAddApisToPermission(self.selectedItem.id, ids)
                        .subscribe(() => {
                            self.msg.success('完成');
                            self.slaves.reload();
                        });
                }
            });
    }

    select(item) {
        this.selectedItem = item;
        this.slaveQueryParams = {
            permission: item.id
        };

        if (this.slaves) {
            this.slaves.queryParams = this.slaveQueryParams;
            this.slaves.reload();
        }
    }

}
