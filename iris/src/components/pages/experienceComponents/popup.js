import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class Popup extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <img src={process.env.PUBLIC_URL + this.props.logo} alt="company logo small" className="smallLogo" />
                        {this.props.company}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="experienceDet">
                        <h5 className="mb-2 text-muted">{this.props.title}</h5>
                        <p>
                            <p>
                                <b>when:</b> {this.props.start} - {this.props.end}
                            </p>
                            <p>
                                <b>where:</b> {this.props.location}
                            </p>

                            <div className="details">
                                <p>
                                    <ul>
                                        {this.props.details.map(det => (
                                            <li>{det}</li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default Popup;
