import React, { useState, useEffect } from 'react'
import { FilterRight } from 'react-bootstrap-icons'
import { Dropdown } from 'react-bootstrap'
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
    const sortJournals = type => {
        APIManager.getSortedEntries(type).then(entries => {
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
                                <Dropdown.Item onClick={() => {sortJournals('asc')}}>
                                    Recent
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {sortJournals('desc')}}>
                                    Oldest
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className='journal-list'>
                    {entries.map(entry => (
                        <JournalCard key={entry.id} date={entry.date} id={entry.id} activeUser={props.activeUser} notes={entry.notes}
                            getJournals={getJournals}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Journal