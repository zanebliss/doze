import React, { useState } from 'react'
import Ring from '../ring/HomeRing'
import { Button } from 'react-bootstrap'
import Save from './Save'
import './Home.css'

const Home = props => {
    const loading = props.loading
    const setLoading = props.setLoading
    const activeUser = props.activeUser
    const activities = props.activities
    const setActivities = props.setActivities
    const [saved, setSaved] = useState(false)
    const [result, setResult] = useState(true)


    return (
        <>
            <div className='home-wrapper'>
            { loading ? 
                <div>Enter activities</div>
                :
                <div>Predicted sleep score</div>

            }
                <Ring activities={activities} setActivities={setActivities} activeUser={props.activeUser} loading={loading} setLoading={setLoading} />
                { loading ? 
                <Button onClick={() => props.history.push('/activities')} >Activities</Button> 
                : <Button onClick={() => props.history.push('/activities')} disabled={saved}>Edit Activities</Button> }
                { !loading && <Save setResult={setResult} result={result} activeUser={activeUser} activities={activities} saved={saved} setSaved={setSaved} 
                    notes={props.notes}
                /> }
            </div>
        </>
    )
}

export default Home