import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
    GET_SPONSOR: {
        next (state, {payload}) {
            return payload
        }
    }
}, initialState)
