import {
  Appearance,
  SchemaTypes as t,
  WidgetTypes as w,
  FormDefine,
  SFSchema,
} from 'nestx-common';
import { cloneDeep } from 'lodash';

const addForm: SFSchema = {
  title: '新建小部件',
  properties: {
    title: {
      title: '标题',
      type: t.string,
      ui: {
        grid: {
          span: 16,
        },
      },
    },
    name: {
      title: '名称',
      type: t.string,
    },
    type: {
      title: '类型',
      type: t.string,
    },
    params: {
      title: '配置参数',
      type: t.string,
      ui: {
        widget: w.textarea,
        grid: {
          span: 24,
        },
      },
    },
  },
  required: ['name', 'title', 'type'],
  ui: {
    spanLabelFixed: 100,
    grid: {
      span: 8,
    },
  },
};

const editForm = cloneDeep(addForm);
editForm.title = '编辑文章';
editForm.required = ['username'];
editForm.properties.secret = {
  title: '密保',
  type: t.string,
};

export const appearance: Appearance = {
  columnSets: {
    default: [
      {
        title: '名称',
        index: 'name',
        type: 'link',
        action: 'edit',
      },
      {
        title: '标题',
        index: 'title',
      },
      {
        title: '类型',
        index: 'title',
      },
    ],
  },
  formSets: {
    query: {
      properties: {
        name: {
          title: '名称',
          type: t.string,
          maxLength: 30,
          ui: {
            placeholder: '请输入文章名称',
          },
        },
      },
    },
    add: addForm,
    edit: editForm,
  },
};
