//Only signed in users will see this...
//1.
import React from 'react';
import { Amplify } from 'aws-amplify';
//2.
//import awsExports from './aws-exports';
//3.
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

//4.
//Amplify.configure(awsExports)

function Dashboard() {
 return(
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}. This is where our cotents go....</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
 )
}

export default Dashboard;
