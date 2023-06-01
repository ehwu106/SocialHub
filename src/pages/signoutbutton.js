// import React from "react";
// import { Auth } from "aws-amplify";
// import { Button } from "@aws-amplify/ui-react";

// function SignOutButton() {
//   const handleSignOut = async () => {
//     try {
//       await Auth.signOut();
//       // Redirect or perform any other action after sign-out
//     } catch (error) {
//       console.log("Error signing out:", error);
//     }
//   };

//   return <Button onClick={handleSignOut}>Sign Out</Button>;
// }

// export default SignOutButton;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await Auth.signOut();
    navigate('/'); // Replace "/" with the desired destination page
  };

  return (
    <button onClick={handleSignOut} className="btn btn-primary">
      Sign Out
    </button>
  );
};

export default SignOutButton;

