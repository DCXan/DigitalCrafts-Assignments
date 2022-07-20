const initialState = {
    counter: 0,
    tasks: []
}

const reducer = (state = initialState, action) => {

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
        case 'SUBMITTASK':
            return {
                ...state,
                tasks: state.tasks.concat(action.value)
            }
        default:
            return state
    }
}

export default reducer