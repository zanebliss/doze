import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Clock } from 'react-bootstrap-icons'

const Ring = props => {
    const [data, setData] = useState({})


    const options = {
        tooltips: {
            enabled: false
        }
    }
    const loadRing = () => {
        if (!props.activities) {
            setData({
                datasets: [
                    {
                        data: [100],
                        backgroundColor: ['gray']
                    }
                ],
            })
        }
        else if (props.activities) {
            setData({
                datasets: [
                    {
                        data: [100],
                        //   data: [hmm2, 100 - hmm2],
                        backgroundColor: ['#56CCF2', 'transparent']
                    }
                ],
            })
        }
    }

    useEffect(() => {
        loadRing()
    }, [])

    return (
        <>
            <Clock size='45' color='gray'/>
            <Doughnut options={options} data={data} />
        </>
    )
}

export default Ring