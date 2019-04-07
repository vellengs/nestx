import { Component, OnInit, Injector, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { BaseStandComponent } from '@shared/base/base.stand.component';

@Component({
    selector: 'app-custom-page',
    templateUrl: './custom.html',
    styles: []
})
export class CustomPageComponent extends BaseStandComponent implements OnInit {

    @Input() domain = 'custom';
    configReady;
    queryUrl;

    configParams: any = {};
    _queryParams: any = {};

    get queryParams() {
        this._queryParams.type = this.configParams.type;
        return this._queryParams;
    }

    set queryParams(val) {
        this._queryParams = val;
    }

    constructor(injector: Injector) {
        super(injector);
        this.route.params.subscribe(params => {
            this.configParams = {
                type: params.id
            };
        });
    }

    beforeSave(entry) {
        entry.type = this.configParams.type;
        return entry;
    }

    async ngOnInit() {
        this.queryUrl = `api/${this.domain}/query`;
        this.operations = {
            title: '操作',
            width: '180px',
            buttons: [
                {
                    text: '删除',
                    type: 'del',
                    click: (record: any) => {
                        this.remove(record, false);
                    }
                },
                {
                    text: '编辑',
                    type: 'none',
                    click: (record: any) => {
                        console.log('record:', record);
                        this.edit(record);
                    }
                }
            ]
        };

        this.onConfigChanged.subscribe(() => {
            this.configReady = true;
        });
    }

}
