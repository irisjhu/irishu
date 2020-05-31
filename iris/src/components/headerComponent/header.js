import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render () {
    return (
        <header>
            <nav className="sidenav">
                <div className="heading">
                    <h4>
                        hi! i'm
                    </h4>
                    <h1>
                        iris.
                    </h1>
                </div>
                <NavLink exact={true} to={process.env.PUBLIC_URL + '/'} activeClassName="active">about me</NavLink>
                <NavLink to={process.env.PUBLIC_URL + '/experience'} activeClassName="active">experience</NavLink>
                <NavLink to={process.env.PUBLIC_URL + '/projects'} activeClassName="active">projects</NavLink>
            </nav>
        </header>
    );
  }
}

export default Header;
