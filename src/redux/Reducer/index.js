import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import signupReducer from './signupReducer'
import avatarReducer from './avatarReducer'
import dashboardReducer from './dashboardReducer'
import cashFlowReducer from './cashFlowReducer'

export const rootReducers = combineReducers({
    signupData: signupReducer,
    selectAvatar: avatarReducer,
    dashboard: dashboardReducer,
    cashFlowValues: cashFlowReducer,
})

const configStorage = {
    key: 'root',
    storage,
    whitelist: ['selectAvatar', 'dashboard', 'cashFlowValues']
}

export default persistReducer(configStorage, rootReducers);


