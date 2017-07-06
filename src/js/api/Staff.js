require('babel-polyfill')
import fetch from 'isomorphic-fetch'

export default {
    get: async () => {
        let res = null
        res = await fetch('https://raw.githubusercontent.com/COSCUP/coscup2017-website/master/src/json/staff.json')
        res = await res.json()
        return res
    }
}
