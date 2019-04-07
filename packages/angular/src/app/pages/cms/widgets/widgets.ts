import { Component, OnInit, Injector, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { BaseStandComponent } from '@shared/base/base.stand.component';

@Component({
    selector: 'app-widgets-page',
    templateUrl: './widgets.html',
    styles: []
})
export class WidgetsPageComponent extends BaseStandComponent implements OnInit {

    @Input() domain = 'widget';
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
    }

}
