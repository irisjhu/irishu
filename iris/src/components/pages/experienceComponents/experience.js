import React, { Component } from 'react';
import experienceList from '../../../assets/files/experienceList.json';

// components
import Card from '../common/card';

import {EXP} from '../../vars';

class Experience extends Component {
    render() {
        var data = experienceList.data;

        return (
            <div className="othermain">
                <h1 className="pageTitle">
                    experience.
                </h1>

                <p>
                    click on each card for more information!
                </p>

                <div className="cards">
                    {data.map(item => (
                        <Card
                            cardType={EXP}
                            data={item}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Experience;
