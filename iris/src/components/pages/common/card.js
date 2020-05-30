import React, { Component } from 'react';

// components
import ExpCard from '../experienceComponents/expcard';
import ProjCard from '../projectsComponents/projcard';

import { EXP, PROJ } from '../../vars';

/*
PROPS

cardType: int
data: JSON
...
*/

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        };
    }

    render() {
        if (this.props.cardType === EXP) {
            return (
                <ExpCard
                    data={this.props.data}
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                    onClick={() => this.setState({ modalShow: true })}
                />
            );
        } else if (this.props.cardType === PROJ) {
            return (
                <ProjCard 
                    data={this.props.data} 
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                    onClick={() => this.setState({ modalShow: true })}
                />
            );
        }

        return (
            <div>
                Invalid card type.
            </div>
        );
    }
}

export default Card;
