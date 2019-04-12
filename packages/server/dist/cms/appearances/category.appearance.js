"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appearance_1 = require("../../common/types/appearance");
const lodash_1 = require("lodash");
const addForm = {
    title: '新建分类',
    properties: {
        name: {
            title: '名称',
            type: 'string',
            maxLength: 30,
            ui: {
                placeholder: '请输入分类名称',
            }
        },
        parent: {
            title: '父级分类',
            type: 'string',
            ui: {
                widget: appearance_1.WidgetTypes.treeSelect,
                allowClear: true,
                placeholder: '请选择分类',
                domain: 'category'
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
        order: {
            title: '顺序',
            type: appearance_1.SchemaTypes.number,
            default: 100,
        },
    },
    required: ['name', 'slug'],
    ui: {
        spanLabelFixed: 100,
        grid: {
            span: 8
        }
    }
};
const editForm = lodash_1.cloneDeep(addForm);
editForm.title = '编辑分类';
exports.appearance = {
    columnSets: {
        default: [
            {
                title: '名称',
                index: 'name'
            },
            {
                title: '标识',
                index: 'slug'
            },
            {
                title: '排序',
                index: 'order'
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
                        placeholder: '请输入分类名称',
                    }
                }
            }
        },
        add: addForm,
        edit: editForm
    }
};
//# sourceMappingURL=category.appearance.js.map