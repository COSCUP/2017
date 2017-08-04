import React, { Component } from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import store from './stores/Store'
import { syncHistoryWithStore } from 'react-router-redux'
import Containers from './containers'
import SessionTable from './views/sessionTable'

const history = syncHistoryWithStore(hashHistory, store)

export default class Root extends Component {
    render () {
        return (
            <Router history={history}>
                <Route path="/" component={Containers.App}>
                    <IndexRoute component={Containers.general.IndexPage}/>
                    <Route path="schedule(/:day(/:id))" component={SessionTable} />
                    <Route path="transport" name="transport">
                        <IndexRoute component={Containers.transport.Home}/>
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
