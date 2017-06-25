import { handleActions } from 'redux-actions'

const initialState = {}

export default handleActions({
    GET_TRANSLATE: {
        next (state, {payload}) {
            return payload
        }
    }
}, initialState)
