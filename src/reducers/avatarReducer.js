
const initialState = {
    avatarID: 1
}

const avatarReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_AVATAR_ID':
            return {
                ...state,
                avatarID: action.payload
            }

        default: return state
    }
}

export default avatarReducer