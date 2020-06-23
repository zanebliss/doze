import React from 'react'
import JournalRing from '../ring/JournalRing'
import { Card } from 'react-bootstrap'
import { XCircle } from 'react-bootstrap-icons'
import APIManager from '../../modules/APIManager'

const JournalCard = props => {
    const handleDelete = () => {
        APIManager.deleteEntry(props.id).then(props.getJournals)
    }
    
    return (
        <>
            <Card>
                <Card.Header>{props.date}</Card.Header>
                <Card.Body>
                    <XCircle onClick={() => {
                        handleDelete(props.id)
                    }} />     
                    <JournalRing activeUser={props.activeUser} id={props.id} />
                    <div>Hours slept {props.hoursSlept}</div>
                    <div>{props.notes}</div>
                </Card.Body>
            </Card>
        </>
    )
}

export default JournalCard