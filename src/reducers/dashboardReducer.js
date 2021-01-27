
const initialState = {
    currentTurn: 1,
    netWorth: 0,
}

const dashboardReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_CURRENT_TURN':
            return { ...state, currentTurn: action.payload }

        case 'SET_NETWORTH':
            return { ...state, netWorth: action.payload }

        default: return state

    }
}

export default dashboardReducer

