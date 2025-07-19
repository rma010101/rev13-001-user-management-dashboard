import React, { useState } from 'react';

// Added props: addUser (function to add user), navigate (function to change route)
const AddUserForm = ({ addUser, navigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState('');

  // On submit, add user and navigate back to user list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) return; // Simple validation
    addUser({ name, email, phone, avatar }); // Call parent addUser function
    setName('');
    setEmail('');
    setPhone('');
    setAvatar('');
    navigate('/'); // Go back to user list page
  };

  return (
    <>
      <h2>Add New User</h2>
      {/* Controlled form for name and email */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div>
          <label>Avatar filename:</label>
          <input type="text" name="avatar" value={avatar} onChange={e => setAvatar(e.target.value)} placeholder="e.g. avatar1.png" />
        </div>
        <div style={{ display: 'flex', gap: '1em', marginTop: '1em', justifyContent: 'center' }}>
          <button type="submit">Add User</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </>
  );
};

export default AddUserForm;