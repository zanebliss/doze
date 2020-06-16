import React, { useState, useEffect } from 'react'
import { FilterRight } from 'react-bootstrap-icons'
import APIManager from '../../modules/APIManager'
import './Journal.css'
import JournalCard from './JournalCard'

const Journal = props => {
    const [entries, setEntries] = useState([])
        
    const getJournals = () => {
        return APIManager.getAllUser(props.activeUser.id).then(user => {
            setEntries(user.entries)
        })
    }
    
    useEffect(() => {
        getJournals()
    }, [])

    return (
        <>
        <div className='journal-wrapper'>
            <div className='journal-header'>
                Sleep journal
                <FilterRight />
            </div>
            <div className='journal-list'>
                {entries.map(entry => (
                    <JournalCard key={entry.id} date={entry.date} id={entry.id} activeUser={props.activeUser} notes={entry.notes} />
                ))}
            </div>
        </div>
        </>
    )
}

export default Journal