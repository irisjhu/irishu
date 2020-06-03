import React, { Component } from 'react';
import ReactGA from 'react-ga';

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

    sendModalGA(label) {
        ReactGA.event({
            category: "Modal",
            action: "clicked modal",
            label: label
        });
    }

    showModal() {
        this.setState({ modalShow: true });
    }

    hideModal() {
        this.setState({ modalShow: false });
    }

    render() {
        if (this.props.cardType === EXP) {
            return (
                <ExpCard
                    data={this.props.data}
                    show={this.state.modalShow}
                    onHide={this.hideModal.bind(this)}
                    onClick={this.showModal.bind(this)}
                    sendModalGA={this.sendModalGA}
                />
            );
        } else if (this.props.cardType === PROJ) {
            return (
                <ProjCard 
                    data={this.props.data} 
                    show={this.state.modalShow}
                    onHide={this.hideModal.bind(this)}
                    onClick={this.showModal.bind(this)}
                    sendModalGA={this.sendModalGA}
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
