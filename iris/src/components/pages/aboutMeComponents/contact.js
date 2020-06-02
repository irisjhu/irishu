import React, { Component } from 'react';
import contactmegif from '../../../assets/files/contactme-c.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="split">
                    <div className="left">
                        <img src={contactmegif} alt='contact me decorative gif'></img>
                        <FontAwesomeIcon icon={faAngleDoubleRight} size="3x" />
                    </div>

                    <div className="right">
                        <span className="links">
                            <a href="https://www.linkedin.com/in/iris-j-hu/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                            </a>
                            <a href="https://github.com/irishu37" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="3x" />
                            </a>
                            <a href="mailto:ihu009@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;