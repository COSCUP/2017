import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import store from './stores/Store'
import { syncHistoryWithStore } from 'react-router-redux'
import Containers from './containers'

const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
    render () {
        return (
            <Router history={history}>
                <Route path="/" component={Containers.App}>
                    <Route path="intro" name="intro">
                        <IndexRoute component={Containers.intro.Home}/>
                    </Route>
                </Route>
            </Router>

        )
    }
}
