import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'

import FaClose from 'react-icons/lib/fa/close'
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.blurHandler = this.blurHandler.bind(this)
        this.state = {
            isBlur: false
        }
    }

    blurHandler () {
        let _blur = this.state.isBlur
        this.setState({
            isBlur: !_blur
        })

        let list = document.querySelectorAll("[data-type='blur']")
        for (let i = 0; i < list.length; i++) {
            list[i].classList.toggle('blur-in')
        }
        let target = document.querySelector('body')
        target.style.overflow = (target.style.overflow === 'hidden' ? 'visible' : 'hidden')
    }
    componentDidMount () {
        this.props.getStaff()
    }
    render () {
        const { Staff, Language } = this.props
        let mobileTitle = null
        if (window.location.hash.match('mode=app') === null) {
            mobileTitle =
                <div className="mobile subpage--title">
                    <div className="popout--toggler"></div>
                    <div className="title--text">{ this.props.Translate['staff'][Language] }</div>
                    <div className="popout--toggler" onClick={this.blurHandler}></div>
                </div>
        }
        return (
            <div>
                <header className="subPage">
                    {mobileTitle}
                    <div className="desktop subpage--title">
                        <div className="title--text">
                            <div> { this.props.Translate['staff']['zh'] } </div>
                            <div className="divider" />
                            <div> { this.props.Translate['staff']['en'] } </div>
                        </div>
                    </div>
                </header>
                <main className='stafflist'>
                    {
                        Staff.map((StaffList, id) => (
                            <a name={'#' + StaffList['name']}>
                                <div key={id} className='card'>
                                    <div className='title'>{StaffList['name']}</div>
                                    <div className='content'>
                                        {
                                            StaffList.data.map((staff, subid) => (
                                                <div key={subid} className='person'>
                                                    <div className='person--wrapper'>
                                                        <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                                        <div className='name'>{staff.name}</div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </main>
                <div className={classNames('stafflist--popOut', 'popOutMenu--mobile', {'active': this.state.isBlur === true})} onClick={this.blurHandler}>
                    <div className="popOutMenu--bg"></div>
                    <div className="popOutMenu--content">
                        <div className="content--title"> </div>
                        <ul>
                            <li>
                                <a href="#總召">總召</a>
                            </li>
                            <li>
                                <a href="#總召">記錄組</a>
                            </li>
                            <li>
                                <a href="#總召">課程委員組</a>
                            </li>
                        </ul>
                        <div className="content--close">
                            <FaClose
                                color='#009A79'
                              />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}, require('css/staff/Home.styl'))
