import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { ColorSchemesOptions } from 'chartjs-plugin-colorschemes'

const Factors = props => {
    const [total, setTotal] = useState(0)

    const getTotal = () => {
        let total = 0
        props.factors.forEach(factor => {
            if (factor > 0) {
                total += factor
            }
        });
        setTotal(total)
    }

    const options = {
        responsive: true,
        cutoutPercentage: 60,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
                boxWidth: 60,
                fontSize: 20
            }
        },
        tooltips: {
            enabled: true,
            titleFontSize: 18,
            titleAlign: 'center',
            bodyFontSize: 18,
            callbacks: {
                label: function (tooltipItem, data) {
                    return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + ' days'
                }
            }
        },
        plugins: {
            colorschemes: {
                scheme: 'brewer.BuPu9'
            }
        }
    }

    const data = {
        datasets: [
            {
                data: [
                    props.factors[0],
                    props.factors[1],
                    props.factors[2],
                    props.factors[3],
                ],
                borderColor: 'gray',
                // borderWidth: '5px'
            },
        ],
        labels: [
            'Exercised',
            'Had caffeine',
            'Wore a sleep mask',
            'Slept in a cool room',
        ]
    }

    useEffect(() => {
        getTotal()
    }, [props.factors])

    useEffect(() => {
    }, [total])

    return (
        <>
            <div style={{ height: '450px', paddingBottom: '0px', paddingTop: '0px' }} className='home-chart'>
                <Doughnut options={options} data={data} />
            </div>
        </>
    )
}

export default Factors