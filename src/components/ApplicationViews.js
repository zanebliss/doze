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
    const activeUser = props.activeUser
    const setActiveUser = props.setActiveUser
    const [loading, setLoading] = useState(true)

    const [activities] = useState([])
    const [hoursSlept, setHoursSlept] = useState(0)
    const [notes, setNotes] = useState('')

    return (
        <div className='content-wrapper'>
        
            <Route exact path='/home' render={props => {
                return <Home {...props} 
                    loading={loading} 
                    setLoading={setLoading} 

                    activities={activities} 
                    activeUser={activeUser} 
                    hoursSlept={hoursSlept}
                    notes={notes} 
                    />
            }} />
            <Route exact path='/activities' render={props => {
                return <Activities {...props} 
                    setLoading={setLoading} 
                    
                    activities={activities} 
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
                    setActiveUser={setActiveUser}/>
            }} />
            <Route exact path='/about' render={props => {
                return <About />
            }} />
        </div>
    )
}

export default ApplicationViews