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
        cutoutPercentage: 50,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
                boxWidth: 60,
                fontSize: 18
            }
        },
        tooltips: {
            enabled: true,
            titleFontSize: 18,
            titleAlign: 'center',
            bodyFontSize: 18,
            callbacks: {
                label: function (tooltipItem, data) {
                    return data['labels'][tooltipItem['index']]
                     + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + ' days'
                }
            }
        },
        plugins: {
            colorschemes: {
                scheme: 'brewer.BuPu8',
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
                    props.factors[4],
                    props.factors[5],
                    props.factors[6],
                    props.factors[7],
                    props.factors[8],
                ],
                borderColor: 'black', 
            },
        ],
        labels: [
            'Exercised',
            'Had caffeine',
            'Wore a sleep mask',
            'Slept in a cool room',
            'Stressed',
            'Worked late',
            'Avoided screens before bed',
            'Drank alcohol before bed'
        ]
    }

    useEffect(() => {
        getTotal()
    }, [props.factors])

    useEffect(() => {
    }, [total])

    return (
        <>
            <div style={{ height: '550px', paddingBottom: '0px', paddingTop: '0px' }} className='home-chart'>
                <Doughnut options={options} data={data} />
            </div>
        </>
    )
}

export default Factors