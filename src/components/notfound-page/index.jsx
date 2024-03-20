import { Link, useRouteError } from 'react-router-dom';

const NotFoundPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!!</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p>{error.statusText}</p>
      <Link to={'/'}>
        <button className="rounded-lg px-5 py-2 text-sm bg-[#1a1a1a] cursor-pointer border border-lime-300 border-opacity-40 mt-2">Return to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
