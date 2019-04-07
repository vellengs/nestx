import { Component, Injector, Input, ViewChild, OnInit } from '@angular/core';
import { BaseComponent } from '@shared/base/base.component';
import { NzModalRef, NzTransferComponent } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { TransferItem } from 'types/types';

@Component({
    selector: 'app-transfer-selector',
    templateUrl: './transfer.selector.html',
})
export class TransferSelectorComponent extends BaseComponent implements OnInit {

    modalRef: NzModalRef;
    model: any = {};

    @Input() asyncArgs?: any;
    @Input() asyncData: (input?: any) => Observable<TransferItem[]>;
    @ViewChild('transfer') transfer: NzTransferComponent;
    list = [];

    constructor(
        public injector: Injector
    ) {
        super(injector);
        this.modalRef = this.injector.get(NzModalRef);
    }

    ngOnInit() {

        if (this.asyncData) {
            this.asyncData(this.asyncArgs).subscribe((res) => {
                if (res && Array.isArray(res)) {
                    this.list = res.map((item) => {
                        return {
                            key: item.id,
                            title: item.name,
                            description: item.desc
                        };
                    });
                }
            });
        }

    }

    save() {
        this.modalRef.destroy(this.transfer.rightDataSource);
    }


    cancel() {
        this.modalRef.destroy('onCancel');
    }

    filterOption(inputValue, option) {
        return option.description.indexOf(inputValue) > -1;
    }

    search(res: any) {
        console.log('nzSearchChange', res);
    }

    select(res: any) {
        console.log('nzSelectChange', res);
    }

    change(res: any) {
        console.log('nzChange', res);
    }


}
