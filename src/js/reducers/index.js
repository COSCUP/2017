import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import Language from './Language'
import Social from './Social'
import Sponsor from './Sponsor'
import Staff from './Staff'
import Translate from './Translate'

export default combineReducers({
    routing,
    Language,
    Social,
    Sponsor,
    Staff,
    Translate
})
