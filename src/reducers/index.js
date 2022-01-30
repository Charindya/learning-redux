import {combineReducers} from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

// we can access the acounter reducer through allReducers.counterReducer
const allReducers = combineReducers({
    counterReducer,
    loggedReducer
});

/**
 * same as above
const allReducers = combineReducers({
    counterReducer: counterReducer: ,
    loggedReducer: loggedReducer
}); */

export default allReducers;