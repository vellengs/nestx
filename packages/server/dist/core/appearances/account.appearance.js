"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appearance_1 = require("../../common/types/appearance");
const lodash_1 = require("lodash");
const addForm = {
    title: '新建帐号',
    properties: {
        username: {
            title: '帐号名',
            type: appearance_1.SchemaTypes.string,
        },
        password: {
            title: '密码',
            type: appearance_1.SchemaTypes.string,
            ui: {
                type: 'password'
            }
        },
        name: {
            title: '昵称',
            type: appearance_1.SchemaTypes.string,
        },
        type: {
            title: '类型',
            type: appearance_1.SchemaTypes.string
        },
        email: {
            title: '邮箱',
            type: appearance_1.SchemaTypes.string
        },
        mobile: {
            title: '手机',
            pattern: '^1[0-9]{10}$',
            type: appearance_1.SchemaTypes.string
        },
        isDisable: {
            title: '是否禁用',
            type: appearance_1.SchemaTypes.boolean
        },
        isAdmin: {
            title: '是否超管',
            type: appearance_1.SchemaTypes.boolean,
            readOnly: true,
        },
        isApproved: {
            title: '启用',
            default: true,
            type: appearance_1.SchemaTypes.boolean
        },
        expired: {
            title: '有效期',
            type: appearance_1.SchemaTypes.string,
            format: 'date-time',
            ui: {
                widget: appearance_1.WidgetTypes.date
            }
        },
        groups: {
            title: '用户组',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.treeSelect,
                domain: 'group',
                multiple: true,
                grid: {
                    span: 24
                }
            }
        },
        roles: {
            title: '角色',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.choices,
                domain: 'role',
                grid: {
                    span: 24
                }
            }
        },
    },
    required: ['username', 'password', 'mobile'],
    ui: {
        spanLabelFixed: 100,
        grid: {
            span: 8
        }
    }
};
const editForm = lodash_1.cloneDeep(addForm);
editForm.title = '编辑帐号';
editForm.required = ['username'];
editForm.properties.secret = {
    title: '密保',
    type: appearance_1.SchemaTypes.string
};
exports.appearance = {
    columnSets: {
        default: [
            {
                title: 'username',
                i18n: '帐号名称',
                index: ['username'],
                type: 'link',
                action: 'edit'
            },
            {
                title: 'name',
                i18n: '姓名',
                index: ['name']
            },
            {
                title: 'email',
                i18n: '邮箱',
                index: ['email']
            },
            {
                title: 'mobile',
                i18n: '手机号',
                index: ['mobile'],
            }
        ]
    },
    formSets: {
        query: {
            properties: {
                username: {
                    title: '帐号',
                    type: appearance_1.SchemaTypes.string,
                    maxLength: 30,
                    ui: {
                        placeholder: '请输入帐号名称'
                    }
                },
                mobile: {
                    title: '手机',
                    type: 'string',
                    ui: {
                        placeholder: '请输入手机号码'
                    }
                },
                email: {
                    title: '邮箱',
                    type: appearance_1.SchemaTypes.string,
                    ui: {
                        placeholder: '请输入邮箱'
                    }
                }
            }
        },
        add: addForm,
        edit: editForm
    }
};
//# sourceMappingURL=account.appearance.js.map