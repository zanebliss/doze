import React, { useState } from 'react'
import Logo from '../home/Logo'
import './Onboarding.css'
import { Form, Button } from 'react-bootstrap'

const Onboarding = props => {
    const [factor1, setFactor1] = useState('')
    const [factor2, setFactor2] = useState('')
    const [factor3, setFactor3] = useState('')
    const [factor4, setFactor4] = useState('')
    const [factor5, setFactor5] = useState('')
    const [factor6, setFactor6] = useState('')
    const [factor7, setFactor7] = useState('')
    const [factor8, setFactor8] = useState('')

    const makeActivities = () => {
        if (
            factor1 === '' ||
            factor2 === '' ||
            factor3 === '' ||
            factor4 === '' ||
            factor5 === '' ||
            factor6 === '' ||
            factor7 === '' ||
            factor8 === ''
        ) { alert('Please enter every field.') }
        else {
            let arr = []
            arr.push(factor1)
            arr.push(factor2)
            arr.push(factor3)
            arr.push(factor4)
            arr.push(factor5)
            arr.push(factor6)
            arr.push(factor7)
            arr.push(factor8)
            props.setActivities(arr)
            if (arr.length !== 0) {
                props.setIsNewUser(false)
            }
        }
    }

    return (
        <>
            <div className='onboarding-wrapper'>
                <div className='logo-onboarding'>
                    <Logo />
                    <h1>Doze</h1>
                </div>
                <div className='header-wrapper'><h2>Which habits would you like to keep track of that affect your sleep?</h2></div>

                <div className='activities-inputs'>
                    <Form>
                        <Form.Group>

                            <Form.Control className='activities-input' size='lg' type='text' id='factor1' onChange={e => setFactor1(e.target.value)} placeholder='I exercised today'></Form.Control>
                            <Form.Control className='activities-input' size='lg' type='text' id='factor2' onChange={e => setFactor2(e.target.value)} placeholder='I had caffeine today'></Form.Control>
                            <Form.Control className='activities-input' size='lg' type='text' id='factor3' onChange={e => setFactor3(e.target.value)} placeholder='I drank alchohol before bed'></Form.Control>
                            <Form.Control className='activities-input' size='lg' type='text' id='factor4' onChange={e => setFactor4(e.target.value)} placeholder='I am stressed'></Form.Control>
                            <Form.Control className='activities-input' size='lg' type='text' id='factor5' onChange={e => setFactor5(e.target.value)} placeholder='I have anxiety'></Form.Control>
                            <Form.Control className='activities-input' size='lg' type='text' id='factor6' onChange={e => setFactor6(e.target.value)} placeholder='I am wearing a sleep mask'></Form.Control>
                            <Form.Control className='activities-input' size='lg' type='text' id='factor7' onChange={e => setFactor7(e.target.value)} placeholder='My room is cool'></Form.Control>
                            <Form.Control className='activities-input' size='lg' type='text' id='factor8' onChange={e => setFactor8(e.target.value)} placeholder='I worked late'></Form.Control>
                        </Form.Group>
                    </Form>
                </div>
                <div className='onboarding-submit'>
                    <Button size='lg' style={{ width: '60%' }} onClick={() => {
                        makeActivities()
                    }}>Submit</Button>
                </div>
            </div>
        </>
    )
}

export default Onboarding