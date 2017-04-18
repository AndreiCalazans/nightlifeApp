import React  from 'react';
import { login, logout, isLoggedIn, getProfile } from '../utils/AuthService';
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      profile: getProfile().name
    }
  }

  render () {
  
    return (
      <div>
        <h1>Home</h1>
        {
          (isLoggedIn()) ?
          ( <button  onClick={() => logout()}>Log out </button> )
          :
           ( <button  onClick={() => login()}>Log In</button> )
        }

        <p>
          hello there: {
            this.state.profile
          }
        </p>
      </div>
    );
  }
}

export default Home;
