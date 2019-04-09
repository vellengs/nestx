import { Appearance, SchemaTypes as t, WidgetTypes as w, FormDefine } from "../../common/types/appearance";
import { cloneDeep } from 'lodash';
import { SFSchema } from "../../common/types/schema.types";

const addForm: SFSchema = {
    title: '新建媒体',
    properties: {
        title: {
            title: '标题',
            type: t.string,
            ui: {
                grid: {
                    span: 16
                }
            }
        },
        file: {
            title: '文件',
            type: t.string,
            ui: {
                widget: w.avatar,
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
            type: t.string,
            ui: {
                widget: w.textarea,
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

const editForm = cloneDeep(addForm);
editForm.title = '编辑媒体';
editForm.required = ['name'];

export const appearance: Appearance = {
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
                    type: t.string,
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
}
