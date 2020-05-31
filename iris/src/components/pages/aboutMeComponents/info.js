import React, { Component } from 'react';
import headshot from '../../../assets/files/headshot.jpg';

class Info extends Component {
    render() {
        return (
            <div className="info">
                <img src={headshot} className="headshot" alt="iris headshot"></img>

                <p>
                    <b>Iris Hu</b>
                </p>

                <p className="college">
                    university of maryland, college park
                </p>
                <p>
                    spring 2021
                </p>
                <p>
                    <span className="infolabel">major:</span> computer science
                </p>
                <p>
                    <span className="infolabel">minors:</span> linguistics, general business
                </p>
            </div>
        );
    }
}

export default Info;
