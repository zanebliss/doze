import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import APIManager from '../../modules/APIManager'
import { NeuralNetwork } from 'brain.js'

const Ring = props => {
    const net = new NeuralNetwork({ hiddenLayers: [3] })
    const [data, setData] = useState([])

    const options = {
        tooltips: {
            enabled: true
        },
        responsive: true,
        cutoutPercentage: 55,
        legend: {
            display: false
        }
    }

    const createActivities = () => {
        let arr = []
        arr.push(props.entry.factor1)
        arr.push(props.entry.factor2)
        arr.push(props.entry.factor3)
        arr.push(props.entry.factor4)
        arr.push(props.entry.factor5)
        arr.push(props.entry.factor6)
        arr.push(props.entry.factor7)
        arr.push(props.entry.factor8)
        return arr
    }

    const trainBrain = () => {
        let data = []
        APIManager.getAllUser(props.activeUser.id).then(user => {
            for (let i = 0; i < user.entries.length; i++) {
                data.push({ input: [], output: [] })
                data[i].input.push(user.entries[i].factor1)
                data[i].input.push(user.entries[i].factor2)
                data[i].input.push(user.entries[i].factor3)
                data[i].input.push(user.entries[i].factor4)
                data[i].input.push(user.entries[i].factor5)
                data[i].input.push(user.entries[i].factor6)
                data[i].input.push(user.entries[i].factor7)
                data[i].input.push(user.entries[i].factor8)
                data[i].output.push(user.entries[i].result)
            }
            net.train(data)
            const newScore = Math.floor((net.run(createActivities())[0] * 100))
            props.setScore(newScore)
        })
    }

    const loadRing = () => {
        if (props.isNewEntry) {
            setData({
                datasets: [
                    {
                        data: [100],
                        backgroundColor: ['lightgray']
                    }
                ],
            })
        } else if (!props.isNewEntry) {
            setData({
                datasets: [
                    {
                        data: [props.score, 100 - props.score],
                        backgroundColor: ['#56CCF2', '#E0E0E0'],
                        borderColor: 'lightgray',
                        borderWidth: '1px'
                    }
                ],
                labels: ['Sleep score', ' ']
            })
        }
    }

    useEffect(() => {
        trainBrain()
    }, [props.entry])

    useEffect(() => {
        loadRing()
    }, [props.score])

    return (
        <>
            <div hidden={props.isNewEntry} className='result'><p>{props.score}%</p></div>
            <Doughnut options={options} data={data} width={215} />
        </>
    )
}

export default Ring