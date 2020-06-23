import React, { } from 'react'
import { Alert } from 'react-bootstrap'

const SaveSuccess = props => {
    if (props.show) {
        return (
            <Alert variant='success' style={{ position: 'absolute' }} onClose={() => props.setShow(false)} dismissible>
                <p>Entry successfully saved</p>
            </Alert>
        );
    }
    else { return null }
}

export default SaveSuccess