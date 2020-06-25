import React from 'react'
import JournalRing from '../ring/JournalRing'
import { Card, Button } from 'react-bootstrap'
import { XCircle } from 'react-bootstrap-icons'
import APIManager from '../../modules/APIManager'
import moment from 'moment'

const JournalCard = props => {
    const handleDelete = () => {
        APIManager.deleteEntry(props.id).then(props.getJournals)
    }

    return (
        <>
            <div className='journal-card'>
                <Card>
                    <Card.Header>Saved on {moment(props.date).format('MMM Do YYYY, h:mm a')}.</Card.Header>
                    <Card.Body>
                        <Button variant='danger' className={'delete-button'} onClick={() => { handleDelete(props.id) }}>
                            <XCircle size={'30'} />
                        </Button>
                        <div className='score'>{props.score}</div>
                        <JournalRing score={props.score} />
                        {/* <Card.Heading>Hours Slept</Card.Heading> */}
                        <div>Hours slept {props.hoursSlept}</div>
                        <div>{props.notes}</div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default JournalCard