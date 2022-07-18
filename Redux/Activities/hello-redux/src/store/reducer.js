const initialState = {
    counter: 0,
    isAuthenticated: false
}

const reducer = (state = initialState, action) => {

    if(action.type == 'DECREMENT') {
        
        return {

            ...state,
            counter: state.counter - 1
        }
    }

    if(action.type == 'INCREMENT') {
        
        return {

            ...state,
            counter: state.counter + 1
        }
    }
    return state
}

export default reducer