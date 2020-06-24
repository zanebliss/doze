import React from 'react'
import JournalRing from '../ring/JournalRing'
import { Card } from 'react-bootstrap'
import { XCircle } from 'react-bootstrap-icons'
import APIManager from '../../modules/APIManager'
import moment from 'moment'

const JournalCard = props => {
    const handleDelete = () => {
        APIManager.deleteEntry(props.id).then(props.getJournals)
    }
    
    return (
        <>
            <Card>
                <Card.Header>Saved on {moment(props.date).format('MMM Do YYYY, h:mm a')}</Card.Header>
                <Card.Body>
                    <XCircle onClick={() => {
                        handleDelete(props.id)
                    }} />     
                    <JournalRing score={props.score} />
                    <div>Hours slept {props.hoursSlept}</div>
                    <div>{props.notes}</div>
                </Card.Body>
            </Card>
        </>
    )
}

export default JournalCard