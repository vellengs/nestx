"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appearance_1 = require("../../common/types/appearance");
const lodash_1 = require("lodash");
const addForm = {
    title: '新建角色',
    properties: {
        name: {
            title: '名称',
            type: 'string',
            maxLength: 30,
            ui: {
                placeholder: '请输入字典名称',
            }
        },
        description: {
            title: '角色描述',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.textarea,
                grid: {
                    span: 24
                },
                size: 'large'
            }
        },
    },
    required: ['name', 'description'],
    ui: {
        spanLabelFixed: 100,
        grid: {
            span: 8
        }
    }
};
const editForm = lodash_1.cloneDeep(addForm);
editForm.title = '编辑角色';
exports.appearance = {
    columnSets: {
        default: [
            {
                title: 'name',
                i18n: '角色',
                index: ['name']
            },
            {
                title: 'description',
                i18n: '描述',
                index: ['description']
            },
            {
                title: 'permissions',
                i18n: '权限',
                index: ['permissions']
            },
        ]
    },
    formSets: {
        query: {
            properties: {
                keyword: {
                    type: 'string',
                    title: '角色名称',
                    maxLength: 20,
                    ui: {
                        widget: 'autocomplete',
                        debounceTime: 100,
                        placeholder: '请输入角色名称'
                    }
                }
            }
        },
        add: addForm,
        edit: editForm
    }
};
//# sourceMappingURL=role.appearance.js.map