import {
  Appearance,
  SchemaTypes as t,
  WidgetTypes as w,
  FormDefine,
  SFSchema,
} from 'nestx-common';
import { cloneDeep } from 'lodash';

const profile: SFSchema = {
  title: '个人信息',
  properties: {
    avatar: {
      title: '头像',
      type: t.string,
      ui: {
        widget: w.avatar,
        fileType: 'image/png,image/jpeg,image/gif,image/bmp',
        listType: 'picture-card',
        action: 'api/media/upload',
        limit: 1,
        name: 'file',
        grid: {
          span: 24,
        },
      },
    },
    avatar2: {
      title: '头像',
      type: t.string,
    },
    name: {
      title: '昵称',
      type: t.string,
    },
    email: {
      title: '邮箱',
      type: t.string,
    },
    mobile: {
      title: '手机',
      pattern: '^1[0-9]{10}$',
      type: t.string,
    },
    siteUrl: {
      title: '网址',
      type: t.string,
      ui: {
        grid: {
          span: 12,
        },
      },
    },
    company: {
      title: '公司名称',
      type: t.string,
      ui: {
        grid: {
          span: 12,
        },
      },
    },
    address: {
      title: '地址',
      type: t.string,
      ui: {
        grid: {
          span: 24,
        },
      },
    },
  },
  required: ['name', 'email', 'mobile'],
  ui: {
    widget: w.tabs,
    spanLabelFixed: 100,
    grid: {
      span: 8,
    },
    tabs: [
      {
        title: '基本信息',
        fields: ['avatar', 'name'],
      },
      {
        title: '联系信息',
        fields: ['email', 'mobile', 'siteUrl', 'company', 'address'],
      },
    ],
  },
};

const sysSetting: SFSchema = {
  title: '系统设置',
  properties: {
    name: {
      title: '系统名称',
      type: t.string,
    },
    logo: {
      title: '系统标志',
      type: t.string,
      description: '尺寸大小 120x30',
      ui: {
        widget: w.avatar,
        fileType: 'image/png,image/jpeg,image/gif,image/bmp',
        listType: 'picture-card',
        action: 'api/media/upload',
        limit: 1,
        name: 'file',
        grid: {
          span: 24,
        },
      },
    },
    logoFull: {
      title: '系统完整标志',
      type: t.string,
      ui: {
        widget: w.avatar,
        fileType: 'image/png,image/jpeg,image/gif,image/bmp',
        listType: 'picture-card',
        action: 'api/media/upload',
        limit: 1,
        name: 'file',
        grid: {
          span: 24,
        },
      },
    },
    logoFullColor: {
      title: '系统彩色标志',
      type: t.string,
      ui: {
        widget: w.avatar,
        fileType: 'image/png,image/jpeg,image/gif,image/bmp',
        listType: 'picture-card',
        action: 'api/media/upload',
        limit: 1,
        name: 'file',
        grid: {
          span: 24,
        },
      },
    },
  },
  ui: {
    spanLabelFixed: 100,
    grid: {
      span: 12,
    },
  },
};

export const appearance: Appearance = {
  columnSets: {},
  formSets: {
    profile: profile,
    sysSetting: sysSetting,
  },
};
