
const initialState = {
    responseData: null,
}

const signupReducer = (state = null, action) => {

    switch (action.type) {

        case 'SET_RESPONSE':
            return state = action.payload
        default: return state
    }
}

export default signupReducer