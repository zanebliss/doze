import React from 'react'
import HomeRing from '../ring/HomeRing'

const Ring = props => {

    return (
        <>
            <div className='ring-container'>
                {!props.entry.isSaved ?
                    <div className='header-text'>
                        <h1>Predicted sleep score</h1>
                    </div>
                    :
                    <div className='header-text'>
                        <h1>Enter today's activities</h1>
                    </div>

                }
                <HomeRing entry={props.entry} setEntry={props.setEntry} activities={props.activities} latestEntry={props.latestEntry}/>
            </div>
        </>
    )
}

export default Ring