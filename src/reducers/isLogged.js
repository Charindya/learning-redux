// you need a default state for your reducer or you will get a warning error in the console
// comment out the default case to see this error
const loggedReducer = (state= false, action) => {
    switch(action.type){
        case "SIGN_IN":
            return !state;
        default:
            return state; 
    }
};

export default loggedReducer; 