import React from 'react';
import {  getProfile , isLoggedIn } from '../utils/AuthService';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class Main extends React.Component {

   handleUser() {
       console.log('handle');
   }

    componentWillMount() {

        const {dispatch} = this.props;
        console.log('will mountin main');
        // controls to handle user logged
        dispatch(actions.isLogged(isLoggedIn())); 
         if(isLoggedIn()){
             console.log('will mount is logged');
            dispatch(actions.loggedUser(getProfile()));
        }else {
            // when logged off user should an empty object
             console.log('will mount is NOT logged');
            dispatch(actions.loggedUser({}));
        }

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


