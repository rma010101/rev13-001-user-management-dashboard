// Portal component for User Details modal

import ReactDOM from 'react-dom';
import React, { useState } from 'react';

const UserDetails = ({ user, onClose, editMode = false, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [avatar, setAvatar] = useState(user.avatar || '');
  const [isEditing, setIsEditing] = useState(editMode);

  const handleSave = () => {
    if (onSave) {
      onSave({ ...user, name, email, phone, avatar });
    }
    setIsEditing(false);
    onClose();
  };

  const handleCancel = () => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setAvatar(user.avatar || '');
    setIsEditing(false);
    onClose();
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal">
        <button style={{ float: 'right' }} onClick={onClose}>X</button>
        {isEditing ? (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5em' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <img
                src={avatar ? `/${avatar}` : '/default-avatar.png'}
                alt="avatar"
                style={{ width: 80, height: 80, borderRadius: '50%', margin: 0, display: 'block' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                value={avatar}
                onChange={e => setAvatar(e.target.value)}
                style={{ fontSize: '1em', width: '100%', marginBottom: '1em' }}
                placeholder="Avatar filename (e.g. avatar1.png)"
              />
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ fontSize: '1.5em', width: '100%', marginBottom: '1em' }}
                placeholder="Name"
              />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ fontSize: '1em', width: '100%', marginBottom: '1em' }}
                placeholder="Email"
              />
              <input
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                style={{ fontSize: '1em', width: '100%', marginBottom: '1em' }}
                placeholder="Phone"
              />
              <div style={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
                <button style={{ background: '#27ae60', color: 'white', border: 'none', borderRadius: 4, padding: '0.3em 1em', cursor: 'pointer' }} onClick={handleSave}>Save</button>
                <button style={{ background: '#bdc3c7', color: 'black', border: 'none', borderRadius: 4, padding: '0.3em 1em', cursor: 'pointer' }} onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5em' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <img
                src={user.avatar ? `/${user.avatar}` : '/default-avatar.png'}
                alt="avatar"
                style={{ width: 80, height: 80, borderRadius: '50%', margin: 0, display: 'block' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <button onClick={() => alert(`More details about ${user.name} coming soon!`)}>More Info</button>
            </div>
          </div>
        )}
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default UserDetails;