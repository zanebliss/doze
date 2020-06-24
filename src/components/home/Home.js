import React, { useState, useEffect } from 'react'
import Save from './Save'
import RingWrapper from './RingWrapper'
import NewUser from './NewUser'
import ActivitiesModal from './ActivitiesModal'
import APIManager from '../../modules/APIManager'
import SaveSuccess from '../home/SaveSuccess'
import HomeChart from '../charts/HomeChart'
import './Home.css'

const Home = props => {
    const [isNewUser, setIsNewUser] = useState(true)
    const [preferences] = useState([
        'Exercised', 'Drank coffee', 'Sleep mask', 'Cool room',
        'Stressed', 'Worked late', 'Tired', 'Drank alchohol'
    ])
    const [score, setScore] = useState(null)
    const [show, setShow] = useState(false);
    const [hoursSlept, setHoursSlept] = useState([])
    let [entry, setEntry] = useState({
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
        setEntry(obj)
    }

    const updateLatestEntry = () => {
        APIManager.getAllUser(props.activeUser.id).then(user => {
            setEntry(user.entries[user.entries.length - 1])
            setIsNewUser(!isNewUser)
        })
    }

    const setHours = () => {
    APIManager.getSavedEntries(props.activeUser.id, 'hoursSlept', 'asc').then(entries => {
            if (entries.length > 0) {
                let arr = []
                entries.forEach(entry => {
                    if (entry.isSaved) {
                        arr.push(entry.hoursSlept)
                    }
                });
                setHoursSlept(arr)
            }
        })
    }

    useEffect(() => {
        setHours()
    }, [])

    useEffect(() => {
        APIManager.getAllUser(props.activeUser.id).then(user => {
            if (user.entries.length === 0) {
                setIsNewUser(true)
            } else {
                setIsNewUser(false)
            }
        })
    }, [entry])



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
                entry={entry}
                setEntry={setEntry}
            />}
            {!isNewUser && <div>
                <div className='header-text'><h1>Hours slept</h1></div>
                <HomeChart
                    hoursSlept={hoursSlept}
                    activeUser={props.activeUser}
                    isNewUser={isNewUser}
                />
            </div>}
            <ActivitiesModal
                updateLatestEntry={updateLatestEntry}
                preferences={preferences}
                isNewUser={isNewUser}
                setIsNewUser={setIsNewUser}
                entry={entry}
                setEntry={setEntry}
            />
            <Save
                setShow={setShow}
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