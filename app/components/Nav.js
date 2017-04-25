import React from 'react';
import LogginControl from './LogginControl';
import {Link} from 'react-router';
function Nav(props) {
    return (
        <div className='nav lightgreen'>
            <div className="logo">
                <Link to='/'><img src={require('../images/nightlifeLogo.png')} alt=""/></Link>
                <Link to='/' onClick={() => {localStorage.removeItem('cityToSearch')}}>Search</Link>
            </div>
            <LogginControl></LogginControl>
        </div>
    );
}

export default Nav;