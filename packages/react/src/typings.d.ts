declare let APP_TYPE: string;
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'rc-animate';
declare module 'omit.js';
declare module 'react-copy-to-clipboard';
declare module 'nzh/cn';
declare module 'slash2';
declare module 'antd-pro-merge-less';
declare module 'antd-theme-webpack-plugin';
declare module 'ant-design-pro' {
  import React from 'react';
  import { NoticeIconProps } from 'ant-design-pro/lib/NoticeIcon';
  import { NoticeIconTabProps } from 'ant-design-pro/lib/NoticeIcon/NoticeIconTab';

  type PartialNoticeIconProps = {
    [K in Exclude<keyof NoticeIconProps, 'locale'>]?: NoticeIconProps[K]
  };
  interface MixinNoticeIconProps extends PartialNoticeIconProps {
    locale?: {
      emptyText: string;
      clear: string;
      viewMore: string;
      [key: string]: string;
    };
    onViewMore?: (tabProps: NoticeIconProps) => void;
  }
  interface MixinNoticeIconTabProps extends Partial<NoticeIconTabProps> {
    showViewMore?: boolean;
  }
  class NoticeIconTab extends React.Component<MixinNoticeIconTabProps, any> {}
  export class NoticeIcon extends React.Component<MixinNoticeIconProps, any> {
    public static Tab: typeof NoticeIconTab;
  }
  export * from 'ant-design-pro/lib';
}
