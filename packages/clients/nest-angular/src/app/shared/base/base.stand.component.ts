import { ModalOptionsForService } from 'ng-zorro-antd';
import {
    Component,
    Input,
    EventEmitter,
    Injector,
    ViewChild
} from '@angular/core';
import { BaseComponent } from '@shared/base/base.component';
import { CurdPage, FormSets } from 'types/types';
import { BaseDetailComponent } from '@shared/base/base.detail.component';
import { pickBy, pick } from 'lodash';
import { STColumn, STComponent } from '@delon/abc';
@Component({
    selector: 'app-base-stand',
    templateUrl: './base.stand.html'
})
export class BaseStandComponent extends BaseComponent implements CurdPage {
    total: number;
    entries = [];

    @ViewChild('simpleTable') simpleTable: STComponent;

    @Input() queryUrl: string;
    @Input() domain: string;
    @Input() configParams: any;
    @Input() columnSets: {
        default: STColumn[];
        [key: string]: STColumn[];
    };
    @Input() queryParams: { [key: string]: any };
    @Input() formSets: FormSets;
    @Input() operations: STColumn;

    public onConfigChanged: EventEmitter<any> = new EventEmitter();
    public onEditFormChanged: EventEmitter<any> = new EventEmitter();
    public onAddFormChanged: EventEmitter<any> = new EventEmitter();
    public onEntriesLoaded: EventEmitter<any> = new EventEmitter();

    constructor(public injector: Injector) {
        super(injector);
        setTimeout(() => {
            this.loadConfig();
        }, 0);
    }

    private async loadConfig() {
        if (!this.domain) {
            return;
        }

        this.queryUrl = `api/${this.domain}/query`;
        const config = await this.coreService
            .appearancesGetAppearanceByName(this.domain)
            .toPromise();
        if (config && config.data) {
            this.columnSets = config.data.columnSets;
            this.formSets = config.data.formSets;
            if (this.columnSets && Array.isArray(this.columnSets.default)) {
                this.columnSets.default.map(col => {
                    switch (col.action) {
                        case 'edit':
                            col.click = item => {
                                this.edit(item);
                            };
                            break;
                        case 'delete':
                            col.click = item => {
                                this.remove(item);
                            };
                            break;
                        default:
                            break;
                    }
                });
                this.columnSets.default.push(this.operations);
            }
            this.onConfigChanged.emit(config);
        }
    }

    add(formData?: any): void {
        const params: ModalOptionsForService = {
            nzTitle: this.formSets.add.title,
            nzMaskClosable: false
        };
        this.modalHelper
            .static(
                BaseDetailComponent,
                {
                    schema: this.formSets.add,
                    onFormChanged: this.onAddFormChanged,
                    onSave: this.save,
                    formData: formData,
                    context: this
                },
                'lg',
                params
            )
            .subscribe(res => {
                if (res) {
                    this.reload();
                }
            });
    }

    async edit(entry: any) {
        const params: ModalOptionsForService = {
            nzTitle: this.formSets.edit.title,
            nzMaskClosable: false
        };

        const modelData = await this.client
            .get(`api/${this.domain}/` + entry.id)
            .toPromise();

        const schema = this.formSets.edit;
        const keys = Object.keys(schema.properties);
        keys.push('id');
        const formData = pick(modelData, keys);
        this.modalHelper
            .static(
                BaseDetailComponent,
                {
                    schema,
                    onFormChanged: this.onEditFormChanged,
                    formData,
                    onSave: this.save,
                    context: this
                },
                'lg',
                params
            )
            .subscribe(res => {
                if (res) {
                    this.reload();
                }
            });
    }

    beforeSave(entry: any) {
        return entry;
    }

    async save(entry: any) {
        const url = `api/${this.domain}`;
        const instance = this.beforeSave(entry);

        if (instance.id) {
            return this.client.put(url, instance).subscribe(() => {
                this.msg.success('更新成功');
                this.reload();
            });
        } else {
            return this.client.post(url, instance).subscribe(() => {
                this.msg.success('保存成功');
                this.reload(); // TODO
            });
        }
    }

    async changeStatus() {}

    remove(entry: any, confirm = true): void {
        const self = this;
        if (confirm) {
            this.modal.confirm({
                nzOkText: '确定',
                nzCancelText: '取消',
                nzTitle: '提示',
                nzContent: '确定删除该记录吗？',
                async nzOnOk() {
                    self.client
                        .delete(`api/${self.domain}/${entry.id}`)
                        .subscribe(item => {
                            if (item) {
                                self.msg.info('删除成功');
                                self.reload();
                            }
                        });
                },
                nzOnCancel() {}
            });
        } else {
            self.client
                .delete(`api/${self.domain}/${entry.id}`)
                .subscribe(item => {
                    if (item) {
                        self.msg.info('删除成功');
                        self.reload();
                    }
                });
        }
    }

    removeChecked(): void {}

    getTable(): STComponent {
        return this.simpleTable;
    }

    load(): void {
        if (this.simpleTable) {
            // this.simpleTable.load(pageIndex, this.queryParams);
        } else {
            const url = `api/${this.domain}/query`;
            const params = Object.assign({}, this.queryParams);
            this.client.get(url, params).subscribe((res: any) => {
                if (res) {
                    this.entries = res.list;
                    this.onEntriesLoaded.emit(this.entries);
                }
            });
        }
    }

    reload(): void {
        if (this.simpleTable) {
            this.simpleTable.reload(this.queryParams);
        } else {
            this.load();
        }
    }

    query(params: any) {
        this.queryParams = Object.assign({}, pickBy(params));
        this.reload();
    }
}
