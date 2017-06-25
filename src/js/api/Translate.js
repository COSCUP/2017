require('babel-polyfill')
import fetch from 'isomorphic-fetch'

export default {
    get: async () => {
        let res = null
        res = await fetch('https://raw.githubusercontent.com/COSCUP/coscup2017-website/master/src/json/translate.json')
        res = await res.json()
        return res
    }
}
