import React, { useState } from 'react'
import { Route } from "react-router-dom";
import Home from './home/Home'
import Settings from './settings/Settings'
import Trends from './trends/Trends'
import Activities from './activities/Activities'
import About from './about/About'
import Journal from './journal/Journal'
import './ApplicationViews.css'

const ApplicationViews = props => {
    const activeUser = props.activeUser
    const setActiveUser = props.setActiveUser

    const [activities, setActivities] = useState([])
    const [hoursSlept, setHoursSlept] = useState(0)
    const [notes, setNotes] = useState('')
    const [score, setScore] = useState(null)
    const [latestEntry, setLatestEntry] = useState(null)
    const [editing, setEditing] = useState(false)

    return (
        <div className='content-wrapper'>

            <Route exact path='/' render={props => {
                return <Home {...props}
                    score={score}
                    setScore={setScore}
                    activities={activities}
                    setActivities={setActivities}
                    activeUser={activeUser}
                    hoursSlept={hoursSlept}
                    notes={notes}
                />
            }} />
            <Route exact path='/activities' render={props => {
                return <Activities {...props}
                    editing={editing}
                    latestEntry={latestEntry}
                    setLatestEntry={setLatestEntry}
                    score={score}
                    setScore={setScore}
                    activeUser={activeUser}
                    activities={activities}
                    setActivities={setActivities}
                    notes={notes}
                    setNotes={setNotes}
                    hoursSlept={hoursSlept}
                    setHoursSlept={setHoursSlept}
                />
            }} />
            <Route exact path='/trends' render={props => {
                return <Trends />
            }} />
            <Route exact path='/journal' render={props => {
                return <Journal {...props}
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