import React from 'react';
import { login, logout, isLoggedIn } from '../utils/AuthService';


function LogginControl(props) {
    return (
         <div className='log'>
        {
          (isLoggedIn()) ?
          ( <button  onClick={() => logout()}>Log out </button> )
          :
           ( <button  onClick={() => login()}>Log In</button> )
        }
        </div>
    )
}

export default LogginControl;