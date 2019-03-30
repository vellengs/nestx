import * as React from 'react';
export interface PageHeaderProps {
  title?: React.ReactNode | string;
  logo?: React.ReactNode | string;
  action?: React.ReactNode | string;
  content?: React.ReactNode;
  extraContent?: React.ReactNode;
  routes?: any[];
  params?: any;
  breadcrumbList?: { title: React.ReactNode; href?: string }[];
  tabList?: { key: string; tab: React.ReactNode }[];
  tabActiveKey?: string;
  tabDefaultActiveKey?: string;
  onTabChange?: (key: string) => void;
  tabBarExtraContent?: React.ReactNode;
  linkElement?: React.ReactNode;
  style?: React.CSSProperties;
  home?: React.ReactNode;
  wide?: boolean;
  hiddenBreadcrumb?: boolean;
}
export default class PageHeader extends React.Component<PageHeaderProps, any> {}