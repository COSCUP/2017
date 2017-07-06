import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
    GET_STAFF: {
        next (state, {payload}) {
            return payload
        }
    }
}, initialState)
