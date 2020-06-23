import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const OnboardingModal = () => {
    const [show, setShow] = useState(true)

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to D o z e.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                    <span>Doze</span> is an intelligent sleep journal that uses machine learning to help you identify 
                    how your daily habits affect your sleep. 
                    </p> 
                    <br></br>
                    <p>Doze is intended to be used before bed, 
                    and reviewed the next day. Simply log your daily activities the night before.
                    After waking up the next day, save your result and whether or not you felt well rested.
                    </p>
                    <br></br>
                    <p>Doze will automatically begin to predict your sleep quality anytime you enter your daily activities
                    in the future.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant='primary'>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default OnboardingModal