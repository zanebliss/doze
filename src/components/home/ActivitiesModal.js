import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ActivitiesForm from '../activities/ActivitiesForm'

const ActivitiesModal = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant='primary' size='lg' onClick={handleShow} block>Activities</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                centered
                animation={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>What did you do today?</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ paddingTop: '3px', paddingBottom: '5px'}}>
                    <ActivitiesForm
                        isNewEntry={props.isNewEntry}
                        setIsNewEntry={props.setIsNewEntry}
                        isNewUser={props.isNewUser}
                        setIsNewUser={props.setIsNewUser}
                        entry={props.entry}
                        activities={props.activities}
                        setCurrentEntry={props.setCurrentEntry}
                        handleClose={handleClose}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ActivitiesModal