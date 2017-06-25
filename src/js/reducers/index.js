import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import Language from './Language'
import Translate from './Translate'

export default combineReducers({
    routing,
    Language,
    Translate
})
