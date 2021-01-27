
const initialState = {
    currentTurn: 1,
}

const currentTurnReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_CURRENT_TURN':
            return { ...state, currentTurn: action.payload }

        default: return state

    }
}

export default currentTurnReducer

