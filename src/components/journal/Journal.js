import React, { useState, useEffect } from 'react'
import { FilterRight } from 'react-bootstrap-icons'
import APIManager from '../../modules/APIManager'
import './Journal.css'

const Journal = props => {
    // console.log(props);
    
    const [journals, setJournals] = useState([])

    useEffect(() => {
        APIManager.getAllUser(props.activeUser.id).then(user => {
            console.log(user.entries);
            
        })
    }, [])

    return (
        <>
        <div className='journal-wrapper'>
            <div className='journal-header'>
                Sleep journal
                <FilterRight />
            </div>
            <div className='journal-list'>
                
            </div>
        </div>
        </>
    )
}

export default Journal