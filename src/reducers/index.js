import { combineReducers } from 'redux'
import data from './data'
import logstate from './logstate'
import users from './users'
const rootReducer = combineReducers({ users, logstate, data })

export default rootReducer
