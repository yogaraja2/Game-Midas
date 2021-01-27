
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