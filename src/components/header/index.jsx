import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="mb-6">
        <span className="mr-8 text-emerald-600">My_Website</span>
        <Link className="text-indigo-400 mr-4" to="/">
          Home
        </Link>
        <Link className="text-indigo-400 mr-4" to="/about">
          About
        </Link>
        <Link className="text-indigo-400 mr-4" to="/contact">
          Contact Us
        </Link>
        <Link className="text-indigo-400 mr-4" to="/users">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Header;
