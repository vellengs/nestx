import { NzModalRef } from 'ng-zorro-antd';
import {
    Component,
    Injector,
    Input,
    EventEmitter,
    OnInit,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import { SFComponent } from '@delon/form';
import { BaseComponent } from '@shared/base/base.component';

@Component({
    selector: 'app-base-detail',
    templateUrl: './base.detail.html'
})
export class BaseDetailComponent extends BaseComponent
    implements OnInit, AfterViewInit {
    @Input() schema: any;
    @Input() model: any = {};
    @Input() formData: any = {};
    @Input() domain: string;
    @Input() keyword: string;
    @Input() field: string[];
    @Input() onFormChanged: EventEmitter<any>;
    @Input() onSave: (entry: any) => Promise<any>;
    @Input() context: any;

    modalRef: NzModalRef;
    value: any = {};

    @ViewChild('sf') formRef: SFComponent;

    constructor(public injector: Injector) {
        super(injector);

        this.modalRef = this.injector.get(NzModalRef);
    }

    ngAfterViewInit() {}

    ngOnInit(): void {}

    load(): void {}
    reload(): void {}

    reset() {
        this.formRef.reset();
    }

    formChanged($event) {
        this.value = $event;
    }

    submit() {}

    onFormError($event) {
        // console.log('error:', $event);
    }

    async save(value) {
        const result = await this.onSave.call(this.context, value);
        this.modalRef.destroy(result);
    }
}
