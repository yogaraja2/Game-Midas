import signupReducer from './signupReducer'
import avatarReducer from './avatarReducer'
import dashboardReducer from './dashboardReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    signupData: signupReducer,
    selectAvatar: avatarReducer,
    dashboard: dashboardReducer,
})

export default allReducers


