
const initialState = {
    responseData: {},
}

const response = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_RESPONSE':
            return { ...state, responseData: action.payload }

        default: return state
    }
}

export default response