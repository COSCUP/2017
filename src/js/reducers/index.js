import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import Language from './Language'
import Schedule from './Schedule'
import Social from './Social'
import Sponsor from './Sponsor'
import Staff from './Staff'
import Translate from './Translate'

export default combineReducers({
    routing,
    Language,
    Schedule,
    Social,
    Sponsor,
    Staff,
    Translate
})
