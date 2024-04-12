import React from 'react';
import { useSelector } from 'react-redux';
import UserSearch from './UserSearch';
import UserDetails from './UserDetails';

function App() {
  return (
    <div>
      <h1>Github User Search</h1>
      <UserSearch />
      <UserDetails />
    </div>
  );
}

export default App;