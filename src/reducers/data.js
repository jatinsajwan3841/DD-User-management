const initialState = [
    {
        id: 0,
        chart_label: 'check',
        chart_type: 'radar',
        data_source: 'REST',
        data: [13, 15, 51, 53],
    },
    {
        id: 1,
        chart_label: 'check1',
        chart_type: 'bar',
        data_source: 'REST',
        data: [13, 15, 51, 53],
    },
]

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'addData':
            return [...state, action.payload]
        case 'editData':
            const element = state.findIndex(
                (elem) => elem.id === action.payload.id,
            )
            state[element] = action.payload
            return state
        case 'deleteData':
            return state.filter((t) => t.id !== action.payload)
        default:
            return state
    }
}

export default data
