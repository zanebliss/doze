import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { NeuralNetwork } from 'brain.js'
import { Clock } from 'react-bootstrap-icons'
import APIManager from '../../modules/APIManager'
import './Ring.css'

const HomeRing = props => {
    const net = new NeuralNetwork({ hiddenLayers: [3] })
    const [data, setData] = useState({})
    const [result, setResult] = useState(0)

    const activities = props.activities
    let latestEntry = props.latestEntry
    let score = props.score
    const setScore = props.setScore

    let trainingData = []

    const options = {
        tooltips: {
            enabled: false
        },
        responsive: true,
        cutoutPercentage: 55
    }
    const loadRing = () => {
        latestEntry.saved ?
            setData({
                datasets: [
                    {
                        data: [100],
                        backgroundColor: ['lightgray']
                    }
                ],
            })
            :
            setData({
                datasets: [
                    {
                        data: [score, 100 - score],
                        backgroundColor: ['#56CCF2', '#E0E0E0'],
                        borderColor: 'lightgray'

                    }
                ],
            })
    }

    useEffect(() => {
        latestEntry.saved === false ?
            APIManager.getAllUser(props.activeUser.id).then(data => {
                for (let index = 0; index < data.entries.length; index++) {
                    trainingData.push({ input: [], output: [] })
                    trainingData[index].input.push(data.entries[index].factor1)
                    trainingData[index].input.push(data.entries[index].factor2)
                    trainingData[index].input.push(data.entries[index].factor3)
                    trainingData[index].input.push(data.entries[index].factor4)
                    trainingData[index].input.push(data.entries[index].factor5)
                    trainingData[index].input.push(data.entries[index].factor6)
                    trainingData[index].input.push(data.entries[index].factor7)
                    trainingData[index].input.push(data.entries[index].factor8)
                    trainingData[index].output.push(data.entries[index].result)
                }
                net.train(trainingData)
                score = ((net.run(activities)))
                score = Math.floor(score[0] * 100)
                setScore(score)
                setResult(score)
            }).then(() => {
                loadRing()
            })
            :
            loadRing()
    }, [latestEntry])

    return (
        <>
            <div className='backdrop' />
            <Clock size='68' color='gray' className='clock' />
            <div hidden={latestEntry.saved} className='result'><p>{result}%</p></div>
            <Doughnut options={options} data={data} className='ring' width={'155px'} />
        </>
    )
}

export default HomeRing