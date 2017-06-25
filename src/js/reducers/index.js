import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import Language from './Language'

export default combineReducers({
    routing,
    Language
})
