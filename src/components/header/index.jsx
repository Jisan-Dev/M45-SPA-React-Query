import { Link, NavLink } from 'react-router-dom';

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

        {/*NavLink gives us a className "active" over the element when the particular link is active */}
        <NavLink className="text-indigo-400 mr-4" to="/contact">
          Contact Us
        </NavLink>
        <NavLink to="/users" className="text-indigo-400 mr-4">
          Users
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
