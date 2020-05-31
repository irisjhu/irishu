import React, { Component } from 'react';
import linkedin from '../../../assets/files/linkedin.png';
import github from '../../../assets/files/github.png';
import contactmegif from '../../../assets/files/contactme-r.gif';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="split">
                    <div className="left">
                    <img src={contactmegif} alt='contact me decorative gif'></img>
                    </div>

                    <div className="right">
                        
                        <a href="mailto:ihu009@gmail.com">ihu009@gmail.com</a><br></br>
                        <div className="links">
                            <a href="https://www.linkedin.com/in/iris-j-hu/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt='linkedin logo'></img>
                            </a>
                            <a href="https://github.com/irishu37" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt='github logo'></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;