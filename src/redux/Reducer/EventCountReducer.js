
const initialState = 1

const EventCountReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_EVENT_COUNT':
            return state = action.payload
        case 'USER_LOGOUT':
            return state = initialState

        default: return state
    }
}

export default EventCountReducer