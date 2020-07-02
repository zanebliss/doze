import React from 'react'
import './Settings.css'

const Settings = props => {

    const handleLogout = () => {
        sessionStorage.clear()
        props.setActiveUser(null)
        props.history.push('/')
    }

    return (
        <>
            <div className='settings-wrapper'>
                <div className='header-wrapper'><h1>Settings</h1></div>
                <div className='nav-options'>
                {/* <div className='nav-item' onClick={() => {props.history.push('/about')}}><p>About</p></div> */}
                <div className='nav-item' onClick={handleLogout}><p>Logout</p></div>
                </div>
            </div>
        </>
    )
}

export default Settings