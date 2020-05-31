import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="sidenav">
                    <div className="nav">
                        <div className="heading">
                            hi! i'm <span className="iris">iris.</span>
                        </div>
                        <NavLink exact={true} to={process.env.PUBLIC_URL + '/'} activeClassName="active">about me</NavLink>
                        <NavLink to={process.env.PUBLIC_URL + '/experience'} activeClassName="active">experience</NavLink>
                        <NavLink to={process.env.PUBLIC_URL + '/projects'} activeClassName="active">projects</NavLink>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
