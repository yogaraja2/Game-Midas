import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import signupReducer from './signupReducer'
import avatarReducer from './avatarReducer'
import dashboardReducer from './dashboardReducer'
import cashFlowReducer from './cashFlowReducer'
import CashflowApiReducer from './CashflowApiReducer'
import BalanceApiReducer from './BalanceApiReducer'
import DebtApiReducer from './DebtApiReducer'
import EventsReducer from './EventsReducer'
import EventCountReducer from './EventCountReducer'
import DreamsReducer from './DreamsReducer'
import StudentDetailReducer from './StudentDetailReducer'

export const rootReducers = combineReducers({
    signupData: signupReducer,
    selectAvatar: avatarReducer,
    dashboard: dashboardReducer,
    cashFlowValues: cashFlowReducer,
    cashFlowData: CashflowApiReducer,
    balancesheetData: BalanceApiReducer,
    debtData: DebtApiReducer,
    events: EventsReducer,
    eventCount: EventCountReducer,
    dreams: DreamsReducer,
    studentDetail: StudentDetailReducer,
})

const configStorage = {
    key: 'root',
    storage,
    whitelist: [
        'selectAvatar',
        'dashboard',
        'cashFlowValues',
        'events',
        'eventCount',
        'dreams',
        'studentDetail',
    ]
}

export default persistReducer(configStorage, rootReducers);


