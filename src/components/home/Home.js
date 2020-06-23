import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Save from './Save'
import RingWrapper from './RingWrapper'
import NewUser from './NewUser'
import ActivitiesModal from './ActivitiesModal'
import APIManager from '../../modules/APIManager'
import SaveSuccess from '../home/SaveSuccess'
import { clearActivities } from '../../modules/helper'
import './Home.css'

const Home = props => {
    const [isNewUser, setIsNewUser] = useState(true)
    const [preferences] = useState([
        'Exercised', 'Drank coffee', 'Sleep mask', 'Cool room',
        'Stressed', 'Worked late', 'Tired', 'Drank alchohol'
    ])
    let [score, setScore] = useState(null)
    const [show, setShow] = useState(false);
    const [isSaved, setIsSaved] = useState(true)

    const updateLatestEntry = () => {
        APIManager.getAllUser(props.activeUser.id).then(user => {
            props.setEntry(user.entries[user.entries.length - 1])
            setIsNewUser(!isNewUser)
        })
    }

    const checkSaved = () => {
        APIManager.getAllUser(props.activeUser.id).then(user => {
            if (user.entries[user.entries.length - 1].isSaved) {
                return true
            } else { return false }
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
          <SaveSuccess 
              show={show}
              setShow={setShow}
          />
            {isNewUser && <NewUser isNewUser={isNewUser} />}
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
            <Button size='md' block onClick={() => {
                clearActivities(props.activeUser.id)
                props.resetEntry()
                }}>Clear activities</Button>
            <Save
                setShow={setShow}
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