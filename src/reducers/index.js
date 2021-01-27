import signupReducer from './signupReducer'
import avatarReducer from './avatarReducer'
import currentTurn from './currentTurnReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    signupData: signupReducer,
    selectAvatar: avatarReducer,
    currentTurn: currentTurn,
})

export default allReducers


