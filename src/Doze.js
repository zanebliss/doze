import React, { useState } from 'react'
import WelcomeViews from './components/welcome/WelcomeViews'

const Doze = () => {
    const [hasUser, setHasUser] = useState(sessionStorage.getItem('user'))

    if (!hasUser) {
        return (
          <React.Fragment>
            <WelcomeViews hasUser={hasUser} setHasUser={setHasUser} />
          </React.Fragment>
        )
      } else if (hasUser) {
        return (
          <React.Fragment>
            {/* <NavBar hasUser={hasUser} setHasUser={setHasUser} />
            <ApplicationViews /> */}
          </React.Fragment>
        );
      }
}

export default Doze