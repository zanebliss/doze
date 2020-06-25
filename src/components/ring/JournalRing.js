import React, { } from 'react'
import { Doughnut } from 'react-chartjs-2'

const JournalRing = props => {
    const options = {
        tooltips: {
            enabled: false
        },
        responsive: true,
        cutoutPercentage: 55,
        legend: {
            display: false
        },
    }

    const data = {
        datasets: [
            {
                data: [props.score, 100 - props.score],
                backgroundColor: ['#56CCF2', '#E0E0E0'],
                borderColor: 'lightgray',
                borderWidth: '1px'
            }
        ],
        labels: ['Sleep score', ' ']
    }

    

    return (
        <>
            <Doughnut options={options} data={data} width={215} />
        </>
    )
}

export default JournalRing