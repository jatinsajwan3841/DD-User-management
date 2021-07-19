import { createStore } from 'redux'
import rootReducer from './reducers/index'

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch {
        // ignore write errors
    }
}

const persistedState = loadState()

const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => {
    saveState({
        logstate: store.getState().logstate,
        data: store.getState().data,
        users: store.getState().users,
    })
})

export default store
