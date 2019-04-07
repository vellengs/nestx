import { NzTreeNode } from 'ng-zorro-antd';
import { Component, OnInit, Injector, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import * as treeify from 'array-to-tree';
import { BaseStandComponent } from '@shared/base/base.stand.component';

@Component({
    selector: 'app-categories-page',
    templateUrl: './categories.html',
    styles: []
})
export class CategoriesPageComponent extends BaseStandComponent implements OnInit {


    @Input() domain = 'category';

    nodes = [];
    expandKeys = [];
    searchValue = '';
    selectedItem: any = {};
    detailSchema: any = {};
    formData;

    operationColumn = {
        title: '操作区',
        width: '180px',
        buttons: [
            {
                text: '删除',
                type: 'del',
                click: () => {
                }
            },
            {
                text: '编辑',
                type: 'none',
                click: () => {
                }
            },
            {
                text: '更多',
                children: [
                    {
                        text: `过期`,
                        type: 'none',
                    },
                ]
            }
        ]
    };

    constructor(injector: Injector) {
        super(injector);
    }

    async ngOnInit() {
        this.loadTreeData();
        this.onConfigChanged.subscribe(() => {
            this.detailSchema = this.formSets.edit;
        });
    }

    async loadTreeData() {
        const treeResponse = await this.cmsService.categoryQuery('', 0, 3000).toPromise();

         const items = treeResponse ? treeResponse.list : [];

        const raw = items.map((item) => {
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
    }


    treeNodeClick(e: any) {
        if (e.node.key === this.selectedItem.key) {

        } else {
            this.selectedItem = e.node;
            this.cmsService.categoryGet(e.node.key).subscribe((res) => {
                this.formData = res;
            });
        }
    }

    selectNode(name: string): void {
        if (name === 'contextmenu') {

        }
    }

    formChanged() {

    }

    onFormError() {

    }

    removeMenu(item) {
        super.remove({
            id: item.key
        });
    }

    reload() {
        this.selectedItem = {};
        this.loadTreeData();
    }

}
