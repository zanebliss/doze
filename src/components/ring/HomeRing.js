import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { NeuralNetwork } from 'brain.js'
import { Clock } from 'react-bootstrap-icons'
import APIManager from '../../modules/APIManager'

const HomeRing = props => {
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
        props.activities.length === 0 ? 
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
                        data: [result, 100 - result],
                        backgroundColor: ['#56CCF2', 'transparent']
                    }
                ],
            })
    }

    useEffect(() => {
        props.activities.length !== 0 ?
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
                result = ((net.run(props.activities)))
                result = Math.floor(result[0] * 100)
                setResult(result)
            }).then(() => {
                loadRing()
            })
        :
            loadRing()
    }, [props.activities])

    return (
        <>
            <Clock size='45' color='gray' />
            <div hidden={props.activities.length === 0}>{result}%</div>
            <Doughnut options={options} data={data} />
        </>
    )
}

export default HomeRing