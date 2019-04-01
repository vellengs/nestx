
import React from 'react';
import { Dropdown } from 'antd';
import { DropDownProps } from 'antd/es/dropdown';
import classNames from 'classnames';
import styles from './index.less';

export interface HeaderDropdownProps extends DropDownProps {
  overlayClassName?: string;
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ overlayClassName, ...restProps }) => (
  <Dropdown overlayClassName={classNames(styles.container, overlayClassName)} {...restProps} />
);

export default HeaderDropdown;
