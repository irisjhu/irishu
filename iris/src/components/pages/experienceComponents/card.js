import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={process.env.PUBLIC_URL + this.props.logo} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.company}</h5>
                    <p className="card-text">
                        {this.props.title} • {this.props.start}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;
