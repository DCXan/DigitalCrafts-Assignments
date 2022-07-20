const initialState = {
    randomImages: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_IMAGE':
            return {
                ...state,
                randomImages: state.randomImages.concat(action.payload)
            }
        default:
            return state 
    }
}

export default reducer