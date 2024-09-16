import { Button, Layout} from 'antd';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <Layout style={{height: "100vh"}}>
            <Sidebar/>
            <Layout>
                <Header>
                    <Button onClick={handleLogout}>Logout</Button>
                </Header>
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