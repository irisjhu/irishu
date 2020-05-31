import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1 className="nameTitle">
                    iris hu.
                </h1>

                {this.props.aboutme.data.map(para => (
                    <p>
                        {para}
                    </p>
                ))}
            </div>

        );
    }
}

export default About;
