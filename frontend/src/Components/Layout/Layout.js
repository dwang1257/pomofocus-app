import './Layout.css';
import Topbar from '../Topbar/Topbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <Topbar />
        <Outlet />
    </div>
  );
};

export default Layout;
