import React from 'react';
import ReactDOM from 'react-dom';

import './css/main.scss'

import {Router,Route,browserHistory} from 'react-router';
import {createStore,applyMiddleware} from 'redux';

//Middlewares
// import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

//Reducers
import reducers from './main/reducers'

import {Provider} from 'react-redux';


import App from './main/App';
import * as serviceWorker from './serviceWorker';

const store = applyMiddleware(multi, thunk)(createStore)(reducers)

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
