import React from 'react';
import ReactDOM from 'react-dom';

import './css/main.scss'

import {Router,Route,browserHistory} from 'react-router';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {bookmark} from './reducers/bookmarks.reducer'

import App from './App';
import * as serviceWorker from './serviceWorker';

const reducers = combineReducers({bookmark});
const store = createStore(reducers,applyMiddleware(thunkMiddleware));

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
      </Router>
    </Provider>
  ), 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
