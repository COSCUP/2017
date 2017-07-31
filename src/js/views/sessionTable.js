import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
    translations: state.Translate,
    locale: state.Language,
    sessions: state.Schedule,
    day: ownProps.params.day
})

const mapDispatchToProps = (dispatch) => ({
    getSchedule: () => dispatch(Actions.Schedule.get())
})

function getTimeSlug (time) {
    return paddingZero(time.getHours()) + paddingZero(time.getMinutes())
}

function paddingZero (number) {
    return number < 10 ? '0' + number : number.toString()
}

function uniqueArray (v, i, a) {
    return a.findIndex(date => date.valueOf() === a[i].valueOf()) === i
}

class SessionsTable extends Component {
    componentDidMount () {
        this.props.getSchedule()
    }
    render () {
        const day = this.props.day === 'day2' ? 6 : 5
        const sessions = this.props.sessions.filter(session => (new Date(session.start)).getDate() === day)
        const times = sessions.reduce((time, session) => time.concat(new Date(session.start), new Date(session.end)), [])
            .filter(uniqueArray)
            .sort()
        const tracks = this.props.sessions.map(session => session.community)
            .filter(community => !!community)
            .filter(uniqueArray)
        console.log(tracks)
        return (
            <div>
                <header className="subPage">
                    <div className="desktop subpage--title">
                        <div className="title--text">
                            <div> { this.props.translations['schedule']['zh'] } </div>
                            <div className="divider" />
                            <div> { this.props.translations['schedule']['en'] } </div>
                        </div>
                    </div>
                </header>
                <main>
                    <nav>
                        <Link to="sessions/day1">DAY 1 (8/5)</Link>
                        <Link to="sessions/day2">DAY 2 (8/6)</Link>
                    </nav>
                    <ul className="locations">
                        <li>Room <strong>101</strong></li>
                        <li>Room <strong>201</strong></li>
                        <li>Room <strong>202</strong></li>
                        <li>Room <strong>303</strong></li>
                        <li>Room <strong>305</strong></li>
                        <li>Room <strong>306</strong></li>
                        <li>Room <strong>307</strong></li>
                        <li>Room <strong>403</strong></li>
                    </ul>
                    <ul className="sessions" style={{
                        gridTemplateRows: times.map(time => '[t' + getTimeSlug(time) + '] auto').join(' ')
                    }}>
                        {times.map(time =>
                        <li key={time.getTime()} className="time" style={{
                            gridRowStart: 't' + getTimeSlug(time)
                        }}>
                            {paddingZero(time.getHours()) + ':' + paddingZero(time.getMinutes())}
                        </li>)}
                        {sessions.map(session =>
                        <li key={session.room + session.start} className="session" style={{
                            gridColumn: 'room' + session.room,
                            gridRowStart: 't' + getTimeSlug(new Date(session.start)),
                            gridRowEnd: 't' + getTimeSlug(new Date(session.end))
                        }}>
                            <article>
                                <h4>{session.subject}</h4>
                            </article>
                        </li>)}
                    </ul>
                </main>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionsTable)
