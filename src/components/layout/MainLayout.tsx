import { Layout} from 'antd';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Sidebar/>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Programming Hero University ©{new Date().getFullYear()} Created by MD. HASAN MIA
                </Footer>
            </Layout>
        </Layout>
    )
}

export default MainLayout