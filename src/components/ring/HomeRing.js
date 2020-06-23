import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { NeuralNetwork } from 'brain.js'
import { Clock } from 'react-bootstrap-icons'
import APIManager from '../../modules/APIManager'
import './Ring.css'

const HomeRing = props => {
    const net = new NeuralNetwork({ hiddenLayers: [3] })
    const [data, setData] = useState({})
    let score = props.score

    let trainingData = []

    const options = {
        tooltips: {
            enabled: false
    },
        responsive: true,
        cutoutPercentage: 55
    }
    const loadRing = () => {
        if (!props.entry.isSaved && props.loadRing) {
            setData({
                datasets: [
                    {
                        data: [score, 100 - score],
                        backgroundColor: ['#56CCF2', '#E0E0E0'],
                        borderColor: 'lightgray'

                    }
                ],
            })
        } else {
            setData({
                datasets: [
                    {
                        data: [100],
                        backgroundColor: ['lightgray']
                    }
                ],
            })
        }
    }

    useEffect(() => {
        if (props.entry.isSaved) {
            loadRing()
        } else {
            APIManager.getAllUser(props.entry.userId).then(user => {
                let latestEntry = user.entries[user.entries.length - 1]
                let arr = []
                arr.push(latestEntry.factor1)
                arr.push(latestEntry.factor2)
                arr.push(latestEntry.factor3)
                arr.push(latestEntry.factor4)
                arr.push(latestEntry.factor5)
                arr.push(latestEntry.factor6)
                arr.push(latestEntry.factor7)
                arr.push(latestEntry.factor8)
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
                const newScore = Math.floor((net.run(arr)[0] * 100))
                props.setScore(newScore)
                loadRing()
            })
        }

    }, [props.loadRing])

    return (
        <>
            <div className='backdrop' />
            <Clock size='50' color='gray' className='clock' />
            <div hidden={!props.loadRing} className='result'><p>{score}%</p></div>
            <Doughnut options={options} data={data} className='ring' width={175} />
        </>
    )
}

export default HomeRing