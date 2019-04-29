import {
  Appearance,
  SchemaTypes as t,
  WidgetTypes as w,
  FormDefine,
  SFSchema,
} from 'nestx-common';
import { cloneDeep } from 'lodash';

export const appearance: Appearance = {
  columnSets: {
    default: [
      {
        title: 'name',
        i18n: '日志名称',
        index: ['name'],
      },
      {
        title: 'operator',
        i18n: '操作人',
        index: ['operator'],
      },
      {
        title: 'operation',
        i18n: '操作',
        index: ['operation'],
      },
      {
        title: 'ip',
        i18n: '操作IP',
        index: ['ip'],
      },
      {
        title: 'result',
        i18n: '操作结果',
        type: 'boolean',
        index: ['result'],
      },
      {
        title: 'createAt',
        i18n: '日期',
        type: 'date',
        index: ['createdAt'],
      },
      {
        title: 'comment',
        i18n: '备注',
        index: ['comment'],
      },
    ],
  },
  formSets: {
    query: {
      properties: {
        keyword: {
          type: 'string',
          title: '日志关键词',
          maxLength: 20,
          ui: {
            widget: 'autocomplete',
            debounceTime: 100,
            placeholder: '请输入日志关键词',
          },
        },
        dateRange: {
          type: 'string',
          title: '日期范围',
          ui: {
            widget: w.date,
            mode: 'range',
          },
        },
      },
    },
  },
};
