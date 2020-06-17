import React, { useState, useEffect } from 'react'
import Ring from '../ring/HomeRing'
import { Button } from 'react-bootstrap'
import Save from './Save'
import './Home.css'

const Home = props => {
    const loading = props.loading
    const setLoading = props.setLoading
    const [result, setResult] = useState(true)
    const [saved, setSaved] = useState(false)

    const activeUser = props.activeUser
    const activities = props.activities
    const hoursSlept = props.hoursSlept

    return (
        <>
            <div className='home-wrapper'>
                {loading ?
                    <div>Enter activities</div>
                    :
                    <div>Likelihood of feeling well rested</div>

                }
                <Ring
                    loading={loading}
                    setLoading={setLoading}

                    activeUser={props.activeUser}
                    activities={activities}
                />
                {loading ?
                    <Button onClick={() => props.history.push('/activities')} >Activities</Button>
                    : <Button onClick={() => props.history.push('/activities')} disabled={saved}>Edit Activities</Button>}
                {!loading && <Button onClick={() => {
                    setLoading(!loading)
                    props.setActivities([])
                }}>Clear activities</Button>}
                {!loading &&
                    <Save
                        result={result}
                        setResult={setResult}
                        saved={saved}
                        setSaved={setSaved}

                        activeUser={activeUser}
                        activities={activities}
                        notes={props.notes}
                        hoursSlept={hoursSlept}
                    />}
            </div>
        </>
    )
}

export default Home