
const initialState = null

const BalanceApiReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_BALANCE_DATA':
            return state = action.payload
        case 'USER_LOGOUT':
            return state = initialState

        default: return state
    }
}

export default BalanceApiReducer