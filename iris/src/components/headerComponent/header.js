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
                <Link to="/irishu/">about me</Link>
                <Link to="/irishu/experience">experience</Link>
                <Link to="/irishu/projects">projects</Link>
            </nav>
        </header>
    );
  }
}

export default Header;
