import React from 'react';
import pic from './images/pic.svg';
import "../App.css";
import {NavLink, Link} from "react-router-dom";
// import {Link} from "reaact-router-dom";

class Landing extends React.Component {
    render() {
        return (
            <main>
                <nav class="navbar">
                    <div class="navbar__container">
                        <a href="/" id="navbar__logo">SocialHub</a>
                        <div class="navbar__toggle" id="mobile-menu">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                        <ul class="navbar__menu">
                            <li class="navbar__item">
                                <Link to="/" class="navbar__links"> Home </Link>
                            </li>
                            <li class="navbar__item">
                                <Link to="/maindashboard" class="navbar__links"> Help</Link>
                            </li>
                            <li class="navbar__item">
                                <a href="/" class="navbar__links">About</a>
                            </li>
                            <li class="navbar__btn">
                                <Link to="/MainDashboard" class="button"> Sign Up </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div class="main">
                    <div class="main__container">
                        <div class="main__content">
                            <h1>ORGANIZED ANALYTICS</h1>
                            <h2>MADE EASY</h2>
                            <p>Try it yourself</p>
                            <button class="main__btn"><Link to="/login">Get Started</Link></button>
                        </div>
                        <div class="main__img--container">
                            <img src={pic} alt="pic" id="main__img" />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
export default Landing;