import React from 'react'
import { useContext } from 'react';
import ContextApi from './ContextApi';

const Profile = () => {
  const {userName , userPass} = useContext(ContextApi)  
  return (
    <>
    <h1>Your Creds</h1>
    <div>
        <h2>UserName : {userName}</h2>
        <h2>UserName : {userPass}</h2>
    </div>
    </>
  )
}

export default Profile