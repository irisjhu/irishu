import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactGA from 'react-ga';

// components
import SwitchToggle from '../pages/common/switchToggle';

// styles
import 'hamburgers/dist/hamburgers.css';

function Hamburger() {
    return (
        <button class="hamburger hamburger--spin" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    );
}

class Header extends Component {
    componentDidMount() {
        // Look for .hamburger
        var hamburger = document.querySelector(".hamburger");

        hamburger.addEventListener("click", this.toggleMenuOpen);
    }

    toggleMenuOpen() {
        var hamburger = document.querySelector(".hamburger");
        var sidenav = document.querySelector(".sidenav");
        var body = document.querySelector("body");

        hamburger.classList.toggle("is-active");
        sidenav.classList.toggle("open");
        body.classList.toggle("no-scroll");
    }

    sendGA() {
        ReactGA.event({
            category: "File",
            action: "Resume clicked"
        });
    }

    render() {
        return (
            <header>
                <nav className="sidenav">
                    <div className="nav">
                        <Hamburger />
                        <div className="heading">
                            hi! i'm <span className="iris">iris.</span>
                        </div>
                        <div className="menu">
                            <NavLink
                                exact={true}
                                to={process.env.PUBLIC_URL + '/'}
                                activeClassName="active"
                                onClick={this.toggleMenuOpen}
                            >
                                about me
                            </NavLink>
                            <NavLink
                                to={process.env.PUBLIC_URL + '/experience'}
                                activeClassName="active"
                                onClick={this.toggleMenuOpen}
                            >
                                experience
                            </NavLink>
                            <NavLink
                                to={process.env.PUBLIC_URL + '/projects'}
                                activeClassName="active"
                                onClick={this.toggleMenuOpen}
                            >
                                projects
                            </NavLink>
                            <a
                                href={process.env.PUBLIC_URL + '/files/resume.pdf'}
                                onClick={this.sendGA}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                resume
                            </a>
                        </div>
                        <SwitchToggle changeTheme={this.props.changeTheme} />
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
