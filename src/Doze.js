import React, { useState } from 'react'
import Bar from './components/navbar/Navbar'
import WelcomeViews from './components/welcome/WelcomeViews'
import ApplicationViews from './components/ApplicationViews'

const Doze = () => {
    const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('user')))

    if (!activeUser) {
        return (
          <React.Fragment>
            <WelcomeViews 
              setActiveUser={setActiveUser}
              />
          </React.Fragment>
        )
      } else if (activeUser) {
        return (
          <React.Fragment>
            <Bar />
            <ApplicationViews 
              activeUser={activeUser} 
              setActiveUser={setActiveUser}
              />
          </React.Fragment>
        );
      }
}

export default Doze