import { Component, Input, Injector } from '@angular/core';
import { BaseTable } from 'types/types';
import { BaseStandComponent } from '@shared/base/base.stand.component';
import * as arrayToTree from 'array-to-tree';
@Component({
    selector: 'app-base-tree-table',
    template: './base.tree.table.html'
})
export class BaseTreeTableComponent extends BaseStandComponent implements BaseTable {

    constructor(public injector: Injector) {
        super(injector);
    }


    @Input() domain;
    expandDataCache = {};
    treeData = [];

    async load() {
        this.treeData = await this.getMenuTreeData();
        this.treeData.forEach(item => {
            this.expandDataCache[item.id] = this.convertTreeToList(item);
        });
    }

    async getMenuTreeData() {
        const url = `api/menu/query`;
        const params = Object.assign({
            size: '1000',
            isMenu: true
        }, this.queryParams);
        const res: any = await this.client.get(url, params).toPromise();
        const docs = res.list;
        const tree = arrayToTree(docs, {
            parentProperty: 'parent',
            customID: 'id'
        });
        return tree;
    }

    collapse(array, data, $event) {
        if ($event === false) {
            if (data.children) {
                data.children.forEach(d => {
                    const target = array.find(a => a.id === d.id);
                    target.expand = false;
                    this.collapse(array, target, false);
                });
            } else {
                return;
            }
        }
    }

    convertTreeToList(root) {
        const stack = [], array = [], hashMap = {};
        stack.push({ ...root, level: 0, expand: true });

        while (stack.length !== 0) {
            const node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (node.children) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push({ ...node.children[i], level: node.level + 1, expand: false, parent: node });
                }
            }
        }

        return array;
    }

    visitNode(node, hashMap, array) {
        if (!hashMap[node.id]) {
            hashMap[node.id] = true;
            array.push(node);
        }
    }

    checkAll(value) {
        if (value) {
            this.treeData.forEach(data => data.checked = true);
        } else {
            this.treeData.forEach(data => data.checked = false);
        }
    }




}
