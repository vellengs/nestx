import {
  Appearance,
  SchemaTypes as t,
  WidgetTypes as w,
  FormDefine,
  SFSchema,
} from 'nestx-common';
import { cloneDeep } from 'lodash';

const addForm: SFSchema = {
  title: '新建字典',
  properties: {
    category: {
      title: '字典分类',
      type: t.string,
      ui: {
        widget: w.dict,
        category: 'category',
      },
    },
    name: {
      title: '字典键',
      type: 'string',
      maxLength: 30,
      ui: {
        placeholder: '请输入字典名称',
      },
    },
    translate: {
      title: '名称',
      type: t.string,
    },
    expand: {
      title: '拓展数据',
      type: t.string,
      ui: {
        widget: w.textarea,
      },
    },
  },
  required: ['name', 'category', 'translate'],
  ui: {
    spanLabelFixed: 100,
    grid: {
      span: 8,
    },
  },
};

const editForm = cloneDeep(addForm);
editForm.title = '编辑字典';

export const appearance: Appearance = {
  columnSets: {
    default: [
      {
        title: 'category',
        i18n: '字典分类',
        index: ['category'],
      },
      {
        title: 'name',
        i18n: '字典键',
        index: ['name'],
      },
      {
        title: 'translate',
        i18n: '值',
        index: ['translate'],
      },
    ],
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
            placeholder: '请输入字典名称',
          },
        },
      },
    },
    add: addForm,
    edit: editForm,
  },
};
