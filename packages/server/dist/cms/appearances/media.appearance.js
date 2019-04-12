"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appearance_1 = require("../../common/types/appearance");
const lodash_1 = require("lodash");
const addForm = {
    title: '新建媒体',
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
        file: {
            title: '文件',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.avatar,
                fileType: 'image/png,image/jpeg,image/gif,image/bmp',
                listType: 'picture-card',
                action: 'user/upload',
                limit: 1,
                name: 'file',
                grid: {
                    span: 24
                }
            },
        },
        description: {
            title: '描述',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.textarea,
                grid: {
                    span: 24
                }
            }
        }
    },
    required: ['name'],
    ui: {
        spanLabelFixed: 100,
        grid: {
            span: 8
        }
    }
};
const editForm = lodash_1.cloneDeep(addForm);
editForm.title = '编辑媒体';
editForm.required = ['name'];
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
                index: 'caption'
            },
            {
                title: '地址',
                index: 'url'
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
//# sourceMappingURL=media.appearance.js.map