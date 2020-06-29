import React, { useState } from 'react'
import { Route } from "react-router-dom";
import Home from './home/Home'
import Settings from './settings/Settings'
import Trends from './trends/Trends'
import About from './about/About'
import Journal from './journal/Journal'
import './ApplicationViews.css'

const ApplicationViews = props => {
    const isNewUser = props.isNewUser
    const setIsNewUser = props.setIsNewUser
    const activeUser = props.activeUser
    const setActiveUser = props.setActiveUser
    const activities = props.activities
    const isNewEntry = props.isNewEntry
    const setIsNewEntry = props.setIsNewEntry
    const loadRing = props.loadRing
    const setLoadRing = props.setLoadRing
    const entry = props.entry
    const setEntry = props.setEntry
    const setCurrentEntry = props.setCurrentEntry

    return (
        <div className='content-wrapper'>

            <Route exact path='/' render={props => {
                return <Home {...props}
                    isNewUser={isNewUser}
                    setIsNewUser={setIsNewUser}
                    activeUser={activeUser}
                    activities={activities}
                    isNewEntry={isNewEntry}
                    setIsNewEntry={setIsNewEntry}
                    loadRing={loadRing}
                    setLoadRing={setLoadRing}
                    entry={entry}
                    setEntry={setEntry}
                    setCurrentEntry={setCurrentEntry}
                />
            }} />
            <Route exact path='/trends' render={() => {
                return <Trends 
                    activeUser={activeUser}
                />
            }} />
            <Route exact path='/journal' render={props => {
                return <Journal {...props}
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
            <Route exact path='/about' render={() => {
                return <About />
            }} />
        </div>
    )
}

export default ApplicationViews