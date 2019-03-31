import React from 'react';
import { Drawer } from 'antd';
import SiderMenu from './SiderMenu';
import { SiderMenuProps } from "./SiderMenuProps";
import { getFlatMenuKeys } from './SiderMenuUtils';
export { MenuDataItem } from './MenuDataItem';
export { SiderMenuProps } from './SiderMenuProps';

const SiderMenuWrapper: React.FC<SiderMenuProps> = props => {
  const { isMobile, menuData, collapsed, onCollapse } = props;
  const flatMenuKeys = getFlatMenuKeys(menuData);
  return isMobile ? (
    <Drawer
      visible={!collapsed}
      placement="left"
      onClose={() => onCollapse!(true)}
      style={{
        padding: 0,
        height: '100vh',
      }}
    >
      <SiderMenu {...props} flatMenuKeys={flatMenuKeys} collapsed={isMobile ? false : collapsed} />
    </Drawer>
  ) : (
      <SiderMenu {...props} flatMenuKeys={flatMenuKeys} />
    );
};

SiderMenuWrapper.defaultProps = {
  onCollapse: () => void 0,
};

export default React.memo(SiderMenuWrapper);
