import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Landing from "./pages/landing"
import Youtube from "./pages/youtube"
import MainDashboard from "./pages/dashboard"
import Facebook from './pages/facebook'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return <div>
    <Router>
      <Routes>
        <Route exact path="/" Component={Landing}></Route>
        <Route exact path="/dashboard_yt" Component={Youtube}></Route>
        <Route exact path="/MainDashboard" Component={MainDashboard}></Route>
        <Route exact path="/dashboard_fb" Component={Facebook}></Route>
       </Routes>
    </Router>
  </div>
}

export default App;


