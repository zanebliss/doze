import React from 'react'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { House, ClipboardData, LayoutTextSidebarReverse, List } from 'react-bootstrap-icons'
import './Navbar.css'

const Bar = () => {
    const iconSize = '25pt'

    return (
        <>
            <div className='nav-wrapper'>
                <Navbar fixed='bottom' className='nav'>
                    <NavLink exact to='/home' activeStyle={{ color: '#2D9CDB' }} style={{ textDecoration: 'none'}} className='icon' >
                        <House size={iconSize} />
                        <div className='label'>Home</div>
                    </NavLink>
                    <NavLink exact to='/trends' activeStyle={{ color: '#2D9CDB' }} style={{ textDecoration: 'none'}} className='icon' >
                        <ClipboardData size={iconSize} />
                        <div className='label'>Trends</div>
                    </NavLink>
                    <NavLink exact to='/entries' activeStyle={{ color: '#2D9CDB' }} style={{ textDecoration: 'none'}} className='icon' >
                        <LayoutTextSidebarReverse size={iconSize} />
                        <div className='label'>Journal</div>
                    </NavLink>
                    <NavLink exact to='/settings' activeStyle={{ color: '#2D9CDB' }} style={{ textDecoration: 'none'}} className='icon'>
                        <List size={iconSize} />
                        <div className='label'>Settings</div>
                    </NavLink>

                </Navbar>
            </div>
        </>
    )
}

export default Bar