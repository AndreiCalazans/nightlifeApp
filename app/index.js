import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory , Route, IndexRoute} from 'react-router';
import './style/style.scss';

import Home from './components/Home';
import Main from './components/Main';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
    <Route path='/body' component={Main}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
