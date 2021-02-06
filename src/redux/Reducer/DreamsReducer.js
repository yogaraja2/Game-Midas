const initialState = null;

const DreamsReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_DREAMS':
            return state = action.payload

        case 'USER_LOGOUT':
            return state = initialState

        default: return state
    }
}

export default DreamsReducer