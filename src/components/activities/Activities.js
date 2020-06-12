import React from 'react'
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import Study from '../../media/Study.svg'
import './Activities.css'

const Activities = props => {

    return (
        <>
            <div className='activities-wrapper'>
                <ArrowLeftCircle size='45' onClick={() => { props.history.push('/home') }}></ArrowLeftCircle>
                <div>What did you do today?</div>
                <img src={Study} alt='sleep study' className='study' />
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default Activities