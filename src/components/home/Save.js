import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const Save = props => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = e => {
    setSelected(e.target.value)
  }

  const handleSubmit = e => {
    props.setSaved(!props.saved)
    let obj = {
      userId: props.activeUser.id,
      factor1: props.activities[0],
      factor2: props.activities[1],
      factor3: props.activities[2],
      factor4: props.activities[3],
      factor5: props.activities[4],
      factor6: props.activities[5],
      factor7: props.activities[6],
      factor8: props.activities[7],
      result: props.result ? 1 : 0,
      date: new Date()
    }
    handleClose()
    console.log(obj)
  }

  useEffect(() => {
    props.setResult(true)
  }, [])

  return (
    <>
      { !props.saved ? 
       <Button variant="primary" onClick={handleShow}>Save</Button> :
       <Button variant="primary" onClick={handleShow} disabled={props.saved}>Saved</Button>
      }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          How did you sleep?
        <BootstrapSwitchButton onlabel=' ' offlabel=' ' checked={props.result} onChange={() => {
          props.setResult(!props.result)
        }}/>
        </Modal.Body>
        <Button variant="primary" onClick={e => {
          handleSubmit()
        }}>Save entry</Button>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
      </Modal>
    </>
  )
}

export default Save