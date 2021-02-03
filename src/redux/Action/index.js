
export const setResponseData = (value) => {
    return {
        type: 'SET_RESPONSE',
        payload: value,
    }
}

export const setAvatarId = (value) => {
    return {
        type: 'SET_AVATAR_ID',
        payload: value,
    }
}

export const setCurrentTurn = (value) => {
    return {
        type: 'SET_CURRENT_TURN',
        payload: value,
    }
}

export const setNetworth = (value) => {
    return {
        type: 'SET_NETWORTH',
        payload: value,
    }
}

export const setCashflowValues = (value) => {
    return {
        type: 'SET_CASHFLOW_VALUES',
        payload: value,
    }
}

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}

export const setCashFlowApiData = (value) => {
    return {
        type: 'SET_CASHFLOW_DATA',
        payload: value,
    }
}

export const setBalanceApiData = (value) => {
    return {
        type: 'SET_BALANCE_DATA',
        payload: value,
    }
}

export const setDebtApiData = (value) => {
    return {
        type: 'SET_DEBT_DATA',
        payload: value,
    }
}