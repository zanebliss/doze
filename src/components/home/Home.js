import React, { useState, useEffect } from 'react'
import Save from './Save'
import Ring from './Ring'
import NewUser from './NewUser'
import ActivitiesModal from './ActivitiesModal'
import APIManager from '../../modules/APIManager'
import Logo from './Logo'
import { Button } from 'react-bootstrap'
import { ReactComponent as Clock } from '../../media/alarm_24px_rounded.svg'
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
        'I exercised today', 'I had caffeine today', 'I am wearing a sleep mask', 'The room is cool',
        'I am stressed', 'I worked late', 'I avoided screens before bed', 'I drank alcohol before bed'
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

    useEffect(() => {
    }, [isNewEntry])

    return (
        <>
            <div className='home-wrapper'>
                <div className='logo'>
                    <Logo />
                    <h1>Doze</h1>
                    {isNewEntry ?
                        <Button variant={'outline-primary'} size='sm' className='status'>Status: new entry</Button>
                        :
                        <Button variant={'success'} size='sm' className='status'>Status: entry unsaved</Button>
                    }
                </div>
                {isNewUser && <NewUser isNewUser={isNewUser} />}
                <div className='ring-wrapper'>
                    <div hidden={!loadRing}>
                        <Clock className='clock' />
                        {isNewEntry ?
                            <div className='status-text'><h1>Enter activities.</h1></div>
                            :
                            <div className='status-text'><h1>Chance of feeling well rested.</h1></div>
                        }
                    </div>
                    <div className='backdrop' />
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
                            isNewEntry={isNewEntry}
                            setCurrentEntry={setCurrentEntry}
                            setIsNewUser={setIsNewUser}
                            entry={entry}
                            preferences={preferences}
                        />
                        <Save
                            {...props}
                            setCurrentEntry={setCurrentEntry}
                            setLoadRing={setLoadRing}
                            setShow={setShow}
                            score={score}
                            isNewEntry={isNewEntry}
                            isNewUser={isNewUser}
                            entry={entry}
                            setEntry={setEntry}
                            resetEntry={resetEntry}
                            setIsNewEntry={setIsNewEntry}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home