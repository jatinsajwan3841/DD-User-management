import { combineReducers } from 'redux'
import data from './data'
import logstate from './logstate'

const rootReducer = combineReducers({ logstate, data })

export default rootReducer
