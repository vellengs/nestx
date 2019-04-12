"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appearance_1 = require("../../common/types/appearance");
const lodash_1 = require("lodash");
const addForm = {
    title: '新建字典',
    properties: {
        category: {
            title: '字典分类',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.dict,
                category: 'category'
            },
        },
        name: {
            title: '字典键',
            type: 'string',
            maxLength: 30,
            ui: {
                placeholder: '请输入字典名称',
            }
        },
        translate: {
            title: '名称',
            type: appearance_1.SchemaTypes.string,
        },
        expand: {
            title: '拓展数据',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.textarea
            }
        }
    },
    required: ['name', 'category', 'translate'],
    ui: {
        spanLabelFixed: 100,
        grid: {
            span: 8
        }
    }
};
const editForm = lodash_1.cloneDeep(addForm);
editForm.title = '编辑字典';
exports.appearance = {
    columnSets: {
        default: [
            {
                title: 'category',
                i18n: '字典分类值',
                index: ['category']
            },
            {
                title: 'name',
                i18n: '字典键',
                index: ['name']
            },
            {
                title: 'translate',
                i18n: '值',
                index: ['translate']
            },
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
                        placeholder: '请输入字典名称'
                    }
                }
            }
        },
        add: addForm,
        edit: editForm
    }
};
//# sourceMappingURL=dict.appearance.js.map