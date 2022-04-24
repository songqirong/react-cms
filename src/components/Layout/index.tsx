import React, { FC, useState } from 'react';
import { Header as MyHeader } from '../Header';
import { Footer as MyFooter } from '../Footer';
import { Routes } from '../Routes';
import { LayoutContainer } from '../LayoutContainer';
import { Nav } from '../Nav';
import { ConfigProvider, Select } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { Layout as ALayout } from 'antd';
import 'antd/dist/antd.min.css';
import 'src/common/modified.css';
import './index.scss';
import { background_list, ITheme } from 'src/common/constants';
const { Header, Content, Footer, Sider } = ALayout;
ConfigProvider.config({
  prefixCls: 'custom',
  theme: {
    primaryColor: '#ff0000',
  },
});
export const Layout: FC = (props) => {
  const { prefixCls } = useSelector((state: RootState) => state.theme);
  const [theme, setTheme] = useState<ITheme>('dark');
  const theme_change = (value: ITheme) => {
    setTheme(value);
  };
  return (
    <ConfigProvider prefixCls={prefixCls}>
      <ALayout hasSider className='layout_container'>
        <Sider className='sider' theme={theme} >
          <Nav theme={theme}/>
        </Sider>
        <ALayout className='layout_item'>
          <Header className={ `${theme} header` }>
            <MyHeader>
              <Select options={background_list} onChange={theme_change} style={{ width: '100%' }} />
            </MyHeader>
          </Header>
          <Content className='content'>
            <Routes />
          </Content>
          <Footer className='footer'>
            <MyFooter />
          </Footer>
        </ALayout>
      </ALayout>
    </ConfigProvider>
  );
};
