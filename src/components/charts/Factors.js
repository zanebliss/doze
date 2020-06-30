import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'

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
        maintainAspectRatio: false,
        legend: {
            display: true
        },
        tooltips: {
            enabled: true,
            titleFontSize: 18,
            titleAlign: 'center',
            bodyFontSize: 18,
        },
    }

    const data = {
        datasets: [
            {
                data: [
                    Math.floor(props.factors[0]/total * 100),
                    Math.floor(props.factors[1]/total * 100),
                    Math.floor(props.factors[2]/total * 100),
                    Math.floor(props.factors[3]/total * 100),
                ],
                backgroundColor: ['red', 'blue', 'green', 'yellow'],
                borderColor: 'lightgray',
            },

        ],
        labels: [
            'Exercised', 
            'Caffeine', 
            'Sleep mask', 
            'Cool room', 
        ]
    }
    
    useEffect(() => {
        getTotal()
    }, [props.factors])
    
    useEffect(() => {
    }, [total])

    return (
        <>
            <div style={{ height: '350px', paddingBottom: '0px', paddingTop: '0px'}} className='home-chart'>
                <Doughnut options={options} data={data} /> 
            </div>
        </>
    )
}

export default Factors