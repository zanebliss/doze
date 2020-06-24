import React, { } from 'react'
import { Bar } from 'react-chartjs-2'
import moment from 'moment'

const HomeChart = props => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            titleFontSize: 18,
            titleAlign: 'center',
            bodyFontSize: 18,
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    fontSize: 16,
                    fontColor: 'black',
                    stepSize: 1,
                    min: 2,
                    max: 10,
                    display: false
                }
            }],
            xAxes: [{
                reverse: true,
                ticks: {
                    fontSize: 16,
                    fontColor: 'black',
                }
            }],
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
                backgroundColor: [
                    'rgba(41, 201, 255, 0.5)',
                    'rgba(41, 201, 255, 0.5)',
                    'rgba(41, 201, 255, 0.5)',
                    'rgba(41, 201, 255, 0.5)',
                    'rgba(41, 201, 255, 0.5)',
                ],
                borderWidth: 1.5,
                borderColor: 'gray',
                label: 'Hours slept',
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
            <div style={{ height: '280px', padding: '12px', paddingBottom: '0px', paddingTop: '0px'}}>
                <Bar options={options} data={data} />
            </div>
        </>
    )
}

export default HomeChart