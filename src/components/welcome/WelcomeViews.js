import { Route } from 'react-router-dom'
import React, { useState } from 'react'
import Splash from './login/Splash'
import Login from './login/Login'

const WelcomeViews = props => {
  const setActiveUser = props.setActiveUser
  const [login, setLogin] = useState(null)

  return (
    <React.Fragment>
      <Route
        exact path='/' render={props => {
          return <Splash {...props} 
            setLogin={setLogin}
            />
        }}
      />
      <Route
        exact path='/login' render={props => {
          return <Login {...props} 
            setActiveUser={setActiveUser}
            login={login} 
            />
        }}
      />
    </React.Fragment>
  )
}

export default WelcomeViews