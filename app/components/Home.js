import React  from 'react';
import {  getProfile } from '../utils/AuthService';
import LogginControl from './LogginControl';
import {browserHistory} from 'react-router';
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      profile: getProfile().name,
      inputValue: 'City to Search'
    },
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    browserHistory.push('/body');
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render () {
  
    return (
      <div>
       <LogginControl></LogginControl>
        <div className="lead">
          <h1>Nightlife</h1>
          <p>Find out where you to go tonight!</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
