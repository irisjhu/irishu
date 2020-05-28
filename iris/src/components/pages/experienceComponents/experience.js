import React, { Component } from 'react';
import experienceList from '../../../assets/files/experienceList.json';

// components
import Card from './card';

class Experience extends Component {
    render() {
        var data = experienceList.data;

        return (
            <div className="experience">
                <h1>
                    experience.
                </h1>

                <div className="cards">
                    {data.map(item => (
                        <Card
                            company={item.company}
                            title={item.title}
                            start={item.start}
                            end={item.end}
                            location={item.location}
                            details={item.details}
                            logo={item.logo}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Experience;
