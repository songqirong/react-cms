import React, { FC } from 'react';
import { LayoutContainer } from '../LayoutContainer';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ITheme } from 'src/common/constants';

interface IProps{
  theme: ITheme
}
export const Nav: FC<IProps> = (props) => (
  <LayoutContainer role='nav' Tag='nav'>
    <Menu theme={props.theme} mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item key="1" icon={<UserOutlined />} >
        <Link to={'test'}>test</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link to={''}>home</Link>
      </Menu.Item>
    </Menu>
  </LayoutContainer>
);
