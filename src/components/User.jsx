import React, { useEffect, useState } from 'react'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

const User = () => {

    const [state,setState] = useState('');

    useEffect(()=>{
        setState(localStorage.getItem('name'))
    },[])

    useEffect(()=>{
        console.log(state);
    },[state])

    const chooseState = (data) => {
        setState(data)
        console.log(state);
    }

    const handleLogout = () => {
        localStorage.clear();
        setState(localStorage.getItem('name'))
        console.log(state);
    }

  return (
    <div className='userPage'>
        {
            state
            ?
            <h1>Hi {state}, Welcome to ISHOP</h1>
            :
            <h1>........Hello...........Welcome to ISHOP</h1>

        }

        <div className='btnContainer'>
            {
                state
                ?
                    <button onClick={handleLogout}>Logout</button>
                :
                    <>
                        <Login chooseState={chooseState} />
                        <Signup />
                    </>
            }
        </div>
    </div>
  )
}

export default User