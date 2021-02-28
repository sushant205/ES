import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

/**
* @author
* @function ModalComponent
**/

const ModalComponent = (props) => {
    return (
        <Modal size={props.size} show={props.show} onHide={props.onHide}>

            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.oncClick}>Close</Button>
                <Button variant="primary" type={props.type} onClick={props.onClick}>Save Changes</Button>
            </Modal.Footer>

        </Modal>
    )

}

export default ModalComponent