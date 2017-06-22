import fetch from 'isomorphic-fetch'
import urlJoin from 'url-join'
import qs from 'query-string'
import { HOST, VERSION } from './Config'

const combinePayload = (res: Promise, payload?: { [key: string]: any }) => {
    return Promise.resolve(
        res.then((r) => ({
            ...r,
            payload
        }))
    )
}

export default (url: string, options?: { [key: string]: any }={}) => {
    let URL = urlJoin(HOST, VERSION, url)
    let body = options.body || {}
    options.credentials = 'include'
    const element = document.createElement('a')
    element.href = URL
    body = Object.assign(body, qs.parse(element.search))
    if (!options.method || options.method.toLowerCase() === 'get') {
        URL = `${element.href.replace(element.search, '')}?${qs.stringify(body)}`
    }
    return fetch(URL, options).then((res) => {
        if (res.status >= 200 && res.status < 300) {
            return combinePayload(res.json(), body)
        } else {
            return Promise.reject(combinePayload(res.json(), body))
        }
    })
}
