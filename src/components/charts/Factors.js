import React, { } from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment' 

const Factors = props => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false,
            titleFontSize: 18,
            titleAlign: 'center',
            bodyFontSize: 18,
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    // beginAtZero: true,
                    fontSize: 16,
                    fontColor: 'black',
                    stepSize: 0.5,
                    min: -0.1,
                    max: 1.15,
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                    display: true
                },
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
                    props.results[4],
                    props.results[3],
                    props.results[2],
                    props.results[1],
                    props.results[0],
                ],
                backgroundColor: ['rgba(41, 201, 255, 0.5)'],
                borderWidth: 1.5,
                pointBackgroundColor: 'white',
                borderColor: 'gray',
                label: 'Well rested',
                pointRadius: 11,
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
            <div style={{ height: '250px', paddingBottom: '0px', paddingTop: '0px'}} className='home-chart'>
                <Line options={options} data={data} /> 
            </div>
        </>
    )
}

export default Factors