import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
                <Link to='/'>about me</Link>
                <Link to="/experience">experience</Link>
                <Link to="/projects">projects</Link>
            </nav>
        </header>
    );
  }
}

export default Header;
