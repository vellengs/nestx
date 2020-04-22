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
        title: '编号',
        index: 'id',
        type: 'checkbox',
      },
      {
        title: 'name',
        i18n: '接口名称',
        index: ['name'],
      },
      {
        title: 'path',
        i18n: '接口标识',
        index: ['path'],
      },
      {
        title: '版本',
        index: ['version'],
      },
    ],
  },
  formSets: {
    query: {
      properties: {
        keyword: {
          type: 'string',
          title: '关键词',
          maxLength: 20,
          ui: {
            placeholder: '接口名称、标识',
            // asyncData: (input: string) => of(input ? [input, input + input, input + input + input] : [])
          },
        },
      },
    },
  },
};
