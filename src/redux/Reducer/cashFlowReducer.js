const initialState = {
    livingExpenses: 0,
    entertainment: 0,
    retirementSavings: 0,
    creditCard: 0,
    studentLoan: 0,
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

        case 'USER_LOGOUT':
            return state = initialState

        default: return state
    }
}

export default cashFlowReducer