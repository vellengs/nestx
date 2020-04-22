import {
  Appearance,
  SchemaTypes as t,
  WidgetTypes as w,
  SFSchema,
} from 'nestx-common';
import { cloneDeep } from 'lodash';

const addForm: SFSchema = {
  title: '新建用户组',
  properties: {
    name: {
      title: '名称',
      type: 'string',
      maxLength: 30,
      ui: {
        placeholder: '请输入名称',
      },
    },
    icon: {
      title: '图标',
      type: 'string',
      maxLength: 30,
      ui: {
        placeholder: '请输入图标',
      },
    },
    parent: {
      title: '父级',
      type: 'string',
      maxLength: 30,
      ui: {
        widget: w.treeSelect,
        placeholder: '请选择父级',
        domain: 'group',
      },
    },
    director: {
      title: '负责人',
      type: 'string',
      maxLength: 30,
      ui: {
        widget: w.search,
        placeholder: '请选择负责人',
        domain: 'user',
      },
    },
    description: {
      title: '用户组描述',
      type: t.string,
      ui: {
        widget: w.textarea,
        grid: {
          span: 24,
        },
        size: 'large',
      },
    },
  },
  required: ['name', 'description'],
  ui: {
    spanLabelFixed: 100,
    grid: {
      span: 8,
    },
  },
};

const editForm = cloneDeep(addForm);
editForm.title = '编辑用户组';

export const appearance: Appearance = {
  columnSets: {
    default: [
      {
        title: 'outid',
        i18n: '外部编号',
        index: ['outid'],
      },
      {
        title: 'name',
        i18n: '名称',
        index: ['name'],
      },
      {
        title: 'icon',
        i18n: '图标',
        index: ['icon'],
      },
      {
        title: 'parent',
        i18n: '父级',
        index: ['parent'],
      },
      {
        title: 'director',
        i18n: '负责人',
        index: ['director'],
      },
      {
        title: 'description',
        i18n: '描述',
        index: ['description'],
      },
      {
        title: 'isRegion',
        i18n: '大区',
        index: ['isRegion'],
      },
      {
        title: 'order',
        i18n: '排序',
        index: ['order'],
      },
    ],
  },
  formSets: {
    query: {
      properties: {
        keyword: {
          type: 'string',
          title: '用户组名称',
          maxLength: 20,
          ui: {
            widget: 'autocomplete',
            debounceTime: 100,
            placeholder: '请输入用户组名称',
          },
        },
      },
    },
    add: addForm,
    edit: editForm,
  },
};
