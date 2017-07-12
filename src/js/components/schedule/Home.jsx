import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import printf from 'printf'

export default CSSModules(class extends PureComponent {
    constructor (props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.contentHandler = this.contentHandler.bind(this)
        this.stickyNav = null
        this.sticky = ''
        this.wrapper = null
        this.periodList = []
        this.state = {
            currentBox: 2
        }
        this.ticking = false
        this.width = 0
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll, {passive: true})
        this.props.getSchedule()
        this.clickHandler(0)
        this.stickyNav = document.querySelector('div.sticky--nav')
        this.sticky = document.querySelector('div.sticky--nav > div')
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll, {passive: true})
    }

    clickHandler (target) {
        let _currentBox = this.state.currentBox
        if (_currentBox === target) {
            return
        }
        this.setState({
            currentBox: target
        })
        let boxes = document.querySelectorAll(`div[data-type='${target}']`)
        let i, len
        for (i = 0, len = boxes.length; i < len; i++) {
            let box = boxes[i]
            box.classList.toggle('active')
        }

        boxes = document.querySelectorAll(`div[data-type='${1 - target}']`)
        for (i = 0, len = boxes.length; i < len; i++) {
            let box = boxes[i]
            box.classList.remove('active')
        }
    }

    handleScroll (event) {
        var self = this
        var lastKnownScrollPosition = window.pageYOffset
        if (!self.ticking) {
            window.requestAnimationFrame(function () {
                // console.log('y: ', self.state.offsetY, 'wrapper: ', wrapper.offsetTop)

                // show sticky dom
                if (self.wrapper === null) {
                    self.wrapper = document.querySelector('div.schedule--wrapper')
                }

                if (lastKnownScrollPosition + 50 > self.wrapper.offsetTop) {
                    self.stickyNav.classList.add('active')
                } else {
                    self.stickyNav.classList.remove('active')
                }

                let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                if (self.periodList.length === 0) {
                    if (width < 720) {
                        self.stickyNav.classList.add('mobile')
                        // show content
                        self.periodList = document.querySelectorAll(`div[data-type='${self.state.currentBox}'] div.eachday--period`)
                    } else {
                        self.stickyNav.classList.remove('mobile')
                        // show content
                        self.periodList = document.querySelectorAll('div.eachday--period')
                    }
                } else if (width !== self.width) {
                    if (width < 720) {
                        self.stickyNav.classList.add('mobile')
                        // show content
                        self.periodList = document.querySelectorAll(`div[data-type='${self.state.currentBox}'] div.eachday--period`)
                    } else {
                        self.stickyNav.classList.remove('mobile')
                        // show content
                        self.periodList = document.querySelectorAll('div.eachday--period')
                    }
                    self.width = width
                }

                for (let i = 0; i < self.periodList.length; i++) {
                    if (lastKnownScrollPosition + 50 > self.periodList[i].offsetTop) {
                        // console.log('target[', i, ']: ', periodList[i].offsetTop, ', time: ', periodList[i].children[0].textContent)
                        // self.setState({
                        //     stickyContent: self.periodList[i].children[0].textContent
                        // })
                        self.sticky.textContent = self.periodList[i].children[0].textContent
                    }
                }
                self.ticking = false
            })
        }
        self.ticking = true
    }

    contentHandler (event) {
        let targetList = document.querySelectorAll('div.period--list.active')
        for (let i = 0; i < targetList.length; i++) {
            targetList[i].classList.remove('active')
        }
        if (event.target.classList[0] === 'period--list') {
            event.target.classList.add('active')
        } else {
            event.target.parentNode.classList.add('active')
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
                <div className="sticky--nav">
                    <div>{this.state.stickyContent}</div>
                </div>
                <main>
                    {
                        _.map(res, (daySchedule, day) => (
                            <div className="schedule--wrapper" key={day} data-type={day - 5}>
                                <div className="schedule--date">DAY {day - 4} (8/{day})</div>
                                <div className="schedule--eachday">
                                    {
                                        _.sortBy((daySchedule), (schedule) => (schedule[0].start)).map((timeSlot, id) => (
                                            <div className="eachday--period" key={id}>
                                                <div className="list--time">{timeSlot[0].start.getHours()} : {printf('%02d', timeSlot[0].start.getMinutes())}</div>
                                                <div className="period--list--wrapper">
                                                    {
                                                        _.map(timeSlot, (slot, sid) => (
                                                            <div className="period--list" key={sid} onClick={(e) => this.contentHandler(e)}>
                                                                <div className="list--title">
                                                                    {slot.subject}
                                                                </div>
                                                                <div className="list--info">
                                                                    Room {slot.room} - {(slot.end.getHours() * 60 + slot.end.getMinutes()) - (slot.start.getHours() * 60 + slot.start.getMinutes())} mins
                                                                </div>
                                                                <div className="list--content">
                                                                    <div className="content--author">
                                                                        <div
                                                                            className="author--avatar"
                                                                            style={{
                                                                                backgroundImage: `url(${slot.speaker.avatar})`
                                                                            }}
                                                                            >
                                                                            {/* <img src={`${slot.speaker.avatar}`}/> */}
                                                                        </div>
                                                                        <div className="author--mention">
                                                                            <h3>{slot.speaker.name}</h3>
                                                                            <p>{slot.speaker.bio}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="content--mention">
                                                                        {slot.summary}
                                                                    </div>
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
