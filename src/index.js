import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';
// connects our global state store to our App component
import { Provider } from 'react-redux';

// we have two reducers and we can't pass in two reducers like this: const store = createStore(counterReducer, isLoggedReducer);
// so we need to combine the reducers into one reducer ==> see src/reducers/index.js
const store = createStore(
  allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// to connect our state container to our app component, we need to wrap <App /> with Provider tags
ReactDOM.render(
<<<<<<< HEAD
  //Provider takes in a store parameter (we are providing the store to be accesible throughout the whole App)
  <Provider store={store}>
    <App />
  </Provider>
=======
  <Provider><App /></Provider>
>>>>>>> 4727d5d866c974da619b21320e543b18306c4be1
  , document.getElementById('root')
);