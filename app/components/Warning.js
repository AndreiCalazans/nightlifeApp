import React from 'react';
import LogginControl from './LogginControl';
function Warning(props) {
    if(props.show){
    return (
        <div  className='warningContainer' onClick={()=> {
            props.toggleShow();
            }}>
            <div className="warning">
             <p>{props.msg}</p>
             <LogginControl></LogginControl>
            </div>
        </div>
    );
    } else {
        return null;
    }
}

export default Warning;