import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="border border-lime-300 p-12 rounded-xl flex flex-col gap-4">
      <div className="grow">
        <h2 className="text-2xl text-bol">{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
      <div>
        <button className="rounded-lg px-5 py-2 text-base bg-[#1a1a1a] cursor-pointer border border-lime-300 border-opacity-40">
          <Link to={`/users/${id}`}> Show Details </Link>
        </button>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
