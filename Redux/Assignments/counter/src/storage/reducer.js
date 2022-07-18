const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    // if (action.type == 'DECREMENT') {
    //     return {
    //         ...state,
    //         counter: state.counter - 1
    //     }
    // } else if (action.type == 'INCREMENT') {
    //     return {
    //         ...state,
    //         counter: state.counter + 1
    //     }
    // } else if (action.type == 'SUBTRACT') {
    //     return {
    //         ...state,
    //         counter: state.counter - action.value
    //     }
    // } else if (action.type == 'ADD') {
    //     return {
    //         ...state,
    //         counter: state.counter + action.value
    //     }
    // }

    switch (action.type) {
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        default:
            break
    }

    return state
}


export default reducer