import React, { useState, useEffect } from 'react'
import { FilterRight } from 'react-bootstrap-icons'
import { Dropdown } from 'react-bootstrap'
import APIManager from '../../modules/APIManager'
import JournalCard from './JournalCard'
import './Journal.css'

const Journal = props => {
    let [entries, setEntries] = useState([])

    const getJournals = () => {
        return APIManager.getAllUser(props.activeUser.id).then(user => {
            entries = user.entries.filter(entry => entry.isSaved)
            setEntries(entries)
        })
    }
    const sortJournals = (userId, key, order) => {
        APIManager.getSortedEntries(userId, key, order).then(entries => {
            setEntries(entries)
        })
    }

    useEffect(() => {
        APIManager.getAllUser(props.activeUser.id).then(user => {
            if (user.entries.length > 0) {
                props.setIsNewUser(false)
            }
            const allEntries = user.entries.filter(entry => entry.isSaved)
            setEntries(allEntries)
        })
    }, [props])

    return (
        <>
            <div className='journal-wrapper'>
                <div className='header-wrapper'>
                    <h1>Journal</h1>
                    <div hidden={props.isNewUser} className='dropdown-wrapper'>
                        <Dropdown>
                            <Dropdown.Toggle>
                                <FilterRight size={30} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => { sortJournals(props.activeUser.id, 'date', 'asc') }}>
                                    Recent
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => { sortJournals(props.activeUser.id, 'date', 'desc') }}>
                                    Oldest
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => { sortJournals(props.activeUser.id, 'hoursSlept', 'desc') }}>
                                    Most hours slept
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => { sortJournals(props.activeUser.id, 'hoursSlept', 'asc') }}>
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
                                score={entry.score}
                            />
                        ))}
                </div>
            </div>
        </>
    )
}

export default Journal