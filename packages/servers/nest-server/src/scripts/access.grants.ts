const actions = {
  create: '创建',
  read: '读取',
  update: '更新',
  delete: '删除',
};

export interface GrantNode {
  name: string;
  actions: {
    [k: string]: string;
    create?: string;
    read?: string;
    update?: string;
    delete?: string;
  };
}

 

export const grants: {
  [key: string]: GrantNode;
} = {
  dict: {
    name: '字典',
    actions,
  },
  group: {
    name: '用户组',
    actions,
  },
  log: {
    name: '日志',
    actions,
  },
  menu: {
    name: '菜单',
    actions,
  },
  notice: {
    name: '通知',
    actions,
  },
  role: {
    name: '角色',
    actions,
  },
  setting: {
    name: '设置',
    actions,
  },
  user: {
    name: '用户',
    actions,
  },
};
