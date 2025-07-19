

import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import UserList from './components/UserList';
import './App.css';

const AddUserForm = lazy(() => import('./components/AddUserForm'));


function App() {
  const [users, setUsers] = useState([]);
  const [deletedUser, setDeletedUser] = useState(null);
  const navigate = useNavigate();

  // Fetch initial users from API only once
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const addUser = (user) => {
    setUsers(prev => [
      { ...user, id: Date.now() },
      ...prev
    ]);
  };

  // Delete user by id
  const deleteUser = (id) => {
    setUsers(prev => {
      const userToDelete = prev.find(user => user.id === id);
      if (userToDelete) setDeletedUser(userToDelete);
      return prev.filter(user => user.id !== id);
    });
  };

  // Show alert after deletion
  useEffect(() => {
    if (deletedUser) {
      alert(`User deleted: ${deletedUser.name}`);
      setDeletedUser(null);
    }
  }, [deletedUser]);

  // Update user by id
  const updateUser = (updatedUser) => {
    setUsers(prev => prev.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  return (
    <div className="App">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: 800, margin: '2em auto 1.5em auto', padding: '0 1em' }}>
        <h1 style={{ margin: 0 }}>User Management Dashboard</h1>
      </div>
      <Suspense fallback={<LoadingSpinner />}> 
        <Routes>
          <Route path="/add-user" element={<AddUserForm addUser={addUser} navigate={navigate} />} />
          {/* Pass deleteUser and updateUser as props to UserList */}
          <Route path="/" element={<UserList users={users} deleteUser={deleteUser} updateUser={updateUser} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;