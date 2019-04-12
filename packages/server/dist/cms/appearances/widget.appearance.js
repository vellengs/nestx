"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appearance_1 = require("../../common/types/appearance");
const lodash_1 = require("lodash");
const addForm = {
    title: '新建小部件',
    properties: {
        title: {
            title: '标题',
            type: appearance_1.SchemaTypes.string,
            ui: {
                grid: {
                    span: 16
                }
            }
        },
        name: {
            title: '名称',
            type: appearance_1.SchemaTypes.string,
        },
        type: {
            title: '类型',
            type: appearance_1.SchemaTypes.string
        },
        params: {
            title: '配置参数',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.textarea,
                grid: {
                    span: 24
                }
            }
        },
    },
    required: ['name', 'title', 'type'],
    ui: {
        spanLabelFixed: 100,
        grid: {
            span: 8
        }
    }
};
const editForm = lodash_1.cloneDeep(addForm);
editForm.title = '编辑文章';
editForm.required = ['username'];
editForm.properties.secret = {
    title: '密保',
    type: appearance_1.SchemaTypes.string
};
exports.appearance = {
    columnSets: {
        default: [
            {
                title: '名称',
                index: 'name',
                type: 'link',
                action: 'edit'
            },
            {
                title: '标题',
                index: 'title'
            },
            {
                title: '类型',
                index: 'title'
            }
        ]
    },
    formSets: {
        query: {
            properties: {
                name: {
                    title: '名称',
                    type: appearance_1.SchemaTypes.string,
                    maxLength: 30,
                    ui: {
                        placeholder: '请输入文章名称'
                    }
                }
            }
        },
        add: addForm,
        edit: editForm
    }
};
//# sourceMappingURL=widget.appearance.js.map