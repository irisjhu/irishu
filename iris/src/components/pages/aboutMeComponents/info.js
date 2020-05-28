import React, { Component } from 'react';
import headshot from '../../../resources/headshot.jpg';

class Info extends Component {
    render() {
        return (
            <div className="info">
                <img src={headshot} className="headshot" alt="iris headshot"></img>

                <p className="college">
                    university of maryland, college park
                </p>
                <p>
                    spring 2021
                </p>
                <p>
                    <b>major:</b> computer science
                </p>
                <p>
                    <b>minors:</b> linguistics, general business
                </p>
            </div>
        );
    }
}

export default Info;
