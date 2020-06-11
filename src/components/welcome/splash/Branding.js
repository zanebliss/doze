import React from 'react'
import { ReactComponent as Logo } from '../../../media/Logo.svg'

const Branding = () => {
    return (
        <>
            <div className='wrapper-content'>
                <Logo />
                <div>DOZE</div>
                <div>Intelligent sleep tracking made easy.</div>
            </div>
        </>
    )
}

export default Branding