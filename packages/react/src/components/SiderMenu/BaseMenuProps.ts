import { MenuMode, MenuTheme } from 'antd/es/menu';
import React from 'react';
import { MenuDataItem } from './MenuDataItem';
export interface BaseMenuProps {
  className?: string;
  collapsed?: boolean;
  flatMenuKeys?: any[];
  handleOpenChange?: (openKeys: string[]) => void;
  isMobile?: boolean;
  location?: Location;
  menuData?: MenuDataItem[];
  mode?: MenuMode;
  onCollapse?: (collapsed: boolean) => void;
  onOpenChange?: (openKeys: string[]) => void;
  openKeys?: string[];
  style?: React.CSSProperties;
  theme?: MenuTheme;
}
