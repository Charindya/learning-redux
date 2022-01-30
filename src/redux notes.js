import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';

// STORE -> GLOBALIZED STATE

// ACTION -> INCREMENT : a function that returns an object
// it looks like an action is returning an object. The object has a key value pair of type and then the type of action the reducer will get fed in
// the type key doesn't have to be called type, it could be blob if we wanted but it makes sense that we call it type as we are creating a type of action
// Notes by user gaearon are helpful: https://github.com/reduxjs/redux/issues/628
// Brilliant note on redux best practice to not put non-serializable values in state/actions: https://blog.bam.tech/developer-news/the-redux-best-practice-do-not-put-non-serializable-values-in-state-or-actions-explained

const increment = () => {
  return {
      type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
      type: 'INCREMENT'
  }
}

// REDUCER -> describes how action transforms current state into next state
// this is a function that returns an object
// we can switch the action depending on it's type and change the state depending on the type of action 
const counter = (state = 0 , action) => {
    switch(action.type) {
      case "INCREMENT":
        return state + 1; 
      case "DECREMENT":
        return state - 1; 
      
    }
}

// now we can add this reducer to the store (state management container aka massive box to manage ALLLL the state in an application)
let store = createStore(counter);

// to execute the acton we need to add dispatch but before we do that let's display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH -> dispatch this action to the reducer, so that the reducer can check what to do
store.dispatch(increment());
store.dispatch(increment());
// here we got the state management container to dispatch our INCREMENT action which the the store (which got passed in a reducer(counter)) 
// used to change the state through the counter reducer passed in.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);