
import React, { useState } from 'react';
import UserDetails from './UserDetails';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './UserList.css';

// Added deleteUser prop: function to remove a user by id

const UserList = ({ users, deleteUser, updateUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const navigate = useNavigate();

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setEditMode(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2em', maxWidth: 600, margin: '0 auto 1.5em auto', padding: '0 1em' }}>
        <h2 style={{ margin: 0 }}>User List</h2>
        <button className="button-add" onClick={() => navigate('/add-user')}>Add User</button>
      </div>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => handleUserClick(user)} style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
            <span>{user.name}</span>
            <div style={{ display: 'flex', gap: '0.5em', marginLeft: 'auto' }}>
              {/* Update button: stops event from bubbling to li click */}
            <button
              className="button-update"
              onClick={e => {
                e.stopPropagation();
                setSelectedUser(user);
                setEditMode(true);
              }}
            >Update</button>
            {/* Delete button: stops event from bubbling to li click */}
            <button
              className="button-delete"
              onClick={e => {
                e.stopPropagation();
                setDeleteTarget(user);
              }}
            >Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <UserDetails
          user={selectedUser}
          onClose={() => { setSelectedUser(null); setEditMode(false); }}
          editMode={editMode}
          onSave={updateUser}
        />
      )}

      {/* Delete confirmation modal */}
      {deleteTarget && ReactDOM.createPortal(
        <>
          <div className="modal-backdrop" onClick={() => setDeleteTarget(null)}></div>
          <div className="modal">
            <button style={{ float: 'right' }} onClick={() => setDeleteTarget(null)}>X</button>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete <b>{deleteTarget.name}</b>?</p>
            <div style={{ display: 'flex', gap: '1em', marginTop: '1em' }}>
              <button style={{ background: '#e74c3c', color: 'white', border: 'none', borderRadius: 4, padding: '0.3em 1em', cursor: 'pointer' }}
                onClick={() => {
                  deleteUser(deleteTarget.id);
                  setDeleteTarget(null);
                }}
              >Delete</button>
              <button style={{ background: '#bdc3c7', color: 'black', border: 'none', borderRadius: 4, padding: '0.3em 1em', cursor: 'pointer' }}
                onClick={() => setDeleteTarget(null)}
              >Cancel</button>
            </div>
          </div>
        </>,
        document.getElementById('modal-root')
      )}
    </div>
  );
};

export default UserList;