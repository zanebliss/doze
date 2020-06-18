import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import Home from './home/Home'
import Settings from './settings/Settings'
import Trends from './trends/Trends'
import Activities from './activities/Activities'
import About from './about/About'
import Journal from './journal/Journal'
import './ApplicationViews.css'
import APIManager from '../modules/APIManager';

const ApplicationViews = props => {
    const activeUser = props.activeUser
    const setActiveUser = props.setActiveUser

    const [entry, setEntry] = useState({
        userId: props.activeUser.id,
        factor1: 0,
        factor2: 0,
        factor3: 0,
        factor4: 0,
        factor5: 0,
        factor6: 0,
        factor7: 0,
        factor8: 0,
        result: null, 
        hoursSlept: null,
        score: null,
        date: null,
        notes: '',
        saved: false
    })
    const [activities, setActivities] = useState([])
    const [hoursSlept, setHoursSlept] = useState(0)
    const [notes, setNotes] = useState('')
    const [score, setScore] = useState(null)
    let [latestEntry, setLatestEntry] = useState({})

    useEffect(() => {
        APIManager.getSortedEntries('id', 'desc').then(entries => {
            latestEntry = entries[0]
            setLatestEntry(latestEntry)
        })
    }, [])

    return (
        <div className='content-wrapper'>

            <Route exact path='/' render={props => {
                return <Home {...props}
                    latestEntry={latestEntry}
                    setLatestEntry={setLatestEntry}
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
                    entry={entry}
                    setEntry={setEntry}
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