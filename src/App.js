import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import Dashboard from './dashboard'

function App() {
  const isLoggedIn =window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Dashboard/>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              SocialHub
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Router>
  )
}

export default App;
