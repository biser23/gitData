import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/userSlice';

function UserSearch() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(username));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default UserSearch;