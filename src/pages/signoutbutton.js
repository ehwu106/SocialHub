import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await Auth.signOut();
    navigate('/');
  };

  return (
    <button onClick={handleSignOut} className="btn btn-primary">
      Sign Out
    </button>
  );
};

export default SignOutButton;

