import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ActivitiesForm from '../activities/ActivitiesForm'

const ActivitiesModal = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant='primary' size='lg' onClick={handleShow} block style={{ zIndex: 1 }}>Activities</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                centered
                animation={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>What did you do today?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ActivitiesForm
                        reloadRing={props.reloadRing}
                        setLoadRing={props.setLoadRing}
                        updateLatestEntry={props.updateLatestEntry}
                        isNewUser={props.isNewUser}
                        setIsNewUser={props.setIsNewUser}
                        preferences={props.preferences}
                        entry={props.entry}
                        setEntry={props.setEntry}
                        handleClose={handleClose}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ActivitiesModal