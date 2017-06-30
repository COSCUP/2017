import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
    GET_SOCIAL: {
        next (state, {payload}) {
            return payload
        }
    }
}, initialState)
