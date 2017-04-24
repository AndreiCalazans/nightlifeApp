import React  from 'react';
import {  getProfile , isLoggedIn } from '../utils/AuthService';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import LogginControl from './LogginControl';
import {browserHistory} from 'react-router';
class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      inputValue: 'City to Search'
    },
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    localStorage.setItem('cityToSearch' , this.state.inputValue);
    dispatch(actions.cityToSearch(this.state.inputValue));
    browserHistory.push('/bars');
  }

  clearInput(e) {
    this.setState({
      inputValue: ''
    })
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

 
  render () {
    
    
    return (
      <div>
       <LogginControl ></LogginControl>
        <div className="lead">
          <h1>Nightlife</h1>
          <p>Find out where you to go tonight!</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onClick={this.clearInput} onChange={this.handleChange}/>
          </form>
        </div>
        <div className="footer">
          <a href="http://andrei-calazans.herokuapp.com/">Made by Andrei Calazans</a>
        </div>
      </div>
    );
  }
}

export default connect()(Landing);
