import { Component, Injector, Input, ViewChild, OnInit } from '@angular/core';
import { BaseComponent } from '@shared/base/base.component';
import { NzModalRef, NzTreeComponent } from 'ng-zorro-antd';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';
import { TreeData } from 'types/types';


@Component({
    selector: 'app-base-tree-selector',
    templateUrl: './base.tree.selector.html',
    styles: [
        `
        .anticon {
            padding-left: 4px;
            padding-right: 4px;
        }
        `
    ]
})
export class BaseTreeSelectorComponent extends BaseComponent implements OnInit {

    modalRef: NzModalRef;

    @Input() includeAllChecked = false;
    @Input() multiple = true;
    @Input() showResults = true;
    @Input() queryUrl = '';
    @Input() columns: any;
    @Input() queryParams: any = {};
    @Input() defaultCheckedKeys = [];
    @Input() asyncData: () => Observable<TreeData>;
    @ViewChild('treeView') treeView: NzTreeComponent;

    searchValue = '';
    nodes = [];
    expandKeys = [];
    model: any = {};
    selectedItems = [];
    selectNode = {};
    selectedItem: any = {};

    constructor(
        public injector: Injector,
        public userService: UserService,

    ) {
        super(injector);
        this.modalRef = this.injector.get(NzModalRef);
    }

    ngOnInit() {
        this.asyncData().subscribe((res) => {
            this.nodes = res.nodes;
            this.expandKeys = res.expandKeys;
        });
    }

    save() {
        this.modalRef.destroy(this.selectedItems);
    }

    cleanAll() {
        this.selectedItems.forEach((item) => {
            item.isChecked = false;
        });
        this.selectedItems = [];
    }

    removeOne(item) {
        const index = this.selectedItems.indexOf(item);
        if (index > -1) {
            item.isChecked = false;
            this.selectedItems.splice(index, 1);
        }
    }

    treeNodeClick(e: any) { // TODO
        if (e.node.key === this.selectedItem.key) {

        } else {
            this.selectedItem = e.node;
        }
    }

    showContextMenu() {

    }

    nodeExpandChanged(label: string, event: any) {

    }

    selectedChanged(event: any) {
        this.getAllCheckedItems();
    }

    getAllCheckedItems() {
        const stack = [...this.nodes], array = [], hashMap = {};
        while (stack.length !== 0) {
            const node = stack.pop();
            let satisfy = false;

            if (this.includeAllChecked) {
                satisfy = node.isChecked || node.isHalfChecked;
            } else {
                satisfy = node.isChecked && node.isLeaf;
            }

            if (satisfy) {
                if (!hashMap[node.origin.id]) {
                    hashMap[node.origin.id] = true;
                    array.push(node);
                }
            }

            if (node.children && (node.isHalfChecked || node.isChecked)) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push(node.children[i]);
                }
            }
        }
        this.selectedItems = array.map((a) => {
            return a.origin;
        });
    }

    cancel() {
        this.modalRef.destroy('onCancel');
    }

}
