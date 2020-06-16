import React, { useState, useEffect } from 'react'
import { NeuralNetwork } from 'brain.js'
import APIManager from '../../modules/APIManager'
import { Doughnut } from 'react-chartjs-2'
import { XCircle } from 'react-bootstrap-icons'

const JournalRing = props => {
    const [data, setData] = useState({})
    let [result, setResult] = useState(0)
    const net = new NeuralNetwork({ hiddenLayers: [3] })

    let trainingData = []

    const options = {
        tooltips: {
            enabled: false
        }
    }

    const loadRing = () => {
        APIManager.getEntry(props.activeUser.id, props.id).then(entry => { 
            let arr = []
            arr.push(entry[0].factor1)
            arr.push(entry[0].factor2)
            arr.push(entry[0].factor3)
            arr.push(entry[0].factor4)
            arr.push(entry[0].factor5)
            arr.push(entry[0].factor6)
            arr.push(entry[0].factor7)
            arr.push(entry[0].factor8)
            result = Math.floor((net.run(arr)[0]) * 100)
            setResult(result)
            setData({
                datasets: [
                    {
                        data: [result, 100 - result],
                        backgroundColor: ['#56CCF2', 'transparent']
                    }
                ]
            })
        })
    } 

    useEffect(() => {
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
        }).then(() => { loadRing() })
    }, [])

    return (
        <>
            <XCircle />
            <div>{result}</div>
            <Doughnut options={options} data={data} />
        </>
    )
}

export default JournalRing