import { NzTreeNode, NzFormatEmitEvent } from 'ng-zorro-antd';
import { Component, OnInit, Injector, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import * as treeify from 'array-to-tree';
import { BaseStandComponent } from '@shared/base/base.stand.component';

@Component({
    selector: 'app-menus-page',
    templateUrl: './menus.html',
    styles: []
})
export class MenusPageComponent extends BaseStandComponent implements OnInit {


    @Input() domain = 'menu';

    nodes = [];
    expandKeys = [];
    searchValue = '';
    selectedItem: any = {};
    detailSchema: any = {};

    formData;
    value;

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
        this.loadMenuTree();
        this.onConfigChanged.subscribe(() => {
            this.detailSchema = this.formSets.edit;
            this.detailSchema.properties.permissions.ui.selectorAsyncData = () => {
                return this.coreService.menusGetPermissionTags();
            };
        });
    }


    async loadMenuTree() {
        const menuResponse = await this.coreService.menusQuery(true, '', 0, 3000).toPromise();
        const items = menuResponse ? menuResponse.list : [];
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

    treeNodeClick(e: Required<NzFormatEmitEvent>) {
        if (e.node.key === this.selectedItem.key) {

        } else {
            this.selectedItem = e.node;

            this.coreService.menusFindOne(e.node.key).subscribe((res) => {
                this.formData = res;
            });
        }
    }

    selectNode(event: Required<NzFormatEmitEvent>): void {
        if (name === 'contextmenu') {

        }
    }

    async saveMenu(entry) {
        const instance = Object.assign({}, entry);
        if (entry.permissions) {
            instance.permissions = entry.permissions.map((p) => {
                return p.id;
            });
        }
        super.save(instance);
    }

    addMenu() {

        const defaultItem = {
            parent: this.selectedItem.key
        };

        this.add(defaultItem);
    }

    removeMenu(item) {
        super.remove({
            id: item.key
        });
    }

    reload() {
        this.selectedItem = {};
        this.loadMenuTree();
    }

}
