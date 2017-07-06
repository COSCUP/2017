require('babel-polyfill')
import fetch from 'isomorphic-fetch'

export default {
    get: async () => {
        let res = null
        res = await fetch('https://coscup.org/2017-assets/json/staff.json')
        res = await res.json()
        return res
    }
}
