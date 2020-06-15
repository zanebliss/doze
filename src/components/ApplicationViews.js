import React, { useState } from 'react'
import { Route } from "react-router-dom";
import Home from './home/Home'
import Settings from './settings/Settings'
import Entries from './entries/Entries'
import Trends from './trends/Trends'
import Activities from './activities/Activities'

const ApplicationViews = props => {
    const loading = props.loading
    const setLoading = props.setLoading
    const activities = props.activities
    const setActivities = props.setActivities
    const activeUser = props.activeUser
    const [notes, setNotes] = useState('')

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
            <Route exact path='/entries' render={props => {
                return <Entries />
            }} />
            <Route exact path='/settings' render={props => {
                return <Settings />
            }} />
        </>
    )
}

export default ApplicationViews