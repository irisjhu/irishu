import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

/*
PROPS

popupType: int
modalTitle: JSX
modalBody: JSX
...
*/

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
                        {this.props.modaltitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.modalbody}
                </Modal.Body>
            </Modal>
        );
    }
}

export default Popup;
