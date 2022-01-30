// This function will just return an object that will be dispatched on click on the increment/decrement button
export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

//when incrementing with Parms, you can grab the data or payload getting passed in, go see reducer now
export const incrementWithParams = (number) => {
    return {
        type: "INCREMENTWITHPARAMS",
        payload: number
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}