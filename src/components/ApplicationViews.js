import React, { useState } from 'react'
import { Route } from "react-router-dom";
import Home from './home/Home'
import Settings from './settings/Settings'
import Trends from './trends/Trends'
import Activities from './activities/Activities'
import About from './about/About'
import Journal from './journal/Journal'

const ApplicationViews = props => {
    const loading = props.loading
    const setLoading = props.setLoading
    const activities = props.activities
    const setActivities = props.setActivities
    const activeUser = props.activeUser
    const [notes, setNotes] = useState('')
    const setHasUser = props.setHasUser


    return (
        <>
            <Route exact path='/home' render={props => {
                return <Home {...props} activities={activities} activeUser={activeUser} loading={loading} setLoading={setLoading} notes={notes} />
            }} />
            <Route exact path='/activities' render={props => {
                return <Activities {...props} activities={activities} setActivities={setActivities} loading={loading} setLoading={setLoading} notes={notes} setNotes={setNotes}/>
            }} />
            <Route exact path='/trends' render={props => {
                return <Trends />
            }} />
            <Route exact path='/journal' render={props => {
                return <Journal activeUser={activeUser} />
            }} />
            <Route exact path='/settings' render={props => {
                return <Settings {...props} setHasUser={setHasUser}/>
            }} />
            <Route exact path='/about' render={props => {
                return <About />
            }} />
        </>
    )
}

export default ApplicationViews