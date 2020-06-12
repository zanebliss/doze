import React, { useState, useEffect } from 'react'
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import Study from '../../media/Study.svg'
import './Activities.css'
import BoostrapSwitchButton from 'bootstrap-switch-button-react'
import { Button, Form } from 'react-bootstrap'

const Activities = props => {
    const [activities, setActivities] = useState([])
    const [val1, setVal1] = useState(false)
    
    const size = 'lg'
    const onlabel = ' '
    const offlabel = ' '

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
                                        console.log(val1)
                                        setVal1(!val1)
                                    }}/>
                                </div>
                                <div className='slider'>
                                    <div>Cool room</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} />
                                </div>
                                <div className='slider'>
                                    <div>Sleep mask</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} />
                                </div>
                                <div className='slider'>
                                    <div>Noise machine</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} />
                                </div>
                                <div className='slider'>
                                    <div>Stressed</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} />
                                </div>
                                <div className='slider'>
                                    <div>Blue light</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} />
                                </div>
                                <div className='slider'>
                                    <div>Food before bed</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} />
                                </div>
                                <div className='slider'>
                                    <div>Alchohol</div>
                                    <BoostrapSwitchButton size={size} onlabel={onlabel} offlabel={offlabel} />
                                </div>
                            </div>
                        </div>
                        <Form.Label>Enter sleep notes</Form.Label>
                        <Form.Control as='textarea' rows='3' />
                        <Button onClick={() => { props.history.push('/home')}}>Next</Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Activities