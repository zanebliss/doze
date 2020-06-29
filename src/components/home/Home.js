import React, { useState, useEffect } from 'react'
import Save from './Save'
import Ring from './Ring'
import NewUser from './NewUser'
import ActivitiesModal from './ActivitiesModal'
import Logo from './Logo'
import { Button } from 'react-bootstrap'
import { ReactComponent as Clock } from '../../media/alarm_24px_rounded.svg'
import './Home.css'

const Home = props => {
    const [score, setScore] = useState(null)
    const [show, setShow] = useState(false);
    const resetEntry = () => {
        const obj = {
            userId: props.activeUser.id,
            factor1: 0,
            factor2: 0,
            factor3: 0,
            factor4: 0,
            factor5: 0,
            factor6: 0,
            factor7: 0,
            factor8: 0,
            result: false,
            hoursSlept: 0,
            score: null,
            date: new Date(),
            notes: '',
            isSaved: false,
        }
        return obj
    }
    
    return (
        <>
            <div className='home-wrapper'>
                <div className='logo'>
                    <Logo />
                    <h1>Doze</h1>
                    {props.isNewEntry ?
                        <Button variant={'outline-primary'} size='sm' className='status'>Status: new entry</Button>
                        :
                        <Button variant={'success'} size='sm' className='status'>Status: entry unsaved</Button>
                    }
                </div>
                {/* {props.isNewUser && <NewUser isNewUser={props.isNewUser} />} */}
                <div className='ring-wrapper'>
                    <div hidden={!props.loadRing}>
                        <Clock className='clock' />
                        {props.isNewEntry ?
                            <div className='status-text'><h1>Enter activities.</h1></div>
                            :
                            <div className='status-text'><h1>Chance of feeling well rested.</h1></div>
                        }
                    </div>
                    <div className='backdrop' />
                    {props.loadRing && <Ring
                        isNewEntry={props.isNewEntry}
                        isNewUser={props.isNewUser}
                        score={score}
                        setScore={setScore}
                        activeUser={props.activeUser}
                        entry={props.entry}
                    />}
                </div>
                <div className='button-wrapper'>
                    <div className='buttons'>
                        <ActivitiesModal
                            isNewEntry={props.isNewEntry}
                            setCurrentEntry={props.setCurrentEntry}
                            setIsNewUser={props.setIsNewUser}
                            entry={props.entry}
                            activities={props.activities}
                        />
                        <Save
                            {...props}
                            setCurrentEntry={props.setCurrentEntry}
                            setLoadRing={props.setLoadRing}
                            setShow={setShow}
                            score={score}
                            isNewEntry={props.isNewEntry}
                            isNewUser={props.isNewUser}
                            entry={props.entry}
                            setEntry={props.setEntry}
                            resetEntry={resetEntry}
                            setIsNewEntry={props.setIsNewEntry}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home