import React, { useState, useEffect } from 'react'
import HomeRing from '../ring/HomeRing'
import { Button } from 'react-bootstrap'
import Save from './Save'
import APIManager from '../../modules/APIManager'
import './Home.css'

const Home = props => {
    const [result, setResult] = useState(true)
    const [activities, setActivities] = useState([])

    const saved = props.saved
    const setSaved = props.setSaved
    const entry = props.entry
    const setEntry = props.setEntry
    let latestEntry = props.latestEntry
    const setLatestEntry = props.setLatestEntry
    let score = props.setScore
    const setScore = props.setScore
    const activeUser = props.activeUser
    const hoursSlept = props.hoursSlept
    const notes = props.notes
    const setNotes = props.setNotes

    useEffect(() => {
        APIManager.getSortedEntries('id', 'desc').then(entries => {
            latestEntry = entries[0]
            setLatestEntry(latestEntry)
            activities.push(latestEntry.factor1)
            activities.push(latestEntry.factor2)
            activities.push(latestEntry.factor3)
            activities.push(latestEntry.factor4)
            activities.push(latestEntry.factor5)
            activities.push(latestEntry.factor6)
            activities.push(latestEntry.factor7)
            activities.push(latestEntry.factor8)
            setActivities(activities)

        })
    }, [])

    return (
        <>
            <div className='home-wrapper'>
                <div className='ring-container'>
                    {!latestEntry.saved ?
                        <div className='header-text'>
                            <h1>Predicted sleep score</h1>
                        </div>
                        :
                        <div className='header-text'>
                            <h1>Enter today's activities</h1>
                        </div>

                    }
                    <HomeRing
                        latestEntry={props.latestEntry}
                        setLatestEntry={props.setLatestEntry}
                        activeUser={props.activeUser}
                        activities={activities}
                        score={score}
                        setScore={setScore}
                    />
                </div>
                <div className='charts'></div>
                <div className='home-buttons-wrapper'>
                    <div className='home-buttons'>
                        {latestEntry.saved ?
                            <Button onClick={() => props.history.push('/activities')} > New entry</Button>
                            : <Button onClick={() => { props.history.push('/activities') }} size='lg' block >Edit Activities</Button>}
                        {!latestEntry.saved &&
                            <Save
                                entry={entry}
                                setEntry={setEntry}
                                latestEntry={latestEntry}
                                setLatestEntry={setLatestEntry}

                                result={result}
                                setResult={setResult}
                                score={score}
                                saved={saved}
                                setSaved={setSaved}

                                activeUser={activeUser}
                                activities={activities}
                                setActivities={setActivities}
                                notes={notes}
                                setNotes={setNotes}
                                hoursSlept={hoursSlept}
                            />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home