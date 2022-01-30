const counterReducer = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "INCREMENTWITHPARAMS":
            return state + action.payload;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

//  used to export a single class. function or primitive from a script file, makes it available to the rest of the app
export default counterReducer;