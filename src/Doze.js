import React, { useState } from 'react'
import Bar from './components/navbar/Navbar'
import WelcomeViews from './components/welcome/WelcomeViews'
import ApplicationViews from './components/ApplicationViews'

const Doze = () => {
    const [activeUser, setActiveUser] = useState(JSON.parse(sessionStorage.getItem('user')))

    if (!activeUser) {
        return (
          <>
            <WelcomeViews 
              setActiveUser={setActiveUser}
              />
          </>
        )
      } else if (activeUser) {
        return (
          <>
            <Bar />
            <ApplicationViews 
              activeUser={activeUser} 
              setActiveUser={setActiveUser}
              />
          </>
        );
      }
}

export default Doze