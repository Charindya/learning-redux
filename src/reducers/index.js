import {combineReducers} from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

// we can access the acounter reducer through allReducers.counterReducer
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;