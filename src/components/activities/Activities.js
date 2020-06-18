import React, { useState, useEffect } from 'react'
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import Study from '../../media/Study.svg'
import './Activities.css'
import BoostrapSwitchButton from 'bootstrap-switch-button-react'
import { Button, Form } from 'react-bootstrap'
import APIManager from '../../modules/APIManager'

const Activities = props => {
    const latestEntry = props.latestEntry
    const setLatestEntry = props.setLatestEntry

    const [val1, setVal1] = useState(latestEntry !== null ? Boolean(latestEntry.factor1) : false)
    const [val2, setVal2] = useState(latestEntry !== null ? Boolean(latestEntry.factor2) : false)
    const [val3, setVal3] = useState(latestEntry !== null ? Boolean(latestEntry.factor3) : false)
    const [val4, setVal4] = useState(latestEntry !== null ? Boolean(latestEntry.factor4) : false)
    const [val5, setVal5] = useState(latestEntry !== null ? Boolean(latestEntry.factor5) : false)
    const [val6, setVal6] = useState(latestEntry !== null ? Boolean(latestEntry.factor6) : false)
    const [val7, setVal7] = useState(latestEntry !== null ? Boolean(latestEntry.factor7) : false)
    const [val8, setVal8] = useState(latestEntry !== null ? Boolean(latestEntry.factor8) : false)
    const [entry, setEntry] = useState({
        factor1: false,
        factor2: false,
        factor3: false,
        factor4: false,
        factor5: false,
        factor6: false,
        factor7: false,
        factor8: false
    })
    
    const size = 'lg'
    const onlabel = ' '
    const offlabel = ' '

    const makeActivities = (e, val) => {
        e.preventDefault()
        if (val) {
            props.activities.push(1)
        } else if (!val) { props.activities.push(0) }
    }

    const handleSave = () => {
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
            date: new Date(),
            notes: props.notes,
            hoursSlept: props.hoursSlept,
            score: props.score,
            saved: false
        }
        
        // latestEntry !== null ?
        //     APIManager.edit('entries', latestEntry).then(entry => console.log(entry))
        //     :
        //     APIManager.post('entries', obj).then(item => {
        //         localStorage.setItem('latestEntry', JSON.stringify(item))
        //     })
    }

    useEffect(() => {
        console.log(entry);
        
    }, [entry])

    return (
        <>
            <div className='activities-wrapper'>
                <ArrowLeftCircle size='45' onClick={() => { props.history.push('/') }}></ArrowLeftCircle>
                <div>What did you do today?</div>
                <Form>
                    <Form.Group>
                        <img src={Study} alt='sleep study' className='study' />
                        <div className='sliders-container'>
                            <div>
                                <div className='slider'>
                                    <div>Exercised</div>
                                    <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size} checked={val1} onChange={() => {
                                        entry.factor1 = !entry.factor1
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Cool room</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val2} onChange={() => {
                                        entry.factor2 = !entry.factor2
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Sleep mask</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val3} onChange={() => {
                                        entry.factor3 = !entry.factor3
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Noise machine</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val4} onChange={() => {
                                        entry.factor4 = !entry.factor4
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Stressed</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val5} onChange={() => {
                                        entry.factor5 = !entry.factor5
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Blue light</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val6} onChange={() => {
                                        entry.factor6 = !entry.factor6
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Food before bed</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val7} onChange={() => {
                                        entry.factor7 = !entry.factor7
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Alchohol</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={val8} onChange={() => {
                                        entry.factor8 = !entry.factor8
                                    }} />
                                </div>
                            </div>
                        </div>
                        <Form.Label>Enter activitiy notes</Form.Label>
                        <Form.Control required as='textarea' rows='3' onChange={e => props.setNotes(e.target.value)} />
                        <Button onClick={e => {
                            if (props.notes === '') {
                                alert('Please enter journal notes.')
                            } else if (props.notes !== '') {
                                props.activities.length = 0
                                makeActivities(e, val1)
                                makeActivities(e, val2)
                                makeActivities(e, val3)
                                makeActivities(e, val4)
                                makeActivities(e, val5)
                                makeActivities(e, val6)
                                makeActivities(e, val7)
                                makeActivities(e, val8)
                                handleSave()
                                props.history.push('/')
                            }
                        }}>Next</Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Activities