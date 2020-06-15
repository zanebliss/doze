import React from 'react'
import './Settings.css'
import { Card } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'

const Settings = props => {

    const handleLogout = () => {
        sessionStorage.clear()
        props.setHasUser(false)
        props.history.push('/')
    }

    return (
        <>
            <div className='settings-wrapper'>
                <div className='header'>
                    <div className='header-text'>Settings</div>
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