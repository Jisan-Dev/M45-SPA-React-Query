import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
