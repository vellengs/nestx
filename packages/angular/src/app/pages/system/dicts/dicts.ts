import { Component, OnInit, Injector, Input, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { BaseStandComponent } from '@shared/base/base.stand.component';

@Component({
    selector: 'app-dicts-page',
    templateUrl: './dicts.html',
    styles: []
})
export class DictsPageComponent extends BaseStandComponent implements OnInit {
    @ViewChild('slaves') slaves: BaseStandComponent;

    @Input() domain = 'dict';
    selectedItem: any = {};
    categories: any = [];
    dictQueryParams: any = {};

    constructor(injector: Injector) {
        super(injector);
    }

    async ngOnInit() {
        this.queryUrl = `api/${this.domain}/query`;
        this.onConfigChanged.subscribe(() => {});

        this.operations = {
            title: '操作',
            width: '180px',
            buttons: [
                {
                    text: '删除',
                    type: 'del',
                    click: (record: any) => {
                        this.slaves.remove(record, false);
                    }
                },
                {
                    text: '编辑',
                    type: 'none',
                    click: (record: any) => {
                        this.slaves.edit(record);
                    }
                }
            ]
        };

        this.load();
    }

    async load() {
        // TODO;
        const res = await this.coreService
            .dictsQuery('', '', 0, 2000)
            .toPromise();
        if (res) {
            this.categories = res.list;
        }
        super.load();
    }

    select(item) {
        this.selectedItem = item;
        this.queryParams = {
            category: item.name
        };
        if (this.slaves) {
            this.slaves.queryParams = this.queryParams;
            this.slaves.reload();
        }
    }

    addDict() {
        this.add({
            category: this.selectedItem.name
        });
    }

    addDictCategory() {
        this.add({
            category: 'category'
        });
    }
}
