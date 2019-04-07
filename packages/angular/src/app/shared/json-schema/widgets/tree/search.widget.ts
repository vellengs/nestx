import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { ControlWidget, SFComponent } from '@delon/form';
import { HttpClient } from '@angular/common/http';
import { NzTreeNode } from 'ng-zorro-antd';

@Component({
    selector: 'sf-tree',
    template:
        `<sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

        <nz-tree-select
       style="width: 250px"
       [nzDefaultExpandedKeys]="expandKeys"
       [nzNodes]="nodes"
       nzPlaceHolder="Please select"
       [ngModel]="value"
       (nzOpenChange)="openChange()"
       (ngModelChange)="onChange($event)">
     </nz-tree-select>
     
 </sf-item-wrap>`,
    preserveWhitespaces: false,

})
export class TreeWidgetComponent extends ControlWidget implements OnInit {
    /* 用于注册小部件 KEY 值 */
    static readonly KEY = 'tree';

    i: any;
    expandKeys = ['1001', '10001'];

    nodes = [
        new NzTreeNode({
            title: 'root1',
            key: '1001',
            children: [
                {
                    title: 'child1',
                    key: '10001',
                    children: [
                        {
                            title: 'child1.1',
                            key: '100011',
                            children: []
                        },
                        {
                            title: 'child1.2',
                            key: '100012',
                            children: [
                                {
                                    title: 'grandchild1.2.1',
                                    key: '1000121',
                                    isLeaf: true,
                                    disabled: true
                                },
                                {
                                    title: 'grandchild1.2.2',
                                    key: '1000122',
                                    isLeaf: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }),
        new NzTreeNode({
            title: 'root2',
            key: '1002',
            children: [
                {
                    title: 'child2.1',
                    key: '10021',
                    children: [],
                    disableCheckbox: true
                },
                {
                    title: 'child2.2',
                    key: '10022',
                    children: [
                        {
                            title: 'grandchild2.2.1',
                            key: '100221',
                            isLeaf: true
                        }
                    ]
                }
            ]
        })
    ];

    openChange() {
        this.cd.markForCheck();
    }

    onChange($event: NzTreeNode): void {
        console.log($event);
    }

    ngOnInit(): void {

        this.i = {
            allowClear: this.ui.allowClear,
            autoFocus: this.ui.autoFocus || false,
            dropdownClassName: this.ui.dropdownClassName || null,
            dropdownMatchSelectWidth: this.ui.dropdownMatchSelectWidth || true,
            serverSearch: this.ui.serverSearch || false,
            maxMultipleCount: this.ui.maxMultipleCount || Infinity,
            multiple: this.schema.type === 'array',
            showExpand: this.ui.showExpand || true,
            checkable: this.ui.checkable,
            showLine: this.ui.showLine || false,
            defaultExpandAll: this.ui.defaultExpandAll || false,
            mode: this.ui.mode || 'default',
            notFoundContent: this.ui.notFoundContent || '无法找到',
            showSearch: this.ui.showSearch || true,
            defaultExpandKeys: this.ui.defaultExpandKeys || [],
        };
    }
}
