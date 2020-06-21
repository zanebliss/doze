import React, { useState } from 'react'
import { Button, Modal, FormLabel, Form } from 'react-bootstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import APIManager from '../../modules/APIManager';
import RangeSlider from 'react-bootstrap-range-slider'

const Save = props => {
  const [hoursSlept, setHoursSlept] = useState(0)
  const [notes, setNotes] = useState('')
  let [result, setResult] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let entry = {}

  const handleSubmit = () => {
    APIManager.getAllUser(props.entry.userId).then(user => {
      entry = user.entries[0]
      entry.isSaved = true
    }).then(() => {
      APIManager.edit('entries', entry)
      handleClose()
      props.resetEntry()
      alert('Entry saved.')
    })
  }
  
  return (
    <>
      {!props.entry.isSaved && <Button variant='primary' size='lg' onClick={handleShow} block >Save</Button>}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered
      >
        <Modal.Body>
          Do you feel rested?
        <BootstrapSwitchButton onlabel=' ' offlabel=' ' checked={result} onChange={() => {
            setResult(!result)
          }} />
        </Modal.Body>
        <Form.Label>Sleep notes</Form.Label>
        <Form.Control as='textarea' rows='3' value={notes} onChange={e => {
          setNotes(e.target.value)
        }} />
        <FormLabel>Hours slept</FormLabel>
        <RangeSlider
          min={0}
          max={12}
          value={hoursSlept}
          size='lg'
          step={0.5}
          onChange={e => { setHoursSlept(Number(e.target.value)) }}
        />
        <FormLabel>{hoursSlept}</FormLabel>
        <Button variant="primary" onClick={e => {
          handleSubmit()
        }}>Save entry</Button>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
      </Modal>
    </>
  )
}

export default Save