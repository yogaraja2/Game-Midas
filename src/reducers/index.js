import signupReducer from './signupReducer'
import avatarReducer from './avatarReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    signupData: signupReducer,
    selectAvatar: avatarReducer
})

export default allReducers


