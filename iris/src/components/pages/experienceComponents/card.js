import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <a className="card" href="#">
                <img className="card-img-top" src={process.env.PUBLIC_URL + this.props.logo} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.company}</h4>
                    <h5 className="card-subtitle mb-2 text-muted">{this.props.title}</h5>
                    <p className="card-text">
                        {this.props.start}
                    </p>
                </div>
            </a>
        );
    }
}

export default Card;
