const loggedReducer = (state= false, action) => {
    switch(action.type){
        case "SIGN_IN":
            return !state;
        default:
<<<<<<< HEAD
            return state; 
=======
            return state;
>>>>>>> 4727d5d866c974da619b21320e543b18306c4be1
    }
};

export default loggedReducer; 