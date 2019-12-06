import React, { useEffect, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users, getAllUsers } = githubContext;

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="users-grid">
      {users.map(user => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;
