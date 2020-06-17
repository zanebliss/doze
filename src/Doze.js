import React, { useState, useEffect } from 'react'
import Bar from './components/navbar/Navbar'
import WelcomeViews from './components/welcome/WelcomeViews'
import ApplicationViews from './components/ApplicationViews'

const Doze = () => {
    const [hasUser, setHasUser] = useState(sessionStorage.getItem('user'))
    const [activeUser, setActiveUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    const [loading, setLoading] = useState(true)
    const [activities] = useState([])

    if (!hasUser) {
        return (
          <React.Fragment>
            <WelcomeViews 
              hasUser={hasUser} 
              />
          </React.Fragment>
        )
      } else if (hasUser) {
        return (
          <React.Fragment>
            <Bar hasUser={hasUser} setHasUser={setHasUser} />
            <ApplicationViews 
              activities={activities} 
              activeUser={activeUser} 
              setActiveUser={setActiveUser}
              loading={loading} 
              setLoading={setLoading} 
              setHasUser={setHasUser}
              />
          </React.Fragment>
        );
      }
}

export default Doze