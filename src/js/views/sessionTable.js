import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
    translations: state.Translate,
    locale: state.Language,
    sessions: state.Schedule,
    day: ownProps.params.day,
    id: ownProps.params.id
})

const mapDispatchToProps = (dispatch) => ({
    getSchedule: () => dispatch(Actions.Schedule.get())
})

function getTimeString (date) {
    const time = date instanceof Date ? date : (new Date(date))
    return paddingZero(time.getHours()) + ':' + paddingZero(time.getMinutes())
}

function getTimeSlug (date) {
    const time = date instanceof Date ? date : new Date(date)
    return paddingZero(time.getHours()) + paddingZero(time.getMinutes())
}

function paddingZero (number) {
    return number < 10 ? '0' + number : number.toString()
}

function createId (session) {
    return session.room + getTimeSlug(session.start)
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
            .map(session => Object.assign({}, session, {id: createId(session)}))
            .sort((a, b) => (new Date(a.start)).getTime() - (new Date(b.start)).getTime())
        const times = sessions.reduce((time, session) => time.concat(new Date(session.start), new Date(session.end)), [])
            .filter(uniqueArray)
            .sort()
        const starts = sessions.reduce((time, session) => time.concat(new Date(session.start)), [])
            .sort()
        const modal = this.props.id && sessions.find(session => createId(session) === this.props.id)
        /* const tracks = this.props.sessions.map(session => session.community)
            .filter(community => !!community)
            .filter(uniqueArray) */
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
                    <nav className="days">
                        <Link className={day === 5 ? 'active' : null} to="sessions/day1">DAY 1 (8/5)</Link>
                        <Link className={day === 6 ? 'active' : null} to="sessions/day2">DAY 2 (8/6)</Link>
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
                        '--list': starts.map((time, i) => {
                            return (i > 0 && time.getTime() === starts[i - 1].getTime())
                            ? 'auto'
                            : '[t' + getTimeSlug(time) + '] auto auto'
                        }).join(' '),
                        '--table': times.map(time => '[t' + getTimeSlug(time) + '] auto').join(' ')
                    }}>
                        {starts.filter(uniqueArray).map(time =>
                        <li key={time.getTime()} className="time" style={{
                            gridRowStart: 't' + getTimeSlug(time)
                        }}>
                            {paddingZero(time.getHours()) + ':' + paddingZero(time.getMinutes())}
                        </li>)}
                        {sessions.map(session =>
                        <li key={session.room + session.start} className="session" style={{
                            '--room': 'room' + session.room,
                            '--start': 't' + getTimeSlug(session.start),
                            '--end': 't' + getTimeSlug(session.end)
                        }}>
                            <Link to={'sessions/' + this.props.day + '/' + createId(session)}>
                                <article>
                                    <div className="period">
                                        <span className="start">{getTimeString(session.start)}</span>
                                        &nbsp;-&nbsp;
                                        <span className="end">{getTimeString(session.end)}</span>
                                    </div>
                                    <h4>{session.subject}</h4>
                                </article>
                            </Link>
                        </li>)}
                    </ul>
                </main>
                {modal && <div className="modal">
                    <span className="close" onClick={this.props.router.goBack}>×</span>
                    <article>
                        <header>
                            <h4>{modal.subject}</h4>
                            <div className="community">{modal.community}</div>
                            <div className="location">Room {modal.room}</div>
                            <div className="period">
                                <span className="start">{getTimeString(modal.start)}</span>
                                -
                                <span className="end">{getTimeString(modal.end)}</span>
                            </div>
                            <div className="language">{modal.lang}</div>
                        </header>
                        <p>{modal.summary}</p>
                        <footer>
                            <div className="speaker">
                                <img src={modal.speaker.avatar} />
                                <strong>{modal.speaker.name}</strong>
                                <p>{modal.speaker.bio}</p>
                            </div>
                        </footer>
                    </article>
                </div>}
            </div>
        )
    }
}

SessionsTable.defaultProps = {
    day: 'day1'
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionsTable)
