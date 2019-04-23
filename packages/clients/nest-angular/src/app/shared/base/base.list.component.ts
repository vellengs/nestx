import { Component, Injector } from '@angular/core';
import { BaseComponent } from '@shared/base/base.component';

@Component({
    selector: 'app-base-list',
    template: './base.list.html'
})
export class BaseListComponent extends BaseComponent {

    constructor(public injector: Injector) {
        super(injector);
    }

    query() {

    }

}
