import React, { useState } from 'react'
import WelcomeViews from './components/welcome/WelcomeViews'
import HomeViews from './components/HomeViews'

const Doze = () => {
  const [activeUser, setActiveUser] = useState(JSON.parse(sessionStorage.getItem('user')))

  if (!activeUser) {
    return (
      <WelcomeViews
        setActiveUser={setActiveUser}
      />
    )
  } else if (activeUser) {
    return (
      <HomeViews 
        activeUser={activeUser}
        setActiveUser={setActiveUser}
      />
    );
  }
}

export default Doze