import React from 'react'
import Branding from '../login/Branding'
import { Button } from 'react-bootstrap'
import './Login.css'

const Splash = props => {
    return (
        <>
            <div className='login-wrapper'>
                <Branding />
                <div className='login-buttons'>
                    <div className='login-btn'>
                        <Button block size='lg' variant='primary' onClick={() => {
                            props.setLogin(true)
                            props.history.push('/login')
                        }}>Login</Button>
                    </div>
                    <div className='login-btn'>
                        <Button block size='lg' variant='primary' onClick={() => {
                            props.setLogin(false);
                            props.history.push('/login')
                        }}>Register</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Splash