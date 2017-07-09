import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
    GET_SCHEDULE: {
        next (state, {payload}) {
            return payload
        }
    }
}, initialState)
