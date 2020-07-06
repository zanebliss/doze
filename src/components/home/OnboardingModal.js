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
                    how daily habits affect your sleep. 
                    </p> 
                    <br></br>
                    <p>To use Doze, log your daily activities before going to bed.
                    After waking up the next day, save your result and whether or not you felt well rested.
                    </p>
                    <br></br>
                    <p>Doze will automatically predict your sleep quality anytime you enter your daily activities
                    in the future. As you save more entries, Doze becomes more accurate in it's predictions.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant='primary'>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default OnboardingModal