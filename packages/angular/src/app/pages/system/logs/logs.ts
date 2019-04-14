import { Component, OnInit, Injector, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { BaseStandComponent } from '@shared/base/base.stand.component';

@Component({
    selector: 'app-logs-page',
    templateUrl: './logs.html',
    styles: []
})
export class LogsPageComponent extends BaseStandComponent implements OnInit {

    @Input() domain = 'log';
    constructor(injector: Injector) {
        super(injector);
    }

    async ngOnInit() {
        this.queryUrl = `api/${this.domain}/query`;
        this.onConfigChanged.subscribe(() => {

        });
        this.load();
    }

}
