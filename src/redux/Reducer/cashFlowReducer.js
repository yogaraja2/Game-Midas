const initialState = {
    livingExpenses: null,
    entertainment: null,
    retirementSavings: null,
    creditCard: null,
    studentLoan: null,
}

const cashFlowReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_CASHFLOW_VALUES':
            return {
                ...state,
                livingExpenses: action.payload.livingExpenses,
                entertainment: action.payload.entertainment,
                retirementSavings: action.payload.retirementSavings,
                creditCard: action.payload.creditCard,
                studentLoan: action.payload.studentLoan
            }

        case 'SET_NEW_GAME':
            return state = initialState

        case 'USER_LOGOUT':
            return state = initialState

        default: return state
    }
}

export default cashFlowReducer