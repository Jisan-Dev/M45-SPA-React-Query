// import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div>
      <h2>Showing Details for: {user.name} </h2>
    </div>
  );
};

// UserDetails.propTypes = {
//   user: PropTypes.object.isRequired,
// };

export default UserDetails;
