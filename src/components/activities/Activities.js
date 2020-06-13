import React, { useState, useEffect } from 'react'
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import Study from '../../media/Study.svg'
import './Activities.css'
import BoostrapSwitchButton from 'bootstrap-switch-button-react'
import { Button, Form } from 'react-bootstrap'

const Activities = props => {
    const setLoading = props.setLoading
    const activities = props.activities
    const [val1, setVal1] = useState(false)
    const [val2, setVal2] = useState(false)
    const [val3, setVal3] = useState(false)
    const [val4, setVal4] = useState(false)
    const [val5, setVal5] = useState(false)
    const [val6, setVal6] = useState(false)
    const [val7, setVal7] = useState(false)
    const [val8, setVal8] = useState(false)

    const size = 'lg'
    const onlabel = ' '
    const offlabel = ' '

    const makeActivities = (e, val) => {
        e.preventDefault()
        if (val) {
            activities.push(1)
        } else if (!val) { activities.push(0) }
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <div className='activities-wrapper'>
                <ArrowLeftCircle size='45' onClick={() => { props.history.push('/home') }}></ArrowLeftCircle>
                <div>What did you do today?</div>
                <Form>
                    <Form.Group>
                        <img src={Study} alt='sleep study' className='study' />
                        <div className='sliders-container'>
                            <div>
                                <div className='slider'>
                                    <div>Exercised</div>
                                    <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size} checked={val1} onChange={() => {
                                        setVal1(!val1)
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Cool room</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val2} onChange={() => {
                                        setVal2(!val2)
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Sleep mask</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val3} onChange={() => {
                                        setVal3(!val3)
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Noise machine</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val4} onChange={() => {
                                        setVal4(!val4)
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Stressed</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val5} onChange={() => {
                                        setVal5(!val5)
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Blue light</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val6} onChange={() => {
                                        setVal6(!val6)
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Food before bed</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val7} onChange={() => {
                                        setVal7(!val7)
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Alchohol</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val8} onChange={() => {
                                        setVal8(!val8)
                                    }} />
                                </div>
                            </div>
                        </div>
                        <Form.Label>Enter sleep notes</Form.Label>
                        <Form.Control as='textarea' rows='3' />
                        <Button onClick={e => {
                            makeActivities(e, val1)
                            makeActivities(e, val2)
                            makeActivities(e, val3)
                            makeActivities(e, val4)
                            makeActivities(e, val5)
                            makeActivities(e, val6)
                            makeActivities(e, val7)
                            makeActivities(e, val8)
                            setLoading(false)
                            props.history.push('/home')
                        }}>Next</Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Activities