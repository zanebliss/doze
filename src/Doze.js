import React, { useState } from 'react'
import Bar from './components/navbar/Navbar'
import WelcomeViews from './components/welcome/WelcomeViews'
import ApplicationViews from './components/ApplicationViews'

const Doze = () => {
    const [hasUser, setHasUser] = useState(sessionStorage.getItem('user'))
    const [activeUser, setActiveUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    const [loading, setLoading] = useState(true)
    const [activities, setActivities] = useState([])

    if (!hasUser) {
        return (
          <React.Fragment>
            <WelcomeViews hasUser={hasUser} setHasUser={setHasUser} />
          </React.Fragment>
        )
      } else if (hasUser) {
        return (
          <React.Fragment>
            <Bar hasUser={hasUser} setHasUser={setHasUser} />
            <ApplicationViews activities={activities} activeUser={activeUser} loading={loading} setLoading={setLoading} />
          </React.Fragment>
        );
      }
}

export default Doze