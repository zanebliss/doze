import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import APIManager from '../../modules/APIManager'

const HomeChart = props => {
    const [data, setData] = useState({})
    const [hoursSlept, setHoursSlept] = useState([])
    const [loadChart, setLoadChart] = useState(false)

    const options = {
        legend: {
            display: false
        },
    }

    const setHours = () => {
        APIManager.getAllUser(props.activeUser.id).then(user => {
            if (user.entries.length > 0) {
                let arr = []
                user.entries.forEach(entry => {
                    if (entry.isSaved) {
                        arr.push(entry.hoursSlept)
                    }
                });
                setHoursSlept(arr)
                setLoadChart(true)
            }
        })
    }

    const setChart = () => {
        setData({
            datasets: [
                {
                    data: [
                        hoursSlept[4],
                        hoursSlept[3],
                        hoursSlept[2],
                        hoursSlept[1],
                        hoursSlept[0],
                    ],
                    backgroundColor: '#6FCF97',
                    borderWidth: 1,
                    pointBackgroundColor: '#56CCF2',
                    borderColor: 'black'
                },
                
            ],
            labels: [
                moment().subtract(4, 'day').format('Do'),
                moment().subtract(3, 'day').format('Do'),
                moment().subtract(2, 'day').format('Do'),
                moment().subtract(1, 'day').format('Do'),
                'Last night',
            ]
        })
    }

    useEffect(() => {
        setHours()
    }, [])

    useEffect(() => {
        setChart()
    }, [loadChart])

    return (
        <>
            <Line options={options} data={data} />
        </>
    )
}

export default HomeChart