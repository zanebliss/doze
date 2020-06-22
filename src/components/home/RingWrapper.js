import React, { useEffect, useState } from 'react'
import HomeRing from '../ring/HomeRing'
import APIManager from '../../modules/APIManager'

const Ring = props => {
    const [loadRing, setLoadRing] = useState(null)

    useEffect(() => {
        APIManager.getAllUser(props.entry.userId).then(user => {
            if (!user.entries[0].isSaved) {
                setLoadRing(false)
            } else {
                setLoadRing(true)
            }
        })
    }, [props.entry])

    return (
        <>
            <div className='ring-container'>
                {loadRing ?
                    <div className='header-text'>
                        <h1>Enter today's activities</h1>
                    </div>
                    :
                    <div className='header-text'>
                        <h1>Predicted sleep score</h1>
                    </div>

                }
                <HomeRing 
                    score={props.score}
                    setScore={props.setScore}
                    loadRing={loadRing}
                    setLoadRing={setLoadRing}
                    entry={props.entry} 
                    setEntry={props.setEntry} 
                    activities={props.activities} 
                    latestEntry={props.latestEntry}/>
            </div>
        </>
    )
}

export default Ring