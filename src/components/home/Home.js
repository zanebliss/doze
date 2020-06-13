import React, { useEffect } from 'react'
import Ring from '../ring/Ring'
import APIManager from '../../modules/APIManager'
import { Button } from 'react-bootstrap'
import './Home.css'

const Home = props => {
    const activities = props.activities
    const setActivities = props.setActivities
    

    const loadActivities = () => {
        // APIManager.getAll().then()
    }

    useEffect(() => {
        // loadActivities()
    }, [])


    return (
        <>
            <div className='home-wrapper'>
                <div>Enter activities</div>
                <Ring activities={activities} />
                <Button onClick={() => props.history.push('/activities')} >Activities</Button>
            </div>
        </>
    )
}

export default Home