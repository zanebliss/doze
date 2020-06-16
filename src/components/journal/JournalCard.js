import React from 'react'
import JournalRing from '../ring/JournalRing'
import { Card } from 'react-bootstrap'

const JournalCard = props => {
    
    return (
        <>
            <Card>
                <Card.Header>{props.date}</Card.Header>
                <Card.Body>
                    <JournalRing activeUser={props.activeUser} id={props.id} />
                </Card.Body>
            </Card>
        </>
    )
}

export default JournalCard