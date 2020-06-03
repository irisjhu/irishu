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
                        alt="carousel slide"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

function ProjModalBody(props) {
    return (
        <div className="projBody">
            {ProjImgCarousel({ images: props.imagesF })}

            <div className="upperDetails">
                <p>
                    <b>when:</b> {props.where}, {props.year}
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
    cardClickGA() {
        this.props.onClick();
        this.props.sendModalGA(this.props.data.title);
    }

    render() {
        var data = this.props.data;

        var imagesF = []

        // images stored in json as: [<number of imgs>, <img location>, <file type>]
        for (var i = 1; i <= data.images[0]; i++) {
            imagesF.push(process.env.PUBLIC_URL + "/img" + data.images[1] + i + data.images[2]);
        }

        return (
            <>
                <a className="card" href="javascript:void(0)" onClick={this.cardClickGA.bind(this)}>
                    <img className="card-img-top" src={imagesF[0]} alt="project pic" />
                    <div className="card-body">
                        <h4 className="card-title">{data.title}</h4>
                        <h5 className="card-subtitle mb-2 text-muted">{data.where}</h5>
                    </div>
                    <div className="corner">
                        {data.year}
                    </div>
                </a>

                <Popup
                    modaltitle={ProjModalTitle(data)}
                    modalbody={ProjModalBody({ ...data, imagesF: imagesF })}
                    show={this.props.show}
                    onHide={this.props.onHide}>
                </Popup>
            </>
        );
    }
}

export default ProjCard;
