import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';

import contactmegif from '../../../assets/files/contactme-c.gif';
import contactmegifdark from '../../../assets/files/contactme-i.gif';

class Contact extends Component {
    render() {
        var gif = contactmegif;

        if(this.props.theme) {
            gif = contactmegifdark;
        }

        return (
            <div className="contact">
                <div className="split">
                    <div className="left">
                        <img src={gif} alt='contact me decorative gif'></img>
                        <FontAwesomeIcon icon={faAngleDoubleRight} size="3x" />
                    </div>

                    <div className="right">
                        <span className="links">
                            <ReactGA.OutboundLink
                                eventLabel="linkedin"
                                to="https://www.linkedin.com/in/iris-j-hu/"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                            </ReactGA.OutboundLink>
                            <ReactGA.OutboundLink
                                eventLabel="github"
                                to="https://github.com/irishu37"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faGithub} size="3x" />
                            </ReactGA.OutboundLink>
                            <ReactGA.OutboundLink
                                eventLabel="email"
                                to="mailto:ihu009@gmail.com"
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                            </ReactGA.OutboundLink>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;