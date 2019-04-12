import { Appearance, SchemaTypes as t, WidgetTypes as w, FormDefine } from "../../common/types/appearance";
import { cloneDeep } from 'lodash';
import { SFSchema } from "../../common/types/schema.types";

const addForm: SFSchema = {
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
                widget: w.search,
                allowClear: true,
                domain: 'menu'
            }
        },
        group: {
            title: '是否分组',
            type: t.boolean,
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
                widget: w.autocomplete
            }
        },
        expanded: {
            title: '是否展开',
            type: t.boolean,
        },
        order: {
            title: '顺序',
            type: t.number,
            default: 100,
        },
        permissions: {
            title: '权限标签',
            type: t.string,
            ui: {
                widget: w.listBox,
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

const editForm = cloneDeep(addForm);
editForm.title = '编辑菜单';

export const appearance: Appearance = {
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
                        // asyncData: (input: string) => of(input ? [input, input + input, input + input + input] : [])
                    }
                }
            }
        },
        add: addForm,
        edit: editForm
    }
}

