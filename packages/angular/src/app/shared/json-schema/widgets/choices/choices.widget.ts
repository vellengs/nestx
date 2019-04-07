import { Component, ChangeDetectorRef, Inject } from '@angular/core';
import { ControlWidget, SFSchemaEnum, SFComponent, SFSchemaEnumType } from '@delon/form';
import { getData } from '@shared/json-schema/util';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'sf-choices',
    template: `
   <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <nz-form-item>
        <nz-col class="ant-form-item-control-wrapper" [nzSpan]="control" [nzOffset]="offset">
        <div class="ant-form-item-control" [class.has-error]="showError">
            <ng-container *ngIf="data.length === 0">
                <label nz-checkbox
                [nzDisabled]="disabled"
                [ngModel]="value"
                (ngModelChange)="_setValue($event)">
                <span [innerHTML]="schema.title"></span>
                <span class="optional">
                    {{ ui.optional }}
                    <nz-tooltip *ngIf="ui.optionalHelp" [nzTitle]="ui.optionalHelp">
                    <i nz-tooltip class="anticon anticon-question-circle-o"></i>
                    </nz-tooltip>
                </span>
                </label>
            </ng-container>
            <ng-container *ngIf="data.length > 0">
                <ng-container *ngIf="grid_span === 0">
                <ng-template [ngTemplateOutlet]="all"></ng-template>
                <nz-checkbox-group [ngModel]="data" (ngModelChange)="notifySet()"></nz-checkbox-group>
                </ng-container>
                <ng-container *ngIf="grid_span !== 0">
                <nz-checkbox-wrapper class="checkbox-grid-list" (nzOnChange)="groupInGridChange($event)">
                    <nz-row>
                    <nz-col [nzSpan]="grid_span" *ngIf="checkAll">
                        <ng-template [ngTemplateOutlet]="all"></ng-template>
                    </nz-col>
                    <nz-col [nzSpan]="grid_span" *ngFor="let i of data">
                        <label nz-checkbox [nzValue]="i.value" [ngModel]="i.checked" [nzDisabled]="i.disabled">{{i.label}}</label>
                    </nz-col>
                    </nz-row>
                </nz-checkbox-wrapper>
                </ng-container>
            </ng-container>

            <nz-form-extra *ngIf="schema.description" [innerHTML]="schema.description"></nz-form-extra>
            <nz-form-explain *ngIf="!ui.onlyVisual && showError">{{error}}</nz-form-explain>
        </div>
        </nz-col>
    </nz-form-item>
  </sf-item-wrap>`,
    preserveWhitespaces: false,
})
export class ChoicesWidgetComponent extends ControlWidget {
    static readonly KEY = 'choices';

    data: SFSchemaEnum[] = [];
    allChecked = false;
    indeterminate = false;
    grid_span: number;
    label: number;
    control: number;
    offset: number;
    all: any;

    get checkAll() {
        return this.ui.checkAll;
    }

    getRemoteData(value: string, text?: string): Observable<SFSchemaEnumType[]> {
        const domain = this.ui.domain;
        const url = `api/${domain}/search`;
        const client = this.injector.get(HttpClient);
        return client.get(url, {
            params: {
                keyword: text || '',
                value: value
            }
        }) as any;
    }

    reset(value: any) {

        this.ui.asyncData = () => this.getRemoteData(value);

        getData(this.schema, this.ui, this.formProperty.formData).subscribe(
            list => {
                this.data = list;
                this.label = this.ui.spanLabel;
                this.control = this.ui.spanControl;
                if (list.length === 0) {
                    this.label = null;
                    this.offset = this.ui.spanLabel;
                }
                this.grid_span = 4;   // TODO 
                this.updateAllChecked();
            },
        );
    }

    _setValue(value: any) {
        this.setValue(value);
        this.detectChanges();
        this.notifyChange(value);
    }

    notifySet() {
        const checkList = this.data.filter(w => w.checked);
        this.updateAllChecked().setValue(
            checkList.map(item => item.value),
        );
        this.notifyChange(checkList);
    }

    groupInGridChange(values: any[]) {
        this.data.forEach(
            item => (item.checked = values.indexOf(item.value) !== -1),
        );
        this.notifySet();
    }

    onAllChecked(e: Event) {
        e.stopPropagation();
        this.data.forEach(item => (item.checked = this.allChecked));
        this.notifySet();
    }

    updateAllChecked(): this {
        if (this.data.every(item => item.checked === false)) {
            this.allChecked = false;
            this.indeterminate = false;
        } else if (this.data.every(item => item.checked === true)) {
            this.allChecked = true;
            this.indeterminate = false;
        } else {
            this.indeterminate = true;
        }
        this.detectChanges();
        return this;
    }

    private notifyChange(res: boolean | SFSchemaEnum[]) {
        if (this.ui.change) this.ui.change(res);
    }
}
