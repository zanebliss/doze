import React, { useState, useEffect } from 'react'
import HomeChart from '../charts/HomeChart'
import APIManager from '../../modules/APIManager'
import { Card } from 'react-bootstrap'
import './Trends.css'

const Trends = props => {
    const [hoursSlept, setHoursSlept] = useState([])

    const getHoursSlept = () => {
        let arr = []
        APIManager.getHoursSlept(props.activeUser.id).then(entries => {
            entries.forEach(entry => {
                arr.push(entry.hoursSlept)
            });
            setHoursSlept(arr)
        })
    }

    useEffect(() => {
        getHoursSlept()
    }, [])

    return (
        <>
            <div className='content-wrapper'>
                <div className='header-wrapper'>
                    <h1>Trends</h1>
                </div>
                <div className='chart-wrapper'>
                    <div className='trend-card'>

                        <Card>
                            <Card.Body>
                                <HomeChart hoursSlept={hoursSlept} />
                                <Card.Title className='card-title'>Hours slept</Card.Title>
                                <Card.Text>
                                    While sleep requirements vary slightly from person to person, most healthy adults need between 7 to 9 hours of sleep per night to function at their best.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trends