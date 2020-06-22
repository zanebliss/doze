import React, { useState, useEffect } from 'react'
import Save from './Save'
import './Home.css'
import RingWrapper from './RingWrapper'
import NewUser from './NewUser'
import ActivitiesModal from './ActivitiesModal'
import APIManager from '../../modules/APIManager'

const Home = props => {
    const [activities] = useState([])
    const [isNewUser, setIsNewUser] = useState()
    const [preferences] = useState([
        'Exercised', 'Drank coffee', 'Sleep mask', 'Cool room',
        'Stressed', 'Worked late', 'Tired', 'Drank alchohol'
    ])
    const resetEntry = () => {
        const obj = {
            userId: props.activeUser.id,
            factor1: 0,
            factor2: 0,
            factor3: 0,
            factor4: 0,
            factor5: 0,
            factor6: 0,
            factor7: 0,
            factor8: 0,
            result: false,
            hoursSlept: 0,
            score: null,
            date: new Date(),
            notes: '',
            isSaved: false,
        }
        return obj
    }
    let [entry, setEntry] = useState(resetEntry())
    let [score, setScore] = useState(null)

    const updateLatestEntry = () => {
        APIManager.getAllUser(props.activeUser.id).then(user => {
            setEntry(user.entries[user.entries.length - 1])
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
            {/* {!isNewUser && <RingWrapper
                score={score}
                setScore={setScore}
                entry={entry}
                setEntry={setEntry}
                activities={activities}
            />} */}
            <ActivitiesModal
                updateLatestEntry={updateLatestEntry}
                activities={activities}
                preferences={preferences}
                isNewUser={isNewUser}
                setIsNewUser={setIsNewUser}
                entry={entry}
                setEntry={setEntry}
            />
            <Save
                score={score}
                isNewUser={isNewUser}
                setIsNewUser={setIsNewUser}
                entry={entry}
                setEntry={setEntry}
                resetEntry={resetEntry}
            />
        </>
    )
}

export default Home