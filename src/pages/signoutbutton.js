import React from "react";
import { Auth } from "aws-amplify";
import { Button } from "@aws-amplify/ui-react";

function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      // Redirect or perform any other action after sign-out
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}

export default SignOutButton;
