import React from 'react';
import {  getProfile , isLoggedIn } from '../utils/AuthService';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class Main extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props;        
        
    }

    componentWillMount() {

        const {dispatch} = this.props;
        
        // controls to handle user logged
        dispatch(actions.isLogged(isLoggedIn())); 
         if(isLoggedIn()){
            dispatch(actions.loggedUser(getProfile()));
        }else {
            // when logged off user should an empty object

            dispatch(actions.loggedUser({}));
        }
        //////////////////////////////////    

        //check to see if exist cityToSearch in the localstorage if yes push the search

    }

    render() {
       
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
};

export default connect()(Main);