import { useLoaderData } from 'react-router-dom';
import User from '../user';

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2 className="text-2xl text-bol">USERS: {users.length}</h2>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
