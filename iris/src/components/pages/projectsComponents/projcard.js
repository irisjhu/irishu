import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// components
import Popup from '../common/popup';

/*
PROPS

data: {
    title: String
    where: String
    images: String[]
    description: String
}
...
*/

function ProjModalTitle(props) {
    return props.title;
}

function ProjImgCarousel(props) {
    return (
        <Carousel interval={null} wrap={false}>
            {props.images.map(img => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

function ProjModalBody(props) {
    const images = props.images.map(img => process.env.PUBLIC_URL + "/img" + img)
    
    return (
        <div className="projBody">
            {ProjImgCarousel({images: images})}

            <div className="upperDetails">
                <p>
                    <b>where:</b> {props.where}
                </p>
                <p>
                    <b>Github:</b> <a href={props.github} target="_blank" rel="noopener noreferrer">{props.github}</a>
                </p>
            </div>

            <div className="details">
                {props.description.map(d => (
                    <p>
                        {d}
                    </p>
                ))}
            </div>
        </div>
    );
}

class ProjCard extends Component {
    render() {
        var data = this.props.data;

        return (
            <div className="cardComponents">
                <a className="card" href="javascript:void(0)" onClick={this.props.onClick}>
                    <img className="card-img-top" src={process.env.PUBLIC_URL + "/img" + data.images[0]} alt="project pic" />
                    <div className="card-body">
                        <h4 className="card-title">{data.title}</h4>
                        <h5 className="card-subtitle mb-2 text-muted">{data.where}</h5>
                    </div>
                    <div className="corner">
                        {data.year}
                    </div>
                </a>

                <Popup
                    {...this.props}
                    modalTitle={ProjModalTitle(data)}
                    modalBody={ProjModalBody(data)}
                    show={this.props.show}
                    onHide={this.props.onHide}>
                </Popup>
            </div>
        );
    }
}

export default ProjCard;
