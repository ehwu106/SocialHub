import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import Dashboard from './dashboard'

function App() {
  // const isLoggedIn =window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Dashboard />
        </header>
      </div>
    </Router>
  )
}

export default App;
