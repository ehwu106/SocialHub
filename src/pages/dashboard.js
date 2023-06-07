
import React, { useState, useEffect } from 'react';
import './dashboard.css';
//import { NavLink, Link } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  //Button,
  //Heading,
  //Image,
  //View,
  //Card,
} from "@aws-amplify/ui-react";
import Youtube from './youtube';
import SignOutButton from './signoutbutton';
import Facebook from './facebook';

//import { Auth } from 'aws-amplify';

const MainDashboard = (props) => {
  const [userState, setUserState] = useState(null);
  const [dashboardState, setDashboardState] = useState('dashboard');

  var sidebarOpen = false;
  const sidebar = document.getElementById("sidebar");

  function openSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar-responsive");
      sidebarOpen = true;
    }
  }
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar-responsive");
      sidebarOpen = false;
    }
  }

  useEffect(() => {
    if (userState) {
      openSidebar();
    } else {
      closeSidebar();
    }
  }, [userState]);

  function fbInit() {
    window.fbAsyncInit = () => {
      window.FB.init({
          appId            : '639014718039079',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v16.0'
      });
    };
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        js.crossorigin="anonymous";
        fjs.parentNode.insertBefore(js, fjs);
        console.log("adding fb ele")
    }(document, 'script', 'facebook-jssdk'));
  }

  useEffect(() => {
    fbInit();
  }, [])
  function handleSidebarClick(mode) {
    setDashboardState(mode);
  }
  return (
    <div>
      <div className="grid-container">
        <header className="header">
          <div className="menu-icon" onClick={openSidebar}>
            <span className="material-icons-outlined">menu</span>
          </div>
          <div className="header-left">
            <span className="material-icons-outlined">search</span>
          </div>
          <div className="header-right">
            
            <SignOutButton />
            {/*<span className="material-icons-outlined">settings</span>
            <span className="material-icons-outlined">account_circle</span>*/}
          </div>
        </header>

        <aside id="sidebar">
          <div className="sidebar-title">
            <div className="sidebar-brand">
              <span className="material-icons-outlined">dashboard</span>SocialHub
            </div>
            <span className="material-icons-outlined" onClick={closeSidebar}>close</span>
          </div>

          <ul className="sidebar-list">
            <style>{`a { text-decoration: none; }`}</style>
            <div onClick={() => {handleSidebarClick('dashboard')}}>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">home</span>Dashboard
              </li>
            </div>

            <div onClick={() => {handleSidebarClick('youtube')}}>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">label_important</span>
                YouTube
              </li>
            </div>

            <div onClick={() => {handleSidebarClick('facebook')}}>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">label_important</span>
                Facebook
              </li>
            </div>
          </ul>
        </aside>


        <main className="main-container">
          {dashboardState === 'dashboard' && <div>
            <div className="main-title">
              <p className="font-weight-bold">DASHBOARD</p>
            </div>
            
            {/*<div className="main-cards">
              <div className="card">
                <div className="card-inner">
                  <p className="text-primary">FOLLOWERS COMBINED</p>
                  <span className="material-icons-outlined text-blue">groups</span>
                </div>
                <span className="text-primary font-weight-bold">10347</span>
              </div>

              <div className="card">
                <div className="card-inner">
                  <p className="text-primary">VIEWS COMBINED</p>
                  <span className="material-icons-outlined text-blue">movie</span>
                </div>
                <span className="text-primary font-weight-bold">2340000</span>
              </div>

              <div className="card">
                <div className="card-inner">
                  <p className="text-primary">LIKES COMBINED</p>
                  <span className="material-icons-outlined text-blue">thumb_up</span>
                </div>
                <span className="text-primary font-weight-bold">4840000</span>
              </div>
            </div>*/}
            </div>
          }
          {dashboardState === 'youtube' && <Youtube />}
          {dashboardState === 'facebook' && <Facebook />}
        </main>
      </div>
    </div>
  );
}
export default withAuthenticator(MainDashboard);