import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

const Home = () => {
  const location = useLocation();
  console.log(location);
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      {navigation.state === 'loading' ? <p>LOADING....</p> : <Outlet />}
      <Footer />
    </div>
  );
};

export default Home;
