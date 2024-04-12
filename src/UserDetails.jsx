import React from 'react';
import { useSelector } from 'react-redux';

import './App.css'

function UserDetails() {

  const user = useSelector((state) => state.user);
  
  return (    
    
        <div>
          <h2>User Details</h2>
          <div className='card'>
            <img src={user.avatar_url} alt={user.name} />
            <p>Name: {user.name}</p>
            <p>Username: {user.login}</p>
            <p>Followers: {user.followers}</p>
            <p>Public Repos: {user.public_repos}</p>
          </div>
        </div>
  );
}

export default UserDetails;