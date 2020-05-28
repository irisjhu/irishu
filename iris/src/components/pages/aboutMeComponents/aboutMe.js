import React, { Component } from 'react';

// components
import Info from './info';
import About from './about';
import Contact from './contact';

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutme">
                <div className="split">
                    <div className="left">
                        <Info />
                    </div>

                    <div className="right">
                        <div className="aboutcontact">
                            <About />

                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
