import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import Language from './Language'
import Sponsor from './Sponsor'
import Translate from './Translate'

export default combineReducers({
    routing,
    Language,
    Sponsor,
    Translate
})
