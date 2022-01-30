import {combineReducers} from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

// we can use combineReducers to combine the reducers so that the store can take in a single reducer object
// we can access the acounter reducer through allReducers.counter
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;