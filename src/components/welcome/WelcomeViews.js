import { Route } from 'react-router-dom'
import React, { useState } from 'react'
import Splash from './splash/Splash'
import Login from './login/Login'

const WelcomeViews = props => {
  const setActiveUser = props.setActiveUser
  const hasUser = props.hasUser
  const setHasUser = props.setHasUser
  const [login, setLogin] = useState(null)

  return (
    <React.Fragment>
      <Route
        exact path='/' render={props => {
          return <Splash {...props} 
            setLogin={setLogin}/>
        }}
      />
      <Route
        exact path='/login' render={props => {
          return <Login {...props} 
            hasUser={hasUser} 
            setHasUser={setHasUser} 
            login={login} 
            />
        }}
      />
    </React.Fragment>
  )
}

export default WelcomeViews