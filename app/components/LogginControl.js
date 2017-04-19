import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

import { login, logout, isLoggedIn } from '../utils/AuthService';


function LogginControl(props) {
   
    
    return (
         <div className='align-right'>
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