import { Component } from '@angular/core';
import {
    ControlWidget,
    SFSchemaEnum,
    SFSchemaEnumType,
    SFValue
} from '@delon/form';
import { getData } from '@shared/json-schema/util';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocaleData } from '@delon/theme';

@Component({
    selector: 'sf-choices',
    templateUrl: './choices.widget.html'
})
export class ChoicesWidgetComponent extends ControlWidget {
    static readonly KEY = 'choices';

    data: SFSchemaEnum[] = [];
    allChecked = false;
    indeterminate = false;
    grid_span: number;
    labelTitle = ``;
    inited = false;
    get l(): LocaleData {
        return this.formProperty.root.widget.sfComp.locale;
    }

    get checkAll() {
        return this.ui.checkAll;
    }

    get checkAllText() {
        return this.ui.checkAllText || this.l.checkAllText;
    }

    getRemoteData(
        value: string,
        text?: string
    ): Observable<SFSchemaEnumType[]> {
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

    reset(value: SFValue) {
        this.ui.asyncData = () => this.getRemoteData(value);

        getData(this.schema, this.ui, this.formProperty.formData).subscribe(
            list => {
                this.data = list;
                this.allChecked = false;
                this.indeterminate = false;
                this.labelTitle = list.length === 0 ? '' : this.schema.title;
                this.grid_span =
                    this.ui.span && this.ui.span > 0 ? this.ui.span : 0;
                this.updateAllChecked();
                this.inited = true;
                this.cd.detectChanges();
            }
        );
    }

    _setValue(value: SFValue) {
        this.setValue(value);
        this.detectChanges();
        this.notifyChange(value);
    }

    notifySet() {
        const checkList = this.data.filter(w => w.checked);
        this.updateAllChecked().setValue(checkList.map(item => item.value));
        this.notifyChange(checkList);
    }

    groupInGridChange(values: SFValue[]) {
        this.data.forEach(
            item => (item.checked = values.indexOf(item.value) !== -1)
        );
        this.notifySet();
    }

    onAllChecked() {
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
