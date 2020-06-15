import React from 'react'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { House, ClipboardData, LayoutTextSidebarReverse, List } from 'react-bootstrap-icons'
import './Navbar.css'

const Bar = () => {
    const iconSize = '50'

    return (
        <>
            <div className='nav-wrapper'>
                <Navbar fixed='bottom' className='nav'>
                    <NavLink exact to='/home' activeStyle={{ color: '#2D9CDB' }} className='icon' >
                        <House size={iconSize} />
                    </NavLink>
                    <NavLink exact to='/trends' activeStyle={{ color: '#2D9CDB' }} className='icon' >
                        <ClipboardData size={iconSize} />
                    </NavLink>
                    <NavLink exact to='/entries' activeStyle={{ color: '#2D9CDB' }} className='icon' >
                        <LayoutTextSidebarReverse size={47} />
                    </NavLink>
                    <NavLink exact to='/settings' activeStyle={{ color: '#2D9CDB' }} className='icon'>
                        <List size={iconSize} />
                    </NavLink>

                </Navbar>
            </div>
        </>
    )
}

export default Bar