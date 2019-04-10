import { Appearance, SchemaTypes as t, WidgetTypes as w, FormDefine } from "../../common/types/appearance";
import { cloneDeep } from 'lodash';
import { SFSchema } from "../../common/types/schema.types";

const addForm: SFSchema = {
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
                widget: w.treeSelect,
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
            type: t.number,
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

const editForm = cloneDeep(addForm);
editForm.title = '编辑分类';

export const appearance: Appearance = {
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
                        // asyncData: (input: string) => of(input ? [input, input + input, input + input + input] : [])
                    }
                }
            }
        },
        add: addForm,
        edit: editForm
    }
}

