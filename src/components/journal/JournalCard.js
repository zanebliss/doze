import React, { useState } from 'react'
import JournalRing from '../ring/JournalRing'
import { Card, Button, Modal, Form } from 'react-bootstrap'
import { XCircle, ThreeDots } from 'react-bootstrap-icons'
import BoostrapSwitchButton from 'bootstrap-switch-button-react'
import { ReactComponent as Clock } from '../../media/alarm-journal.svg'
import APIManager from '../../modules/APIManager'
import moment from 'moment'

const JournalCard = props => {
    const entry = props.entry
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const size = 'lg'
    const onlabel = 'Yes'
    const offlabel = 'No'

    const handleDelete = () => {
        APIManager.deleteEntry(props.id).then(props.getJournals)
    }

    return (
        <>
            <div className='journal-card'>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop='static'
                    centered
                    animation={true}
                >
                    <Modal.Body>
                        <Form>
                            <Form.Group style={{ marginBottom: '0px' }}>
                                <div className='sliders'>
                                    <Form.Label className='form-label'>{props.preferences[0]}</Form.Label>
                                    <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                                        checked={(Boolean(entry.factor1))}
                                    />
                                    <Form.Label className='form-label'>{props.preferences[1]}</Form.Label>
                                    <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                                        checked={(Boolean(entry.factor2))}
                                    />
                                    <Form.Label className='form-label'>{props.preferences[2]}</Form.Label>
                                    <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                                        checked={(Boolean(entry.factor3))}
                                    />
                                    <Form.Label className='form-label'>{props.preferences[3]}</Form.Label>
                                    <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                                        checked={(Boolean(entry.factor4))}
                                    />
                                    <Form.Label className='form-label'>{props.preferences[4]}</Form.Label>
                                    <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                                        checked={(Boolean(entry.factor5))}
                                    />
                                    <Form.Label className='form-label'>{props.preferences[5]}</Form.Label>
                                    <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                                        checked={(Boolean(entry.factor6))}
                                    />
                                    <Form.Label className='form-label'>{props.preferences[6]}</Form.Label>
                                    <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                                        checked={(Boolean(entry.factor7))}
                                    />
                                    <Form.Label className='form-label'>{props.preferences[7]}</Form.Label>
                                    <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                                        checked={(Boolean(entry.factor8))}
                                    />
                                </div>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    {props.entry.result ? 
                        <Button size='lg' variant='outline-success'>Result: Well rested</Button>
                        :
                        <Button size='lg' variant='outline-danger'>Result: Not well rested</Button>
                    }
                        <Button size='lg' onClick={handleClose} variant='secondary'>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Card>
                    <Card.Header>Saved on {moment(props.date).format('MMM Do YYYY, h:mm a')}.</Card.Header>
                    <Card.Body>
                        <Button variant='danger' className='delete-button' onClick={() => { handleDelete() }}>
                            <XCircle size={'30'} />
                        </Button>
                        <Button variant='outline-primary' className='details-button' onClick={handleShow}>
                            <ThreeDots size={'30'} />
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