import React, { useState } from 'react'
import { Doughnut } from 'chart.js'

const WellRested = props => {
    const data = {
        datasets: [
            {
                data: [
                    
                ]
            }
        ]
    }
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



    return (
        <Doughnut options={options} data={data} />
    )
}

export default WellRested