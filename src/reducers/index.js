import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import heroReducer from './heroReducer'

export const rootReducer = combineReducers({
    heroReducer,
  	routing: routerReducer
})