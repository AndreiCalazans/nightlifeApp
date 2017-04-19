import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory , Route, IndexRoute} from 'react-router';
import './style/style.scss';
import {Provider} from 'react-redux';
import Landing from './components/Landing';
import Main from './components/Main';
import Bars from './components/Bars';


var store = require('./store/configStore').configure();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Landing}></IndexRoute>
        <Route path='/bars' component={Bars}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
