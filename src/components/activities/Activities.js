import React, { useState, useEffect } from 'react'
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import Study from '../../media/Study.svg'
import './Activities.css'
import BoostrapSwitchButton from 'bootstrap-switch-button-react'
import { Button, Form } from 'react-bootstrap'
import APIManager from '../../modules/APIManager'

const Activities = props => { 
    let entry = props.entry
    let setEntry = props.setEntry
    let latestEntry = props.latestEntry
    let setLatestEntry = props.setLatestEntry
    const score = props.score

    let [notes, setNotes] = useState('')

    const size = 'lg'
    const onlabel = ' '
    const offlabel = ' '

    const handleSave = () => {
        if (!latestEntry.saved) {
            console.log('edited')
            APIManager.edit('entries', entry)
        } else if (latestEntry.saved) {
            let obj = {
                userId: props.activeUser.id,
                factor1: entry.factor1,
                factor2: entry.factor2,
                factor3: entry.factor3,
                factor4: entry.factor4,
                factor5: entry.factor5,
                factor6: entry.factor6,
                factor7: entry.factor7,
                factor8: entry.factor8,
                result: entry.result,
                date: new Date(),
                notes: entry.notes,
                hoursSlept: entry.hoursSlept,
                score: score,
                saved: false
            }
            console.log('saved')
            APIManager.post('entries', obj)
        }
    }
    

    useEffect(() => {
        APIManager.getSortedEntries('id', 'desc').then(entries => {
            latestEntry = entries[0]
            setLatestEntry(latestEntry)
        }).then(() => {
            if (!latestEntry.saved) {
                entry.factor1 = latestEntry.factor1
                entry.factor2 = latestEntry.factor2
                entry.factor3 = latestEntry.factor3
                entry.factor4 = latestEntry.factor4
                entry.factor5 = latestEntry.factor5
                entry.factor6 = latestEntry.factor6
                entry.factor7 = latestEntry.factor7
                entry.factor8 = latestEntry.factor8
                entry.result = latestEntry.result
                entry.hoursSlept = latestEntry.hoursSlept
                entry.score = score
                entry.date = latestEntry.date
                entry.notes = latestEntry.notes
                entry.id = latestEntry.id
            }
            setEntry(entry)
            setNotes(entry.notes)
        })
    }, [])

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
                                    <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size} checked={Boolean(entry.factor1)} onChange={() => {
                                        entry.factor1 = +!entry.factor1
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Cool room</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={Boolean(entry.factor2)} onChange={() => {
                                        entry.factor2 = +!entry.factor2
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Sleep mask</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={Boolean(entry.factor3)} onChange={() => {
                                        entry.factor3 = +!entry.factor3
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Noise machine</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={Boolean(entry.factor4)} onChange={() => {
                                        entry.factor4 = +!entry.factor4
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Stressed</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={Boolean(entry.factor5)} onChange={() => {
                                        entry.factor5 = +!entry.factor5
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Blue light</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={Boolean(entry.factor6)} onChange={() => {
                                        entry.factor6 = +!entry.factor6
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Food before bed</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={Boolean(entry.factor7)} onChange={() => {
                                        entry.factor7 = +!entry.factor7
                                    }} />
                                </div>
                                <div className='slider'>
                                    <div>Alchohol</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} checked={Boolean(entry.factor8)} onChange={() => {
                                        entry.factor8 = +!entry.factor8
                                    }} />
                                </div>
                            </div>
                        </div>
                        
                        <Form.Label>Enter activitity notes</Form.Label>
                        <Form.Control as='textarea' rows='3' value={notes} onChange={e => {
                            setNotes(e.target.value)
                        }} />
                        <Button onClick={e => {
                            if (notes === '') {
                                alert('Please enter journal notes.')
                            } else if (notes !== '') {
                                entry.notes = notes
                                setEntry(entry)
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