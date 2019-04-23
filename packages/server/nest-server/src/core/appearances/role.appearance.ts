import { Appearance, SchemaTypes as t, WidgetTypes as w, FormDefine } from "../../common/types/appearance";
import { cloneDeep } from 'lodash';
import { SFSchema } from "../../common/types/schema.types";

const addForm: SFSchema = {
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
            type: t.string,
            ui: {
                widget: w.textarea,
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

const editForm = cloneDeep(addForm);
editForm.title = '编辑角色';

export const appearance: Appearance = {
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
}
