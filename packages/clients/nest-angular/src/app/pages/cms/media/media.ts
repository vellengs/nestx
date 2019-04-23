import { Component, OnInit, Injector, Input } from '@angular/core';
import { BaseStandComponent } from '@shared/base/base.stand.component';

@Component({
    selector: 'app-media-page',
    templateUrl: './media.html',
    styles: []
})
export class MediaPageComponent extends BaseStandComponent implements OnInit {

    @Input() domain = 'media';
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
