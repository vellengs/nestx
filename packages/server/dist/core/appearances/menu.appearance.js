"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appearance_1 = require("../../common/types/appearance");
const lodash_1 = require("lodash");
const addForm = {
    title: '新建菜单',
    properties: {
        name: {
            title: '名称',
            type: 'string',
            maxLength: 30,
            ui: {
                placeholder: '请输入菜单名称',
            }
        },
        parent: {
            title: '父级菜单',
            type: 'string',
            ui: {
                widget: appearance_1.WidgetTypes.search,
                allowClear: true,
                domain: 'menu'
            }
        },
        group: {
            title: '是否分组',
            type: appearance_1.SchemaTypes.boolean,
            default: false
        },
        link: {
            title: '链接',
            type: 'string',
            maxLength: 512,
            ui: {
                placeholder: '请输入链接',
                visibleIf: {
                    group: [false]
                }
            }
        },
        slug: {
            title: '标识',
            type: 'string',
            maxLength: 30,
            ui: {
                placeholder: '请输标识'
            }
        },
        icon: {
            title: '图标',
            type: 'string',
            ui: {
                widget: appearance_1.WidgetTypes.autocomplete
            }
        },
        expanded: {
            title: '是否展开',
            type: appearance_1.SchemaTypes.boolean,
        },
        order: {
            title: '顺序',
            type: appearance_1.SchemaTypes.number,
            default: 100,
        },
        permissions: {
            title: '权限标签',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.listBox,
                selectorTitle: '添加权限标签',
                buttonName: '添加',
                visibleIf: {
                    group: [false]
                },
                grid: {
                    span: 24
                }
            }
        },
    },
    required: ['name', 'link'],
    ui: {
        spanLabelFixed: 100,
        grid: {
            span: 8
        }
    }
};
const editForm = lodash_1.cloneDeep(addForm);
editForm.title = '编辑菜单';
exports.appearance = {
    columnSets: {
        default: [
            {
                title: 'name',
                i18n: '名称',
                index: ['name']
            },
            {
                title: 'icon',
                i18n: '图标',
                index: ['icon']
            },
            {
                title: 'link',
                i18n: '链接',
                index: ['link']
            },
            {
                title: 'externalLink',
                i18n: '扩展链接',
                index: ['externalLink']
            },
            {
                title: 'slug',
                index: ['externalLink']
            },
            {
                title: 'order',
                index: ['order'],
                click: () => {
                }
            }
        ]
    },
    formSets: {
        query: {
            properties: {
                keyword: {
                    type: 'string',
                    title: '名称',
                    maxLength: 20,
                    ui: {
                        widget: 'autocomplete',
                        debounceTime: 100,
                        placeholder: '请输入菜单名称',
                    }
                }
            }
        },
        add: addForm,
        edit: editForm
    }
};
//# sourceMappingURL=menu.appearance.js.map