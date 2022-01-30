import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';



//STORE -> GLOBALIZED STATE

//ACTION -> INCREMENT : a function that returns an object
// it looks like an action is returning an object. The object has a key value pair of type and then the type of action the reducer will get fed in
// the type key doesn't have to be called type, it could be blob if we wanted but it makes sense that we call it type as we are creating a type of action
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

//to execute the acton we need ot add dispatch but before we do that let's display it in the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH -> dispatch this action to the reducer, so that the reducer can check what to do
store.dispatch(increment());
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
