import React, { Component } from 'react';

// components
import Popup from '../common/popup';

/*
PROPS

data: JSON
...
*/

function ExpModalTitle(props) {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + props.logo} alt="company logo small" className="small-logo" />
            {props.company}
        </div>
    );
}

function ExpModalBody(props) {
    return (
        <div className="experience-det">
            <h5 className="mb-2 text-muted">{props.title}</h5>
            <div className="upper-details">
                <p>
                    <b>when:</b> {props.start} - {props.end}
                </p>
                <p>
                    <b>where:</b> {props.location}
                </p>
            </div>

            <div className="details">
                <p>
                    <ul>
                        {props.details.map(det => (
                            <li>{det}</li>
                        ))}
                    </ul>
                </p>
            </div>
        </div>
    );
}

class ExpCard extends Component {
    cardClickGA() {
        this.props.onClick();
        this.props.sendModalGA(this.props.data.company);
    }

    render() {
        var data = this.props.data;

        return (
            <>
                <a className="card" href="javascript:void(0)" onClick={this.cardClickGA.bind(this)}>
                    <img className="card-img-top" src={process.env.PUBLIC_URL + data.logo} alt="company logo" />
                    <div className="card-body">
                        <h4 className="card-title">{data.company}</h4>
                        <h5 className="card-subtitle mb-2 text-muted">{data.title}</h5>
                    </div>
                    <div className="corner">
                        {data.start}
                    </div>
                </a>

                <Popup
                    modaltitle={ExpModalTitle(data)}
                    modalbody={ExpModalBody(data)}
                    show={this.props.show}
                    onHide={this.props.onHide}>
                </Popup>
            </>
        );
    }
}

export default ExpCard;
