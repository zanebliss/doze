import React, { useState, useEffect } from 'react'
import Save from './Save'
import Ring from './Ring'
import NewUser from './NewUser'
import ActivitiesModal from './ActivitiesModal'
import APIManager from '../../modules/APIManager'
import SaveSuccess from '../home/SaveSuccess'
import { Clock } from 'react-bootstrap-icons'
import './Home.css'

const Home = props => {
    const [isNewUser, setIsNewUser] = useState(false)
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
    const [score, setScore] = useState(null)
    const [preferences] = useState([
        'Exercised', 'Drank coffee', 'Sleep mask', 'Cool room',
        'Stressed', 'Worked late', 'Tired', 'Drank alchohol'
    ])
    const [show, setShow] = useState(false);
    const [isNewEntry, setIsNewEntry] = useState(true)

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
    const [loadRing, setLoadRing] = useState(false)

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
        setCurrentEntry()
    }, [])

    useEffect(() => {
    }, [isNewUser])

    useEffect(() => {
    }, [entry])

    return (
        <>
            <SaveSuccess
                show={show}
                setShow={setShow}
            />
            {isNewUser && <NewUser isNewUser={isNewUser} />}
            <div className='ring-wrapper'>
                {isNewEntry ?
                    <div className='status-text'><h1>Enter activities.</h1></div>
                    :
                    <div className='status-text'><h1>Chance of feeling well rested.</h1></div>
                }
                <Clock size='45' color='gray' className='clock' />
                {loadRing && <Ring
                    isNewEntry={isNewEntry}
                    isNewUser={isNewUser}
                    score={score}
                    setScore={setScore}
                    activeUser={props.activeUser}
                    entry={entry}
                />}
            </div>
            <div className='button-wrapper'>
                <div className='buttons'>
                    <ActivitiesModal
                        setCurrentEntry={setCurrentEntry}
                        isNewUser={isNewUser}
                        entry={entry}
                        preferences={preferences}
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
                </div>
            </div>
        </>
    )
}

export default Home