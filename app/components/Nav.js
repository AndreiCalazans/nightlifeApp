import React from 'react';
import LogginControl from './LogginControl';
import {Link} from 'react-router';
function Nav(props) {
    return (
        <div className='nav'>
            <div className="logo">
                <Link to='/'>Logo</Link>
            </div>
            <LogginControl></LogginControl>
        </div>
    );
}

export default Nav;