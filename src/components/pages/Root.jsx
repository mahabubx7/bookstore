import { Outlet } from 'react-router-dom';
import Header from '../Header';
import '../styles/page.scss';

const RootPage = () => (
  <>
    <Header />
    <div className="page">
      <Outlet />
    </div>
  </>
);

export default RootPage;
