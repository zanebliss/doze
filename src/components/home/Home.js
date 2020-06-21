import React, { useState, useEffect } from 'react'
import Save from './Save'
import './Home.css'
import RingWrapper from './RingWrapper'
import NewUser from './NewUser'
import ActivitiesModal from './ActivitiesModal'
import APIManager from '../../modules/APIManager'

const Home = props => {
    const [activities] = useState([])
    const [isNewUser, setIsNewUser] = useState(true)
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
            isSaved: false
        }
        return obj
    }
    let [entry, setEntry] = useState(resetEntry())
    
    useEffect(() => {
        APIManager.getAllUser(entry.userId).then(user => {
            if (user.entries.length > 0) {
                setIsNewUser(false)
                if (!user.entries[0].isSaved) {
                    entry = user.entries[0]
                    setEntry(entry)
                }
            }
        })
    }, [entry.isSaved])

    return (
        <>
            {isNewUser && <NewUser />}
            {/* {!isNewUser && <RingWrapper
                entry={entry}
                setEntry={setEntry}
                activities={activities}
                latestEntry={latestEntry}
            />} */}
            <ActivitiesModal
                activities={activities}
                preferences={preferences}
                isNewUser={isNewUser}
                setIsNewUser={setIsNewUser}
                entry={entry}
                setEntry={setEntry}
            />
            <Save
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