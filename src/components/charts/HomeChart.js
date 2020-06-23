import React, { } from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment'

const HomeChart = props => {

    const options = {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 16,
                    fontColor: 'black'
                }
            }],
            xAxes: [{
                reverse: true,
                ticks: {
                    fontSize: 16,
                    fontColor: 'black',
                }
            }]
        }
    }

    const data = {
            datasets: [
                {
                    data: [
                        props.hoursSlept[4],
                        props.hoursSlept[3],
                        props.hoursSlept[2],
                        props.hoursSlept[1],
                        props.hoursSlept[0],
                    ],
                    backgroundColor: '#56CCF2',
                    borderWidth: 1,
                    pointBackgroundColor: 'white',
                    borderColor: 'gray',
                },
                
            ],
            labels: [
                moment().subtract(4, 'day').format('ddd'),
                moment().subtract(3, 'day').format('ddd'),
                moment().subtract(2, 'day').format('ddd'),
                moment().subtract(1, 'day').format('ddd'),
                'Today',
            ]
    }

    return (
        <>
            <Line options={options} data={data} />
        </>
    )
}

export default HomeChart