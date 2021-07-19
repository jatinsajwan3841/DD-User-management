const logstate = (state = null, action) => {
    switch (action.type) {
        case 'login':
            state = action.payload
            return state
        case 'logout':
            return null
        default:
            return state
    }
}

export default logstate
