import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2 className="text-2xl text-bol">USERS: {users.length}</h2>
      <p className="max-w-lg mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas voluptates inventore fuga, tenetur expedita laborum error beatae quas ad impedit.
      </p>
    </div>
  );
};

export default Users;
