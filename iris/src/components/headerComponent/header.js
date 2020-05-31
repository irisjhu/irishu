import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'hamburgers/dist/hamburgers.css';

class Header extends Component {
    componentDidMount() {
        // Look for .hamburger
        var hamburger = document.querySelector(".hamburger");
        var nav = document.querySelector(".nav");
        var body = document.querySelector("body");
        // On click
        hamburger.addEventListener("click", function () {
            // Toggle class "is-active"
            hamburger.classList.toggle("is-active");
            nav.classList.toggle("open");
            body.classList.toggle("noScroll");
        });
    }

    render() {
        return (
            <header>
                <nav className="sidenav">
                    <div className="nav">
                        <button class="hamburger hamburger--spin" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                        <div className="heading">
                            hi! i'm <span className="iris">iris.</span>
                        </div>
                        <div className="menu">
                            <NavLink exact={true} to={process.env.PUBLIC_URL + '/'} activeClassName="active">about me</NavLink>
                            <NavLink to={process.env.PUBLIC_URL + '/experience'} activeClassName="active">experience</NavLink>
                            <NavLink to={process.env.PUBLIC_URL + '/projects'} activeClassName="active">projects</NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
