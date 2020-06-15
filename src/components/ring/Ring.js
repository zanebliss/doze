import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { NeuralNetwork } from 'brain.js'
import { Clock } from 'react-bootstrap-icons'
import APIManager from '../../modules/APIManager'

const Ring = props => {
    const [data, setData] = useState({})
    const [score, setScore] = useState(false)
    let [a, setA] = useState(0)
    const net = new NeuralNetwork({ hiddenLayers: [3] })

    let trainingData = []

    const options = {
        tooltips: {
            enabled: false
        }
    }
    const loadRing = () => {
        if (props.loading) {
            setData({
                datasets: [
                    {
                        data: [100],
                        backgroundColor: ['gray']
                    }
                ],
            })
        }
        else if (!props.loading) {
            setData({
                datasets: [
                    {
                        data: [Math.floor(a[0] * 100), 100 - Math.floor(a[0] * 100)],
                        backgroundColor: ['#56CCF2', 'transparent']
                    }
                ],
            })
        }
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
            a = ((net.run(props.activities)))
            setA(a)
        }).then(() => {
            setScore(true)
            props.setLoading(!props.loading)
            loadRing()
        })
    }, [])

    return (
        <>
            <Clock size='45' color='gray' />
            <div hidden={!props.loading}>{Math.floor(a[0] * 100)}</div>
            <Doughnut options={options} data={data} />
        </>
    )
}

export default Ring 