import React , {useContext} from 'react'
import ContextApi from './ContextApi';

const Login = () => {
  const {setUserName , setPass , setProfile} = useContext(ContextApi)  
  return (
    <>
      <div>
        <input 
            placeholder='userName'
            type="text"
            onChange={(event)=>{
                setUserName(event.target.value)
            }}
        />
      </div>
      <div>
      <input 
            placeholder='userPassword'
            type="text"
            onChange={(event)=>{
                setPass(event.target.value)
            }}
        />
      </div>
      <div >
        <button
          onClick={()=>{
            setProfile(true)
          }}> Login </button>
      </div>
    </>
  )
}

export default Login