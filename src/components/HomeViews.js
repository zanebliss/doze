import React, { useState, useEffect } from 'react'
import Onboarding from '../components/onboarding/Onboarding'
import Bar from '../components/navbar/Navbar'
import ApplicationViews from '../components/ApplicationViews'
import APIManager from '../modules/APIManager'

const HomeViews = props => {
    const [isNewUser, setIsNewUser] = useState(false)
    const [activities, setActivities] = useState([])
    const [isNewEntry, setIsNewEntry] = useState(true)
    const [loadRing, setLoadRing] = useState(false)
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
        result: false,
        hoursSlept: 0,
        score: null,
        date: new Date(),
        notes: '',
        isSaved: false,
    })
    const setActiveUser = props.setActiveUser
    const activeUser = props.activeUser

    const setCurrentEntry = () => {
        APIManager.getAllUser(props.activeUser.id).then(user => {
            const latestEntry = user.entries[user.entries.length - 1]
            if (latestEntry === undefined) {
                setIsNewUser(true)
                setIsNewEntry(true)
            } else {
                setLoadRing(true)
                if (!latestEntry.isSaved) {
                    setIsNewEntry(false)
                    setEntry(latestEntry)
                }
            }
        })
    }

    

    useEffect(() => {
        if ()
        setCurrentEntry()
    }, [])

    useEffect(() => {
    }, [isNewUser])

    useEffect(() => {
    }, [entry])

    useEffect(() => {
    }, [isNewEntry])

    if (activities.length === 0) {
        return (
            <Onboarding
                setIsNewUser={setIsNewUser}
                activities={activities}
                setActivities={setActivities}
            />
        )
    } else {
        return (
            <>
                <Bar />
                <ApplicationViews
                    entry={entry}
                    setEntry={setEntry}
                    setCurrentEntry={setCurrentEntry}
                    isNewUser={isNewUser}
                    setIsNewUser={setIsNewUser}
                    isNewEntry={isNewEntry}
                    setIsNewEntry={setIsNewEntry}
                    loadRing={loadRing}
                    setLoadRing={setLoadRing}
                    activities={activities}
                    activeUser={activeUser}
                    setActiveUser={setActiveUser}
                />
            </>
        )
    }
}

export default HomeViews