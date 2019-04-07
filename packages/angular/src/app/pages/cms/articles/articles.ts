import { NzTreeNode } from 'ng-zorro-antd';
import { Component, OnInit, Injector, Input } from '@angular/core';
import { BaseStandComponent } from '@shared/base/base.stand.component';

@Component({
    selector: 'app-articles-page',
    templateUrl: './articles.html',
    styles: []
})
export class ArticlesPageComponent extends BaseStandComponent implements OnInit {

    @Input() domain = 'article';
    configReady;
    queryUrl;


    expandKeys = ['1001', '10001'];
    value1: string;
    nodes1 = [
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

    onChange($event: NzTreeNode): void {
        console.log($event);
    }


    constructor(injector: Injector) {
        super(injector);
    }

    async ngOnInit() {
        this.queryUrl = `api/${this.domain}/query`;
        this.operations = {
            title: '操作',
            width: '180px',
            buttons: [
                {
                    text: '删除',
                    type: 'del',
                    click: (record: any) => {
                        this.remove(record, false);
                    }
                },
                {
                    text: '编辑',
                    type: 'none',
                    click: (record: any) => {
                        this.edit(record);
                    }
                }
            ]
        };

        this.onConfigChanged.subscribe(() => {
            this.configReady = true;
        });
    }

}
