import React, { useState } from 'react'
import ContextApi from './ContextApi'
import Profile from './Profile';
import Login from './Login';


const App = () => {
  const [userName , setUserName] = useState('');
  const [userPass , setPass] = useState('');
  const [profile , setProfile] = useState(false);


  return (
    <>
      <ContextApi.Provider value={{userName , setUserName ,setPass, userPass , setProfile  }}>
        {profile ? <Profile /> : <Login /> }
      </ContextApi.Provider>     
    </>
  )
}

export default App;