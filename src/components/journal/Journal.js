import React, { useState, useEffect } from 'react'
import { FilterRight } from 'react-bootstrap-icons'
import { Dropdown } from 'react-bootstrap'
import APIManager from '../../modules/APIManager'
import './Journal.css'
import JournalCard from './JournalCard'

const Journal = props => {
    let [entries, setEntries] = useState([])

    const getJournals = () => {
        return APIManager.getAllUser(props.activeUser.id).then(user => {
            entries = user.entries.filter(entry => entry.saved)
            setEntries(entries)
        })
    }
    const sortJournals = (key, order) => { 
        APIManager.getSavedEntries(key, order).then(entries => {
            setEntries(entries)
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
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle>
                                <FilterRight size={30} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {sortJournals('date', 'asc')}}>
                                    Recent
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {sortJournals('date', 'desc')}}>
                                    Oldest
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {sortJournals('hoursSlept','desc')}}>
                                    Most hours slept
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {sortJournals('hoursSlept', 'asc')}}>
                                    Least hours slept
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className='journal-list'>
                    {
                        entries.map(entry => (
                        <JournalCard 
                            key={entry.id} 
                            date={entry.date} 
                            id={entry.id} 
                            activeUser={props.activeUser} 
                            notes={entry.notes}
                            hoursSlept={entry.hoursSlept}
                            getJournals={getJournals}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Journal