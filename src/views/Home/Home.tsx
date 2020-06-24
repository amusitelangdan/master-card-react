import React from 'react';
import './Home.less';
import { Layout, Menu } from 'antd';
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
import { renderRoutes } from 'react-router-config'

const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        console.log(renderRoutes(this.props.route.routes));
        console.log(this.props.route.routes);
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                    id="components-layout-demo-fixed-sider"
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>nav 1</Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>nav 2</Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>nav 3</Menu.Item>
                        <Menu.Item key="4" icon={<BarChartOutlined />}>nav 4</Menu.Item>
                        <Menu.Item key="5" icon={<CloudOutlined />}>nav 5</Menu.Item>
                        <Menu.Item key="6" icon={<AppstoreOutlined />}>nav 6</Menu.Item>
                        <Menu.Item key="7" icon={<TeamOutlined />}>nav 7</Menu.Item>
                        <Menu.Item key="8" icon={<ShopOutlined />}>nav 8</Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <div className="layout-content">
                        <Header className="site-layout-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                                {renderRoutes(this.props.route.children)}
                            </div>
                        </Content>
                    </div>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Home;
