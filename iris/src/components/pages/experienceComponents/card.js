import React, { Component } from 'react';

// components
import Popup from './popup';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        };
    }

    render() {
        return (
            <div className="cardComponents">
                <a className="card" href="javascript:void(0)" onClick={() => this.setState({ modalShow: true })}>
                    <img className="card-img-top" src={process.env.PUBLIC_URL + this.props.logo} alt="company logo" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.company}</h4>
                        <h5 className="card-subtitle mb-2 text-muted">{this.props.title}</h5>
                        <p className="card-text">
                            {this.props.start}
                        </p>
                    </div>
                </a>

                <Popup
                    {...this.props}
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}>
                </Popup>
            </div>
        );
    }
}

export default Card;
