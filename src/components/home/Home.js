import React, { useState } from 'react'
import HomeRing from '../ring/HomeRing'
import { Button } from 'react-bootstrap'
import Save from './Save'
import './Home.css'

const Home = props => {
    const [result, setResult] = useState(true)
    const [saved, setSaved] = useState(false)

    const activeUser = props.activeUser
    const activities = props.activities
    const setActivities = props.setActivities
    const hoursSlept = props.hoursSlept

    return (
        <>
            <div className='home-wrapper'>
                {activities.length === 0 ?
                    <div>Enter activities</div>
                    :
                    <div>Likelihood of feeling well rested</div>

                }
                <HomeRing
                    activeUser={props.activeUser}
                    activities={activities}
                />
                {activities.length === 0 ?
                    <Button onClick={() => props.history.push('/activities')} >Activities</Button>
                    : <Button onClick={() => {
                        props.history.push('/activities')
                    }} disabled={saved}>Edit Activities</Button>}
                {activities.length !== 0 && <Button disabled={saved} onClick={() => {
                    setActivities([])
                    localStorage.setItem('activities', JSON.stringify([]))
                }}>Clear activities</Button>}
                {activities.length !== 0 &&
                    <Save
                        result={result}
                        setResult={setResult}
                        saved={saved}
                        setSaved={setSaved}

                        activeUser={activeUser}
                        activities={activities}
                        setActivities={setActivities}
                        notes={props.notes}
                        hoursSlept={hoursSlept}
                    />}
            </div>
        </>
    )
}

export default Home