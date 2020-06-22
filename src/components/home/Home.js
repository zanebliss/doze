import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Save from './Save'
import RingWrapper from './RingWrapper'
import NewUser from './NewUser'
import ActivitiesModal from './ActivitiesModal'
import APIManager from '../../modules/APIManager'
import { clearActivities } from '../../modules/helper'
import './Home.css'

const Home = props => {
    const [isNewUser, setIsNewUser] = useState(true)
    const [preferences] = useState([
        'Exercised', 'Drank coffee', 'Sleep mask', 'Cool room',
        'Stressed', 'Worked late', 'Tired', 'Drank alchohol'
    ])
    let [score, setScore] = useState(null)

    const updateLatestEntry = () => {
        APIManager.getAllUser(props.activeUser.id).then(user => {
            props.setEntry(user.entries[user.entries.length - 1])
            setIsNewUser(!isNewUser)
        })
    }


    useEffect(() => {
        APIManager.getAllUser(props.activeUser.id).then(user => {
            if (user.entries.length === 0) {
                setIsNewUser(true)
            } else {
                setIsNewUser(false)
            }
        })
    })

    return (
        <>
            {isNewUser && <NewUser />}
            {!isNewUser && <RingWrapper
                isNewUser={isNewUser}
                score={score}
                setScore={setScore}
                entry={props.entry}
                setEntry={props.setEntry}
            />}
            <ActivitiesModal
                updateLatestEntry={updateLatestEntry}
                preferences={preferences}
                isNewUser={isNewUser}
                setIsNewUser={setIsNewUser}
                entry={props.entry}
                setEntry={props.setEntry}
            />
            {/* <Button onClick={() => clearActivities(entry.userId)}>Clear</Button> */}
            <Save
                score={score}
                isNewUser={isNewUser}
                setIsNewUser={setIsNewUser}
                entry={props.entry}
                setEntry={props.setEntry}
                resetEntry={props.resetEntry}
            />
        </>
    )
}

export default Home