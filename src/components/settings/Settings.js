import React from 'react'
import './Settings.css'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

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
                <div className='header'>
                    <Card>
                        <Card.Body>
                            <NavLink to='/about'>About</NavLink>
                        </Card.Body>
                    </Card>
                    <Card onClick={handleLogout}>
                        <Card.Body>
                            Logout
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Settings