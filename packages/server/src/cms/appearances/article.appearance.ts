import { Appearance, SchemaTypes as t, WidgetTypes as w, FormDefine } from "../../common/types/appearance";
import { cloneDeep } from 'lodash';
import { SFSchema } from "../../common/types/schema.types";

const addForm: SFSchema = {
    title: '新建文章',
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
        keyword: {
            title: '关键词',
            type: t.string
        },
        picture: {
            title: '图片',
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
        category: {
            title: '分类',
            type: t.string,
            ui: {
                widget: w.treeSelect,
                domain: 'category',
                allowClear: true,
                placeholder: '请选择分类'
            },
            default: null,
        },
        description: {
            title: '摘要',
            type: t.string,
            ui: {
                widget: w.textarea,
                grid: {
                    span: 24
                }
            }
        },
        content: {
            title: '内容',
            type: t.string,
            ui: {
                widget: w.umeditor,
                grid: {
                    span: 24
                }
            }
        },
    },
    required: ['title', 'category'],
    ui: {
        spanLabelFixed: 100,
        grid: {
            span: 8
        }
    }
};

const editForm = cloneDeep(addForm);
editForm.title = '编辑文章';

export const appearance: Appearance = {
    columnSets: {
        default: [
            {
                title: '标题',
                index: 'title'
            },
            {
                title: '作者',
                index: 'author'
            },
            {
                title: '分类',
                index: 'category.name'
            }
        ]
    },
    formSets: {
        query: {
            properties: {
                keyword: {
                    title: '文章标题',
                    type: t.string,
                    maxLength: 30,
                    ui: {
                        placeholder: '请输入文章标题'
                    }
                },
                category: {
                    title: '分类',
                    type: t.string,
                    ui: {
                        widget: w.treeSelect,
                        domain: 'category',
                        allowClear: true,
                        placeholder: '请选择分类'
                    },
                    default: null,
                }
            }
        },
        add: addForm,
        edit: editForm
    }
}
