
// const initialState = {
//     avatarID: 1
// }
const initialState = null;

const avatarReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_AVATAR_ID':
            return state = action.payload
        case 'SET_NEW_GAME':
            return state = initialState
        case 'USER_LOGOUT':
            return state = initialState

        default: return state
    }
}

export default avatarReducer