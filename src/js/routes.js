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
                    <Route path="schedule" name="schedule">
                        <IndexRoute component={Containers.schedule.Home}/>
                    </Route>
                    <Route path="transport" name="transport">
                        <IndexRoute component={Containers.transport.Home}/>
                    </Route>
                    <Route path="map" name="map">
                        <IndexRoute component={Containers.map.Home}/>
                    </Route>
                    <Route path="sponsor" name="sponsor">
                        <IndexRoute component={Containers.sponsor.Home}/>
                    </Route>
                    <Route path="staff" name="staff">
                        <IndexRoute component={Containers.staff.Home}/>
                    </Route>
                    <Route path="news" name="news">
                        <IndexRoute component={Containers.news.Home}/>
                    </Route>
                </Route>
            </Router>

        )
    }
}
