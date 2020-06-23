import React, { useEffect, useState } from 'react'
import HomeRing from '../ring/HomeRing'
import APIManager from '../../modules/APIManager'

const Ring = props => {

    const [loadRing, setLoadRing] = useState(null)
    const [headerText, setHeaderText] = useState('Enter activities.')

    useEffect(() => {
        APIManager.getAllUser(props.entry.userId).then(user => {
            if (user.entries[user.entries.length - 1].isSaved) {
                setLoadRing(false)
            } else if (props.isNewUser) {
                setLoadRing(false)
            } else {
                setLoadRing(true)
            }
        })
    }, [props])

    useEffect(() => {
        if (!loadRing) {
            setHeaderText('Enter activities.')
        } else {
            setHeaderText('Chance of feeling well rested')
        }
    }, [loadRing])

    return (
        <>
            <div className='ring-container'>
                <div className='header-text'>
                    <h1>{headerText}</h1>
                </div>
                <HomeRing
                    counter={props.counter}
                    score={props.score}
                    setScore={props.setScore}
                    loadRing={loadRing}
                    setLoadRing={setLoadRing}
                    entry={props.entry}
                    setEntry={props.setEntry}
                />
            </div>
        </>
    )
}

export default Ring