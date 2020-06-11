import React from 'react'
import { Button } from 'react-bootstrap'
import Branding from './Branding'
import './Splash.css'

const Splash = props => {
    return (
        <>
            <div className='wrapper'>
                <div className='wrapper-content'>
                    <Branding />
                    <Button variant='primary' onClick={() => { 
                        props.setLogin(true)
                        props.history.push('/login') }}>Login</Button>
                    <Button variant='primary' onClick={() => { 
                        props.setLogin(false)
                        props.history.push('/login') }}>Register</Button>
                </div>
            </div>
        </>
    )
}

export default Splash