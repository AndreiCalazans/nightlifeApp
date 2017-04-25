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

  componentWillMount() {
    if(localStorage.getItem('cityToSearch')) {
      this.setState({
        inputValue: localStorage.getItem('cityToSearch')
      })
    }
  }
 
  render () {
    
    
    return (
      <div id='landing'>
       <LogginControl ></LogginControl>
        <div className="lead">
          <div id='logo'>
          <img src={require('../images/nightlifeLogo.png')} alt=""/>
          <h1>Nightlife</h1>
          </div>
          <hr/>
          <div>
          <p>Find out where you to go tonight!</p>

          </div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onClick={this.clearInput} onChange={this.handleChange}/>
            <input type="submit" value="Search a City"/>
          </form>
        </div>
        <div className="bodyInfo">
          <div className="subBox diamond">
            <i className="lightgreen fa fa-globe fa-5x" aria-hidden="true"></i>
            <p>Check different places</p>
          </div>
          <div className="subBox">
            <i className="fa fa-users lightpurple" aria-hidden="true"></i>

            <p>See how many people are going</p>
          </div>
          <div className="subBox">
            <i className="fa fa-smile-o lightblue" aria-hidden="true"></i>

            <p>Join everyone in the fun</p>
          </div>
        </div>
        <div className="footer">
          <a href="http://andrei-calazans.herokuapp.com/">Made by Andrei Calazans</a>
        </div>
      </div>
    );
  }
}

export default connect()(Landing);
