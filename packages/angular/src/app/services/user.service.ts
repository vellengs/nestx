import { Injectable } from '@angular/core';
import { SettingsService, _HttpClient } from '@delon/theme';
import { CoreService, LoginReq, AuthService } from 'generated';
import { NzTreeNode } from 'ng-zorro-antd';
import { ArrayService } from '@delon/util';

interface User {
    name?: string;
    username?: string;
    token?: string;
    roles?: string;
    isAdmin?: boolean;
}

@Injectable()
export class UserService {
    constructor(
        public client: _HttpClient,
        public settings: SettingsService,
        public authService: AuthService,
        public coreService: CoreService,
        public arrayService: ArrayService
    ) {}

    private timeStamp = new Date().getTime();
    private authenticating = false;

    private depots: string;
    private regionIds = [];
    private _allRegions = [];
    private user: User = {};

    get isLogin(): boolean {
        return this.user.name != null;
    }

    get token(): string {
        return this.user.token;
    }

    get username(): string {
        return this.user.username;
    }

    get isAdmin(): boolean {
        return this.user.isAdmin;
    }

    hasRole(name: 'admin' | 'employee'): boolean {
        return this.user.roles.includes(name);
    }

    async treeMenus(ids?: Array<string>) {
        ids = ids || [];
        const menus: any = await this.client
            .get('api/menu/query', {
                size: 5000,
                isMenu: true
            })
            .toPromise();

        const menuItems = menus.list.map((item, index) => {
            const isLeaf =
                menus.list.findIndex(r => r.parent === item.id) === -1;
            const hasPermissionNodes =
                item.permissions && item.permissions.length;
            const node: any = {
                title: item.name,
                key: item.id,
                parent: item.parent,
                permissions: item.permissions,
                id: item.id,
                checked: ids.includes(item.id) && isLeaf && !hasPermissionNodes,
                isLeaf: isLeaf
            };
            return node;
        });

        const tree = this.arrayService.arrToTree(menuItems, {
            parentIdMapName: 'parent',
            idMapName: 'id'
        });

        const refactorMenu = item => {
            const hasPermissionNodes =
                item.permissions && item.permissions.length;
            if (hasPermissionNodes) {
                item.children = item.permissions.map((p, i) => {
                    return {
                        title: p.name,
                        key: p.id + i,
                        id: p.id,
                        checked: ids.includes(p.id) && ids.includes(item.id),
                        isLeaf: true
                    };
                });
                item.isLeaf = false;
            }
        };

        const iterateTree = (items: any[]) => {
            const stack: any[] = [];
            stack.push(...items);
            while (stack.length !== 0) {
                const node = stack.pop();
                refactorMenu(node);
                if (node.children) {
                    stack.push(...node.children);
                }
            }
        };

        iterateTree(tree);
        const expandKeys = [];
        const nodes = tree.map((doc: any) => {
            expandKeys.push(doc.key);
            return new NzTreeNode(doc);
        });

        return {
            nodes: nodes,
            expandKeys: expandKeys
        };
    }

    async treeUsers() {
        const res = await this.coreService.groupsGetGroupedUsers().toPromise();
        const { groups, users } = res;
        const groupItems = groups.map((item, index) => {
            return {
                title: item.name,
                key: item.id + index,
                parent: item.parent,
                id: item.id
                // isLeaf: isLeaf
            };
        });

        const userItems = users.map((item, index) => {
            return {
                title: item.name,
                key: item.id + index,
                id: item.id,
                groups: item.groups,
                isLeaf: true
            };
        });

        const tree = this.arrayService.arrToTree(groupItems, {
            idMapName: 'id',
            parentIdMapName: 'parent'
        });

        const attachUsers = group => {
            group.children = group.children || [];
            const items = userItems.filter(entry => {
                return entry.groups && entry.groups.includes(group.id);
            });
            group.children.push(...items);
        };

        const iterateTree = (items: any[]) => {
            const stack: any[] = [];
            stack.push(...items);
            while (stack.length !== 0) {
                const node = stack.pop();
                attachUsers(node);
                if (node.children) {
                    stack.push(...node.children);
                }
            }
        };

        iterateTree(tree);
        const expandKeys = [];
        const nodes = tree.map((doc: any) => {
            expandKeys.push(doc.key);
            return new NzTreeNode(doc);
        });

        return {
            nodes: nodes,
            expandKeys: expandKeys
        };
    }

    async login(model: LoginReq) {
        const user = await this.authService.authLogin(model).toPromise();
        this.settings.setUser(user);
        return user;
    }

    async isUnAuthenticated(client) {
        if (this.authenticating) {
            return true;
        }
        this.authenticating = true;
        const user = (await this.coreService.usersProfile().toPromise()) || {};
        this.settings.setUser(user);
        return user;
    }

    async logout() {
        await this.authService.authLogout().toPromise();
        this.settings.setUser(null);
        this.user = {};
    }
}
