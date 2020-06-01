import React, { Component } from 'react';

// components
import Card from '../common/card';

import projectList from '../../../assets/files/projectList.json';
import { PROJ } from '../../vars';

class Projects extends Component {
    render() {
        var data = projectList.data;

        return (
            <div className="othermain" id="projects">
                <h1 className="pageTitle">
                    projects.
                </h1>

                <p>
                    click on each card for more information!
                </p>

                <div className="cards">
                    {data.map(item => (
                        <Card
                            cardType={PROJ}
                            data={item}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;
