import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import Home from './home/Home'
import Settings from './settings/Settings'
import Trends from './trends/Trends'
import Activities from './activities/Activities'
import About from './about/About'
import Journal from './journal/Journal'
import './ApplicationViews.css'

const ApplicationViews = props => {
    
    const loading = props.loading
    const setLoading = props.setLoading
    const activities = props.activities
    const setActivities = props.setActivities
    const activeUser = props.activeUser
    const setHasUser = props.setHasUser
    const [hoursSlept, setHoursSlept] = useState(0)
    const [notes, setNotes] = useState('')

    return (
        <div className='content-wrapper'>
        
            <Route exact path='/home' render={props => {
                return <Home {...props} 
                    activities={activities} 
                    activeUser={activeUser} 
                    loading={loading} 
                    setLoading={setLoading} 
                    hoursSlept={hoursSlept}
                    notes={notes} />
            }} />
            <Route exact path='/activities' render={props => {
                return <Activities {...props} 
                    activities={activities} 
                    setActivities={setActivities} 
                    loading={loading} 
                    setLoading={setLoading} 
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
                    setHasUser={setHasUser}/>
            }} />
            <Route exact path='/about' render={props => {
                return <About />
            }} />
        </div>
    )
}

export default ApplicationViews