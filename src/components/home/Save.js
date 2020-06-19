import React, { useState, useEffect } from 'react'
import { Button, Modal, FormLabel, Form } from 'react-bootstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import APIManager from '../../modules/APIManager';
import RangeSlider from 'react-bootstrap-range-slider'

const Save = props => {
  const [hoursSlept, setHoursSlept] = useState(0)
  const [notes, setNotes] = useState('')

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = e => {
    let obj = {
      userId: props.entry.userId,
      factor1: props.entry.factor1,
      factor2: props.entry.factor2,
      factor3: props.entry.factor3,
      factor4: props.entry.factor4,
      factor5: props.entry.factor5,
      factor6: props.entry.factor6,
      factor7: props.entry.factor7,
      factor8: props.entry.factor8,
      result: props.result ? 1 : 0,
      date: props.entry.date,
      notes: notes,
      hoursSlept: hoursSlept,
      score: props.entry.score,
      saved: !props.entry.saved
    }
    obj.id = props.entry.id
    APIManager.edit('entries', obj)
    handleClose()
    props.setNotes('')
    alert('Entry saved.')
  }

  return (
    <>
      <Button variant='primary' size='lg' onClick={handleShow} block >Save</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered
      >
        <Modal.Body>
          Do you feel rested?
        <BootstrapSwitchButton onlabel=' ' offlabel=' ' checked={props.entry.result} onChange={() => {
            props.entry.result = +!props.entry.result
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