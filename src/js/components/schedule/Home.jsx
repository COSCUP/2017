import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import _ from 'lodash'

export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
        this.state = {
            currentBox: 2
        }
    }
    componentDidMount () {
        this.props.getSchedule()
        // this.clickHandler(1)
    }
    clickHandler (target) {
        let _currentBox = this.state.currentBox
        console.log('compare: ', _currentBox, target)
        if (_currentBox === target) {
            return
        }
        this.setState({
            currentBox: target
        })
        let boxes = document.querySelectorAll(`div[data-type='${target}']`)
        console.log(boxes)
        let i, len
        for (i = 0, len = boxes.length; i < len; i++) {
            let box = boxes[i]
            box.classList.toggle('active')
        }

        boxes = document.querySelectorAll(`div[data-type='${1 - target}']`)
        console.log(boxes)
        for (i = 0, len = boxes.length; i < len; i++) {
            let box = boxes[i]
            box.classList.remove('active')
        }
    }
    render () {
        const { Schedule, Language } = this.props
        let res
        res = _.map(Schedule, (slot) => ({
            ...slot,
            start: new Date(slot.start),
            end: new Date(slot.end)
        }))
        res = _.groupBy(res, (schedule) => (schedule.start))
        res = _.groupBy(res, (day) => {
            return (day[0].start).getDate()
        })
        return (
            <div>
                <header className="subPage">
                    <div className="mobile subpage--title">
                        <div className="title--text">{ this.props.Translate['schedule'][Language] }</div>
                        <div className="date--picker">
                            <div data-type='0' onClick={() => this.clickHandler(0)}>DAY 1 (8/5)</div>
                            <div data-type='1' onClick={() => this.clickHandler(1)}>DAY 2 (8/6)</div>
                        </div>
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
                            <div className="schedule--wrapper" key={day} data-type={day - 5}>
                                <div className="schedule--date">DAY {day - 4} (8/{day})</div>
                                <div className="schedule--eachday">
                                    {
                                        _.sortBy((daySchedule), (schedule) => (schedule[0].start)).map((timeSlot, id) => (
                                            <div className="eachday--period" key={id}>
                                                <div className="list--time">{timeSlot[0].start.getHours()} : {timeSlot[0].start.getMinutes()}</div>
                                                <div className="period--list--wrapper">
                                                    {
                                                        _.map(timeSlot, (slot, sid) => (
                                                            <div className="period--list" key={sid}>
                                                                <div className="list--title">
                                                                    {slot.subject}
                                                                </div>
                                                                <div className="list--info">
                                                                    Room {slot.room} - {(slot.end.getHours() * 60 + slot.end.getMinutes()) - (slot.start.getHours() * 60 + slot.start.getMinutes())} mins
                                                                </div>
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
