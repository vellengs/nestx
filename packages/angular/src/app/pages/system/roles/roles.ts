import { Component, OnInit, Injector, Input, ViewChild } from '@angular/core';
import { BaseStandComponent } from '@shared/base/base.stand.component';
import { BaseTreeSelectorComponent } from '@shared/base/base.tree.selector';
import { UserService } from '@services/user.service';
import { from } from 'rxjs';

@Component({
    selector: 'app-roles-page',
    templateUrl: './roles.html',
    styles: []
})
export class RolesPageComponent extends BaseStandComponent implements OnInit {
    url;
    @Input() domain = 'role';
    title = '权限管理';
    selectedItem: any = {};
    slaveQueryParams: any = {};

    @ViewChild('slaves') slaves: BaseStandComponent;

    constructor(public userService: UserService, injector: Injector) {
        super(injector);
    }

    async ngOnInit() {
        this.url = `api/${this.domain}/query`;
        this.onConfigChanged.subscribe(() => {});

        const self = this;

        this.operations = {
            title: '操作',
            width: '180px',
            buttons: [
                {
                    text: '移出',
                    type: 'del',
                    click: (record: any) => {
                        self.coreService
                            .usersRemoveAccountFromRole(
                                this.selectedItem.id,
                                record.id
                            )
                            .subscribe(res => {
                                if (res) {
                                    self.msg.success('移除成功！');
                                    self.slaves.reload();
                                }
                            });
                    }
                }
            ]
        };

        this.load();
    }

    addAccount() {}

    editPermission(item, $event) {
        $event.preventDefault();
        $event.stopPropagation();

        const selectedItems = item.permissions;
        const self = this;
        this.modalHelper
            .static(
                BaseTreeSelectorComponent,
                {
                    showResults: false,
                    includeAllChecked: true,
                    defaultCheckedKeys: selectedItems,
                    asyncData: () => {
                        const ajax = self.userService.treeMenus(selectedItems);
                        return from(ajax);
                    }
                },
                'lg',
                {
                    nzTitle: '编辑' + item.name + '的权限'
                }
            )
            .subscribe(res => {
                if (res) {
                    const ids = res.map(a => a.id);
                    item.permissions = ids;
                    const role = Object.assign({}, item);
                    this.coreService.rolesUpdate(role).subscribe(r => {
                        if (r) {
                            this.msg.success('权限修改成功');
                        }
                    });
                }
            });
    }

    removeRole(item, $event) {
        this.remove(item);
        $event.preventDefault();
        $event.stopPropagation();
    }

    editRole(item, $event) {
        this.edit(item);
        $event.preventDefault();
        $event.stopPropagation();
    }

    addAccountsToRole() {
        const self = this;
        this.modalHelper
            .static(
                BaseTreeSelectorComponent,
                {
                    asyncData: () => {
                        const ajax = self.userService.treeUsers();
                        return from(ajax);
                    }
                },
                'lg',
                {
                    nzTitle: '添加角色成员'
                }
            )
            .subscribe(res => {
                if (res) {
                    const ids = res.map(a => a.id);
                    const id = self.selectedItem.id;
                    self.coreService
                        .usersAddUsersToRole({
                            role: id,
                            userIds: ids
                        })
                        .subscribe(() => {
                            this.msg.success('完成');
                            self.slaves.reload();
                        });
                }
            });
    }

    select(item) {
        this.selectedItem = item;
        this.slaveQueryParams = {
            role: item.id
        };
        if (this.slaves) {
            this.slaves.queryParams = this.slaveQueryParams;
            this.slaves.reload();
        }
    }
}
