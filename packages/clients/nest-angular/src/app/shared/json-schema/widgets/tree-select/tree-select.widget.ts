import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { ControlWidget, SFComponent, SFSchemaEnumType } from '@delon/form';
import { getData } from '@shared/json-schema/util';
import { HttpClient } from '@angular/common/http';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { TreeService } from '@services/tree.service';

@Component({
    selector: 'sf-tree-selects',
    template:
        `<sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
     <nz-tree-select 
    [ngModel]="value"
    (ngModelChange)="onValueChange($event)"
    [nzAllowClear]="i.allowClear"
    [nzPlaceHolder]="ui.placeholder"
    [nzDisabled]="disabled"
    [nzShowSearch]="i.showSearch"
    [nzMultiple]="i.multiple"
    [nzSize]="ui.size"
    [nzCheckable]="i.checkable"
    [nzShowExpand] = "i.showExpand"
    [nzShowLine] = "i.showLine"
    [nzNodes]="nodes"
    (nzOpenChange)="openChange($event)"
    [nzDefaultExpandAll]="i.defaultExpandAll"  
    [nzDefaultExpandedKeys]="i.defaultExpandKeys"
    (nzExpandChange)="treeExpandChanged($event)">
</nz-tree-select>
  </sf-item-wrap>`,
    preserveWhitespaces: false,
    styles: [
        `:host nz-tree-select { min-width:120px; }
       `
    ]
})
export class TreeSelectWidgetComponent extends ControlWidget implements OnInit {
    /* 用于注册小部件 KEY 值 */
    static readonly KEY = 'tree-select';

    i: any;
    nodes: NzTreeNode[] = [];
    hasGroup = false;

    ngOnInit(): void {
        this.i = {
            allowClear: this.ui.allowClear,
            autoFocus: this.ui.autoFocus || false,
            dropdownClassName: this.ui.dropdownClassName || null,
            serverSearch: this.ui.serverSearch || false,
            maxMultipleCount: this.ui.maxMultipleCount || Infinity,
            multiple: this.schema.type === 'array' || this.ui.multiple,
            showExpand: this.ui.showExpand || true,
            checkable: false,
            showLine: this.ui.showLine || false,
            defaultExpandAll: this.ui.defaultExpandAll || false,
            mode: this.ui.mode || 'default',
            notFoundContent: this.ui.notFoundContent || '无法找到',
            showSearch: this.ui.showSearch || true,
            defaultExpandKeys: this.ui.defaultExpandKeys || [],
        };
    }

    getRemoteData(value: string, text?: string): Observable<SFSchemaEnumType[]> {
        const domain = this.ui.domain;
        const url = `api/${domain}/tree`;
        const client = this.injector.get(HttpClient);
        return client.get(url, {
            params: {
                keyword: text || '',
                value: value
            }
        }) as any;
    }

    reset(value: any) {
        const self = this;
        self.ui.asyncData = () => self.getRemoteData(value);
        const treeService = this.injector.get(TreeService);
        getData(self.schema, self.ui, self.formProperty.formData).subscribe(
            list => {
                self.nodes = treeService.arrToTreeNode(list, {
                    pidMapName: 'parent'
                });
                self.detectChanges();
            },
        );
    }

    onValueChange(value: string): void {
        this.setValue(value);
    }

    openChange(event: any): void {

    }

    treeExpandChanged(e: NzFormatEmitEvent) {
        if (e.node.getChildren().length === 0 && e.node.isExpanded) {
            // this.loadNode().then(data => {
            //     e.node.addChildren(data);
            // });
        }
    }

}
