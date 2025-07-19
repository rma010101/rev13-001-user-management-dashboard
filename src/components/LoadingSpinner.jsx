import React from 'react';
import reactLogo from '../assets/react.svg'; // Make sure this path is correct and the logo exists
import './LoadingSpinner.css'; // For spinner animation styles

const LoadingSpinner = () => {
  console.log('LoadingSpinner rendered');
  return (
    <div className="spinner">
      <img src={reactLogo} className="spinner-logo" alt="React logo spinning" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;