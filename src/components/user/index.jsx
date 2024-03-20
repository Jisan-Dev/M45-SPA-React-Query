import PropTypes from 'prop-types';

const User = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div className="space-y-2 border border-lime-300 p-12 rounded-xl">
      <h2 className="text-2xl text-bol">{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
