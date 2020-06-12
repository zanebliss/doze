import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { HouseFill, ClipboardData, BookmarkFill, List } from 'react-bootstrap-icons'
import './Navbar.css'

const Bar = () => {
    const iconSize = '55'
    // const color = 'gray'

    return (
        <>
            <div className='nav-wrapper'>
                <Navbar fixed='bottom' className='nav'>
                    <Nav.Link href='/' activeclassname='active'>
                        <HouseFill size={iconSize} />
                    </Nav.Link>
                    <Nav.Link href='/' activeclassname='active'>
                        <ClipboardData size={iconSize} color='gray' />
                    </Nav.Link>
                    <Nav.Link href='/' activeclassname='active'>
                        <BookmarkFill size={iconSize} color='gray' />
                    </Nav.Link>
                    <Nav.Link href='/' activeclassname='active'  >
                        <List size={iconSize} color='gray' />
                    </Nav.Link>
                </Navbar>
            </div>
        </>
    )
}

export default Bar