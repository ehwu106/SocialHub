import React from 'react';
import pic from './images/pic.svg';
import "./landing.css";
import {Link} from 'react-router-dom';

class Landing extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="navbar__container">
                        <a href="#top" id="navbar__logo">SocialHub</a>
                        <div className="navbar__toggle" id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        </div>
                        <ul className="navbar__menu">
                        <li className="navbar__item">
                            <a href="#top" className="navbar__links"> Home </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#about" className="navbar__links"> About</a>
                        </li>
                        <li className="navbar__item">
                            <a href="#help" className="navbar__links">Help</a>
                        </li>
                        <li className="navbar__btn">
                            <Link to="/MainDashboard" className="button"> Sign Up </Link>
                        </li>
                        </ul>
                    </div>
                </nav>

                <div id = "top" className="main">
                    <div className="main__container">
                            <div className="main__content">
                            <h1>ORGANIZED ANALYTICS</h1>
                            <h2>MADE EASY</h2>
                            <p>Try it yourself</p>
                            <button className="main__btn"><a href="/">Get Started</a></button>
                            </div>
                            <div className="main__img--container">
                            <img src={pic} alt="pic" id="main__img" />
                        </div>
                    </div>
                </div>

                <div id="about">
                    <h2>About Us!</h2>
                    <p>Welcome to Social Hub! We are a dedicated team passionate about simplifying your social media experience. Our mission is to provide you with a convenient platform to view and manage your social media analytics in one place. With real-time data and intuitive tools, we help you make informed decisions to enhance your online presence. Join us on this journey and unlock the full potential of your social media strategies.</p>

                    <p className = "team">  The Social Hub Team:</p>
                    <p >Saul Droutman</p>
                    <p>Mykyta Teterin</p>
                    <p>Inan</p>
                    <p>Howard</p>
                    <p>Adithya</p>
                </div>
                <div id="help">
                    <h2>FAQ</h2>
                    <div className = "QA">
                    <strong>Q: How does Social Hub work?</strong>
                    <p>
                        A: Social Hub is a web application that integrates with various social media platforms. It allows you to view and manage your social media analytics, and gain insights into your performance. Simply connect your social media accounts and explore the intuitive interface to streamline your social media management.
                    </p>

                    <strong>Q: Which social media platforms does Social Hub support?</strong>
                    <p>
                        A: Social Hub supports popular social media platforms like Youtube, Facebook, and more to come. You can connect multiple accounts from these platforms to monitor and analyze your social media presence across various channels.
                    </p>

                    <strong> Q: Can I schedule posts across multiple platforms?</strong>
                    <p>
                        A: Not currently, but we at Social Hub  plan to offer a post scheduling feature that allows you to plan and schedule your content in advance. You can select the platforms, choose the date and time, and efficiently manage your social media publishing strategy.
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;