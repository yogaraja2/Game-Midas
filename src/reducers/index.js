import signupReducer from './signupReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    signupData: signupReducer,
})

export default allReducers


