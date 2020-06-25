import React, { useState, useEffect } from 'react'
import { Button, Modal, FormLabel, Form, Badge } from 'react-bootstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import APIManager from '../../modules/APIManager';
import RangeSlider from 'react-bootstrap-range-slider'

const Save = props => {
  const [hoursSlept, setHoursSlept] = useState(0)
  const [notes, setNotes] = useState('')
  const [result, setResult] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    let entry = props.entry
    entry.isSaved = true
    entry.result = +result
    entry.hoursSlept = hoursSlept
    entry.notes = notes
    entry.score = props.score
    APIManager.edit('entries', entry)
    props.history.push('/journal')
  }

  return (
    <>
      <Button hidden={props.isNewUser} disabled={props.isNewEntry} variant='primary' size='lg' onClick={handleShow} block>Save entry</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered
      >
        <Modal.Body>
          <div className='save-header'>
            <h1>Do you feel well rested?</h1>
          </div>
          <BootstrapSwitchButton onlabel=' ' offlabel=' ' checked={result} onChange={() => {
            setResult(!result)
          }} />
        </Modal.Body>
        <Form.Label>Sleep notes</Form.Label>
        <div className='save-textfield'>
          <Form.Control required as='textarea' rows='3' value={notes} onChange={e => {
            setNotes(e.target.value)
          }} />
        </div>
        <FormLabel>Hours slept<Badge variant='primary'>{hoursSlept}</Badge></FormLabel>
        <div className='save-slider'>
          <RangeSlider
            min={4}
            max={12}
            value={hoursSlept}
            size='lg'
            step={0.5}
            onChange={e => { setHoursSlept(Number(e.target.value)) }}
          />
        </div>
        <Modal.Footer>
          <Button variant='primary' onClick={() => {
            props.setShow(true)
            handleSubmit()
          }}>Save entry</Button>
          <Button variant='secondary' onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Save