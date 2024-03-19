import { Outlet } from 'react-router-dom';
import Header from '../header';

const Home = () => {
  return (
    <div>
      <Header />
      <h2 className="text-2xl text-bol">HOMEPAGE</h2>
      <Outlet />
    </div>
  );
};

export default Home;
