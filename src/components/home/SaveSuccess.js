import React, { } from 'react'
import { Alert } from 'react-bootstrap'

const SaveSuccess = props => {
    if (props.show) {
        return (
            <Alert variant="primary" style={{ position: 'absolute' }} onClose={() => props.setShow(false)} dismissible>
                <p>Successfully saved</p>
            </Alert>
        );
    }
    else { return null }
}

export default SaveSuccess