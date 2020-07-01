import React, { useState } from 'react'
import { Route } from "react-router-dom";
import Home from './home/Home'
import Settings from './settings/Settings'
import Trends from './trends/Trends'
import About from './about/About'
import Journal from './journal/Journal'
import './ApplicationViews.css'

const ApplicationViews = props => {
    const activeUser = props.activeUser
    const setActiveUser = props.setActiveUser
    const [isNewUser, setIsNewUser] = useState(true)
    const [preferences] = useState([
        'I exercised today', 'I had caffeine today', 'I am wearing a sleep mask', 'The room is cool',
        'I am stressed', 'I worked late', 'I avoided screens before bed', 'I drank alcohol before bed'
    ])

    return (
        <div className='content-wrapper'>

            <Route exact path='/' render={props => {
                return <Home {...props}
                    activeUser={activeUser}
                    isNewUser={isNewUser}
                    setIsNewUser={setIsNewUser}
                />
            }} />
            <Route exact path='/trends' render={() => {
                return <Trends 
                    activeUser={activeUser}
                />
            }} />
            <Route exact path='/journal' render={props => {
                return <Journal {...props} 
                    preferences={preferences}
                    isNewUser={isNewUser}
                    setIsNewUser={setIsNewUser}
                    activeUser={activeUser}
                />
            }} />
            <Route exact path='/settings' render={props => {
                return <Settings
                    {...props}
                    setActiveUser={setActiveUser} />
            }} />
            <Route exact path='/about' render={props => {
                return <About />
            }} />
        </div>
    )
}

export default ApplicationViews