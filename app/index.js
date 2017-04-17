import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory , Route, IndexRoute} from 'react-router';
import './style/style.scss';

import Home from './components/Home';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
    </Route>
  </Router>,
  document.getElementById('root')
)
