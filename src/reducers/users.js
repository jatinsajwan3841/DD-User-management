const initialState = [
    { id: 0, name: 'admin', role: 'admin', isAdmin: true, permissions: 'All' },
    {
        id: 1,
        name: 'Ram',
        role: 'account manager',
        isAdmin: true,
        permissions: 'All',
    },
    {
        id: 2,
        name: 'Nyal',
        role: 'client',
        isAdmin: false,
        permissions: 'Read',
    },
    {
        id: 3,
        name: 'Myal',
        role: 'blocked',
        isAdmin: false,
        permissions: 'None',
    },
]

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'addUser':
            return [...state, action.payload]
        case 'editUser':
            const element = state.findIndex(
                (elem) => elem.id === action.payload.id,
            )
            state[element] = action.payload
            return state
        case 'deleteUser':
            return state.filter((t) => t.id !== action.payload)
        default:
            return state
    }
}

export default users
