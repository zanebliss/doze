import React, { useState, useEffect } from 'react'
import Save from './Save'
import './Home.css'
import RingWrapper from './RingWrapper'
import NewUser from './NewUser'
import ActivitiesModal from './ActivitiesModal'

const Home = props => {
    const [activities] = useState([])
    
    return (
        <>
            {props.isNewUser && <NewUser />}
            {!props.isNewUser && <RingWrapper
                {...props}
                entry={props.entry}
                setEntry={props.setEntry}
                activities={activities}
            />}
            <ActivitiesModal
                activities={activities}
                preferences={props.preferences}
                isNewUser={props.isNewUser}
                setIsNewUser={props.setIsNewUser}
                entry={props.entry}
                setEntry={props.setEntry}
            />
            {!props.entry.saved &&
                <Save
                    isNewUser={props.isNewUser}
                    entry={props.entry}
                    setEntry={props.setEntry}
                />}
        </>
    )
}

export default Home