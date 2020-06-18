import React, { useState, useEffect } from 'react'
import { Button, Modal, FormLabel } from 'react-bootstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import APIManager from '../../modules/APIManager';
import RangeSlider from 'react-bootstrap-range-slider'

const Save = props => {
  const saved = props.saved
  const setSaved = props.setSaved

  const [hoursSlept, setHoursSlept] = useState(0)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let entry = props.entry
  let latestEntry = props.latestEntry

  const handleSubmit = e => {
    setSaved(!saved)
    let obj = {
      userId: entry.userId,
      factor1: entry.factor1,
      factor2: entry.factor2,
      factor3: entry.factor3,
      factor4: entry.factor4,
      factor5: entry.factor5,
      factor6: entry.factor6,
      factor7: entry.factor7,
      factor8: entry.factor8,
      result: props.result ? 1 : 0,
      date: new Date(),
      notes: entry.notes,
      hoursSlept: hoursSlept,
      score: entry.score,
      saved: true
    }
    obj.id = entry.id
    console.log(obj);
    
    // APIManager.edit('entries', obj)
    handleClose()
    entry = {}
    props.setEntry(entry)
    latestEntry = { saved: false }
    props.setLatestEntry(latestEntry)
    props.setActivities([])
  }

  useEffect(() => {
  }, [])


  return (
    <>
        <Button variant="primary" onClick={handleShow}>Save</Button> 
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered
      >
        <Modal.Body>
          Do you feel rested?
        <BootstrapSwitchButton onlabel=' ' offlabel=' ' checked={props.result} onChange={() => {
            props.setResult(!props.result)
          }} />
        </Modal.Body>
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