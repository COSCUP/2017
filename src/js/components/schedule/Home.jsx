import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import _ from 'lodash'

export default CSSModules(class extends Component {
    componentDidMount () {
        this.props.getSchedule()
    }
    render () {
        const { Schedule, Language } = this.props
        let res
        res = _.groupBy(Schedule, (schedule) => (schedule.start))
        res = _.groupBy(res, (day) => {
            return (new Date(day[0].start)).getDate()
        })
        return (
            <div>
                <header className="subPage">
                    <div className="mobile subpage--title">
                        <div className="title--text">{ this.props.Translate['schedule'][Language] }</div>
                    </div>
                    <div className="desktop subpage--title">
                        <div className="title--text">
                            <div> { this.props.Translate['schedule']['zh'] } </div>
                            <div className="divider" />
                            <div> { this.props.Translate['schedule']['en'] } </div>
                        </div>
                    </div>
                </header>
                <main>
                    {
                        _.map(res, (daySchedule, day) => (
                            <div key={day}>
                                <div>{day}</div>
                                <div>
                                    {
                                        _.sortBy((daySchedule), (schedule) => (schedule[0].start)).map((timeSlot, id) => (
                                            <div key={id}>
                                                <div>{timeSlot[0].start}</div>
                                                <div>
                                                    {
                                                        _.map(timeSlot, (slot, sid) => (
                                                            <div key={sid}>
                                                                {slot.room}
                                                                {slot.community}
                                                                {slot.subject}
                                                                {slot.start}
                                                                {slot.end}
                                                                {slot.lang}
                                                                {slot.speaker.name}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </main>
            </div>
        )
    }
}, require('css/schedule/Home.styl'))
