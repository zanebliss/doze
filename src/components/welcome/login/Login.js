import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Branding from '../splash/Branding'
import { ArrowLeftCircle } from 'react-bootstrap-icons'
import { handleFieldChange } from '../../../modules/helper'
import APIManager from '../../../modules/APIManager'

const Login = props => {
    const [user, setUser] = useState({ username: '', password: ''})

    const handleLogin = e => {
        if (user.username === '' || user.password === '') {
            alert('Please enter all fields.')
        } else {
            e.preventDefault()
            // console.log(user)
            APIManager.getUser(user.username, user.password).then(e => {
                if (e.length === 0) {
                    alert('No user found.')
                } 
                else if (e.length > 0) {
                    user.id = e[0].id
                    sessionStorage.setItem('user',
                        JSON.stringify(user)
                    );
                    props.setHasUser(true)
                    props.history.push('/home')
                }
            })
        }
    }

    // TODO: Prevent user duplication in DB
    const createUser = () => {
        if (user.username === '' || user.password === '') {
            alert('Please enter all fields.')
        }
        APIManager.post('users', user).then(user => {
            sessionStorage.setItem('user',
            JSON.stringify(user)
            )
            props.setHasUser(true)
            props.history.push('/hom')
        })
    }

    return (
        <>
            <div className='wrapper'>
                <div className='wrapper-content'>
                <ArrowLeftCircle size={60} color='#4f4f4f' onClick={e => props.history.push('/')}></ArrowLeftCircle>
                    <Branding />
                    <Form>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='username' placeholder='Enter username' id='username' onChange={e => handleFieldChange(e, user, setUser)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' id='password' onChange={e => handleFieldChange(e, user, setUser)}></Form.Control>
                        </Form.Group>
                        
                        {props.login && <Button size='lg' onClick={handleLogin}>Login</Button>}
                        {!props.login && <Button size='lg' onClick={createUser}>Register</Button>}
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login