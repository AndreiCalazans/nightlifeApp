import React from 'react';
import {  getProfile , isLoggedIn } from '../utils/AuthService';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class Main extends React.Component {
    

    render() {
        const {dispatch} = this.props;
        
        dispatch(actions.isLogged(isLoggedIn()));   
            
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
};

export default connect()(Main);