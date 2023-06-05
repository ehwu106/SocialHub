
// import React from 'react';
// import Dashboard from './dashboard';
// import "./login.css";
// import "./dashboard.css";
// import { Amplify } from 'aws-amplify';
// //2.
// import awsExports from '../aws-exports';
// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// import "./dashboard.css";

// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// Amplify.configure(awsExports)
// function Login() {
//     return (
//         <div className="login">
//             <header className="login-header">
//                 <Authenticator>
//                     {({ signOut, user }) => (
//                         <Router>
//                             <Routes>
//                                 <Route exact path="/dashboard" Component={Dashboard}></Route>
//                             </Routes>
//                         </Router>
//                     )}
//                 </Authenticator>
//             </header>
//         </div>
//     )

// }

// export default Login;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import logo from "../logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import MainDashboard from "./dashboard";

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function Login({ signOut }) {
  return (
    <View className="App">
        <MainDashboard />
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(Login);










// import logo from "../logo.svg";
// import "@aws-amplify/ui-react/styles.css";
// import {
//   withAuthenticator,
//   Button,
//   Heading,
//   Image,
//   View,
//   Card,
// } from "@aws-amplify/ui-react";
// import MainDashboard from "./dashboard";
// import AppLayout from "./applayout";


// function Login({ signOut }) {
//   return (
//     <AppLayout signOut={signOut}>
//       <MainDashboard />
//     </AppLayout>
//   );
// }

// export default withAuthenticator(Login);



