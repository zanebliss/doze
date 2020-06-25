import React from 'react'
import JournalRing from '../ring/JournalRing'
import { Card, Button } from 'react-bootstrap'
import { XCircle } from 'react-bootstrap-icons'
import { ReactComponent as Clock } from '../../media/alarm-journal.svg'
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
                        <Button variant='danger' className='delete-button' onClick={() => { handleDelete() }}>
                            <XCircle size={'30'} />
                        </Button>
                        <div className='journal-ring'>
                            <Clock className='clock-journal' />
                            <div className='result-journal'><h1>{props.score}%</h1></div>
                            <div className='journal-backdrop' />
                            <JournalRing score={props.score} />
                        </div>
                    </Card.Body>
                    <Card.Footer>{props.notes}</Card.Footer>
                </Card>
            </div>
        </>
    )
}

export default JournalCard