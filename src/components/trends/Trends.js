import React, { useState, useEffect } from 'react'
import HoursSlept from '../charts/HoursSlept'
import SleepScores from '../charts/SleepScores'
import Results from '../charts/Results'
import APIManager from '../../modules/APIManager'
import { Card } from 'react-bootstrap'
import './Trends.css'

const Trends = props => {
    const [hoursSlept, setHoursSlept] = useState([])
    const [sleepScores, setSleepScores] = useState([])
    const [results, setResults] = useState([])

    const getMetrics = (resource, setResource) => {
        let arr = []
        APIManager.getMetrics(props.activeUser.id).then(entries => {
            entries.forEach(entry => {
                arr.push(entry[resource])
            });
            setResource(arr)
        })
    }

    useEffect(() => {
        getMetrics('hoursSlept', setHoursSlept)
        getMetrics('score', setSleepScores)
        getMetrics('result', setResults)
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
                                <HoursSlept hoursSlept={hoursSlept} />
                                <Card.Title className='card-title'>Hours slept</Card.Title>
                                <Card.Text>
                                    Most healthy adults need between 7 to 9 hours of sleep per night to function properly.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='trend-card'>
                        <Card>
                            <Card.Body>
                                <SleepScores sleepScores={sleepScores} />
                                <Card.Title className='card-title'>Sleep scores</Card.Title>
                                <Card.Text>
                                    As Doze learns from your habits, your sleep scores become more accurate over time.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='trend-card'>
                        <Card>
                            <Card.Body>
                                <Results results={results} />
                                <Card.Title className='card-title'>Well rested</Card.Title>
                                <Card.Text>
                                    Did you feel well rested? See which days you felt well rested.
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