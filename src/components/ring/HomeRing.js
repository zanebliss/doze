import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { NeuralNetwork } from 'brain.js'
import { Clock } from 'react-bootstrap-icons'
import APIManager from '../../modules/APIManager'
import './Ring.css'

const HomeRing = props => {
    const net = new NeuralNetwork({ hiddenLayers: [3] })
    const [data, setData] = useState({})

    let trainingData = []

    const options = {
        tooltips: {
            enabled: false
        },
        responsive: true,
        cutoutPercentage: 55
    }
    const loadRing = () => {
        !props.entry.isSaved ?
            setData({
                datasets: [
                    {
                        data: [props.entry.score, 100 - props.entry.score],
                        backgroundColor: ['#56CCF2', '#E0E0E0'],
                        borderColor: 'lightgray'

                    }
                ],
            })
            :
            setData({
                datasets: [
                    {
                        data: [100],
                        backgroundColor: ['lightgray']
                    }
                ],
            })
    }

    useEffect(() => {
        APIManager.getAllUser(props.entry.userId).then(user => {
            let latestEntry = user.entries[0]
            props.activities.push(latestEntry.factor1)
            props.activities.push(latestEntry.factor2)
            props.activities.push(latestEntry.factor3)
            props.activities.push(latestEntry.factor4)
            props.activities.push(latestEntry.factor5)
            props.activities.push(latestEntry.factor6)
            props.activities.push(latestEntry.factor7)
            props.activities.push(latestEntry.factor8)
        }).then(() => {
            props.entry.isSaved ?
                loadRing()
                :
                APIManager.getAllUser(props.entry.userId).then(user => {
                    for (let i = 0; i < user.entries.length; i++) {
                        trainingData.push({ input: [], output: [] })
                        trainingData[i].input.push(user.entries[i].factor1)
                        trainingData[i].input.push(user.entries[i].factor2)
                        trainingData[i].input.push(user.entries[i].factor3)
                        trainingData[i].input.push(user.entries[i].factor4)
                        trainingData[i].input.push(user.entries[i].factor5)
                        trainingData[i].input.push(user.entries[i].factor6)
                        trainingData[i].input.push(user.entries[i].factor7)
                        trainingData[i].input.push(user.entries[i].factor8)
                        trainingData[i].output.push(user.entries[i].result)
                    }
                    net.train(trainingData)
                    props.entry.score = Math.floor((net.run(props.activities)[0] * 100))
                    props.setEntry(props.entry)
                    loadRing()
                })
        })
    }, [])

    return (
        <>
            <div className='backdrop' />
            <Clock size='60' color='gray' className='clock' />
            <div hidden={props.entry.isSaved} className='result'><p>{props.entry.score}%</p></div>
            <Doughnut options={options} data={data} className='ring' width={170} />
        </>
    )
}

export default HomeRing