import { Component, OnInit, Injector, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { BaseStandComponent } from '@shared/base/base.stand.component';

@Component({
    selector: 'app-pages-page',
    templateUrl: './pages.html',
    styles: []
})
export class PagesPageComponent extends BaseStandComponent implements OnInit {

    @Input() domain = 'page';
    configReady;
    queryUrl;

    constructor(injector: Injector) {
        super(injector);
    }

    async ngOnInit() {
        this.queryUrl = `api/${this.domain}/query`;

        this.onConfigChanged.subscribe(() => {
            this.configReady = true;
        });

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
                        this.edit(record);
                    }
                }
            ]
        };
    }

}
