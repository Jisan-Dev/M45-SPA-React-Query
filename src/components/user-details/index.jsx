// import PropTypes from 'prop-types';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

  const returnOneStepHandler = () => {
    navigate(-1);
  };
  const returnHomeHandler = () => {
    navigate('/');
    // we can also put dynamic routes using useNavigate instead of wrapping buttons that hits a dynamic path, in a <Link> tag like [" navigate(`users/${user.id}`) "]{ref:User component}
  };

  return (
    <div>
      <h2>
        name: <span className="text-indigo-500 text-xl underline">{user.name}</span>
      </h2>
      <p>
        email: <span className="text-indigo-500">{user.email}</span>
      </p>
      <p>
        email: <span className="text-indigo-500">{user.email}</span>
      </p>
      <p>
        contact: <span className="text-indigo-500">{user.phone}</span>
      </p>
      <p>
        company: <span className="text-indigo-500">{user.company.name}</span>
      </p>
      <p>
        website: <span className="text-indigo-500">{user.website}</span>
      </p>
      <div>
        <button onClick={returnOneStepHandler} className="rounded-lg px-5 py-2 text-sm bg-[#1a1a1a] cursor-pointer border border-lime-300 border-opacity-40">
          Return to Users
        </button>
        <button onClick={returnHomeHandler} className="rounded-lg px-5 py-2 text-sm bg-[#1a1a1a] cursor-pointer border border-lime-300 border-opacity-40">
          Return to Home
        </button>
        {/* <button onClick={()=> navigate('/')} className="rounded-lg px-5 py-2 text-sm bg-[#1a1a1a] cursor-pointer border border-lime-300 border-opacity-40">
          Return to Home
        </button> */}
      </div>
    </div>
  );
};

export default UserDetails;
