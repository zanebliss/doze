import React from 'react'
import { ReactComponent as Logo } from '../../../media/Logo-login.svg'
import './Branding.css'

const Branding = () => {
    return (
        <>
            <div className='branding-wrapper'>
                <Logo className='login-logo' />
                <div className='branding'>
                    <h1>Doze</h1>
                    <p>Intelligent sleep tracking made <span style={{ fontWeight: 'bold' }}>easy.</span></p>
                </div>
            </div>
        </>
    )
}

export default Branding