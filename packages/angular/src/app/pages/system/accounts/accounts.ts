import { NzTreeNode } from 'ng-zorro-antd';
import { Component, OnInit, Injector, Input, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { BaseStandComponent } from '@shared/base/base.stand.component';
import * as treeify from 'array-to-tree';
@Component({
    selector: 'app-account-page',
    templateUrl: './accounts.html',
    styles: [
        ` 
    .custom-node {
        padding: 2px 8px;
    }

    .active {
        background-color: #bae7ff;
    }

    .anticon {
        padding-left: 4px;
        padding-right: 4px;
    }

    :host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {
        width: calc(100% - 8px);
    }

    :host ::ng-deep .ant-tree li span[draggable], :host ::ng-deep .ant-tree li span[draggable="true"] {
        width: calc(100% - 8px);
    }
        `
    ]
})
export class AccountsPageComponent extends BaseStandComponent implements OnInit {

    @Input() domain = 'group';
    @ViewChild('accountList') accounts: BaseStandComponent;

    nodes = [];
    expandKeys = [];
    searchValue = '';
    selectedItem: any = {};
    accountQueryParams: any = {};

    operationColumn = {
        title: '操作区',
        width: '180px',
        buttons: [
            {
                text: '删除',
                type: 'del',
                click: (record: any) => {
                    if (this.accounts) {
                        this.accounts.remove(record, false);
                    }
                }
            },
            {
                text: '编辑',
                type: 'none',
                click: (record: any) => {
                    if (this.accounts) {
                        this.accounts.edit(record);
                    }
                }
            },
            // {
            //     text: '更多',
            //     children: [
            //         {
            //             text: `过期`,
            //             type: 'none',
            //         },
            //     ]
            // }
        ]
    };

    constructor(injector: Injector) {
        super(injector);
    }

    async ngOnInit() {

        this.onConfigChanged.subscribe(() => {

        });

        this.onEntriesLoaded.subscribe(() => {
            const items = this.entries || [];
            const raw = (items).map((item) => {
                const isLeaf = items.findIndex(r => r.parent === item.id) === -1;
                return {
                    title: item.name,
                    key: item.id,
                    parent: item.parent,
                    id: item.id,
                    isLeaf: isLeaf
                };
            });

            const treeData = treeify(raw, {
                parentProperty: 'parent',
                customID: 'id'
            }) || [];

            this.nodes = treeData.map(doc => {
                this.expandKeys.push(doc.id);
                return new NzTreeNode(doc);
            });
        });
        this.load();
    }

    addAccount() {
        const model = {
            groups: [this.selectedItem.key]
        };
        this.accounts.add(model);
    }

    editGroup(item) {
        this.edit({
            id: item.key
        });
    }

    addGroup() {
        this.add({
            parent: this.selectedItem.key
        });
    }

    removeGroup(item) {
        this.remove({
            id: item.key
        });
    }

    treeNodeClick(e: any) {

        if (e.node.key === this.selectedItem.key) {

        } else {
            this.selectedItem = e.node;
            this.accountQueryParams.group = this.selectedItem.key;
            if (this.accounts) {
                this.accounts.queryParams = this.accountQueryParams;
                this.accounts.reload();
            }
        }
    }

    selectNode(name: string): void {
        if (name === 'contextmenu') {

        }
    }

}
