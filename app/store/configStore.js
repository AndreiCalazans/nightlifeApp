import * as redux from 'redux';

import { UserReducer, BarsReducer, isLoggedReducer, cityToSearchReducer } from '../reducers/reducer';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    user: UserReducer,
    bars: BarsReducer,
    isLogged: isLoggedReducer,
    cityToSearch: cityToSearchReducer
  });

  var store = redux.createStore( reducer, initialState , redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ));
  return store;
};