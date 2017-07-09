import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'

import FaClose from 'react-icons/lib/fa/close'
import GoLinkExternal from 'react-icons/lib/go/link-external'

export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.blurHandler = this.blurHandler.bind(this)
        this.blurSponsorHandler = this.blurSponsorHandler.bind(this)
        this.state = {
            isBlur: false,
            isSponsorBlur: false
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

    blurSponsorHandler (targetName) {
        console.log('target type: ', targetName)
        let _blur = this.state.isSponsorBlur
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        if (width > 720) {
            return ''
        }
        this.setState({
            isSponsorBlur: !_blur
        })

        let list = document.querySelectorAll("[data-type='blur']")
        for (let i = 0; i < list.length; i++) {
            list[i].classList.toggle('blur-in')
        }
        let target = document.querySelectorAll(`[data-type='${targetName}']`)
        for (let i = 0; i < target.length; i++) {
            target[i].classList.toggle('active')
        }
        target = document.querySelector('body')
        target.style.overflow = (target.style.overflow === 'hidden' ? 'visible' : 'hidden')
    }
    render () {
        const { Sponsor, Language } = this.props
        return (
            <div
                style={{
                    width: '100%'
                }}>
                <div className="subPage">
                    <div className="mobile subpage--title" onClick={this.blurHandler}>
                        <div className="popout--toggler"></div>
                        <div className="title--text">{ this.props.Translate['sponsor'][Language] }</div>
                        <div className="popout--toggler" onClick={this.blurHandler}></div>
                    </div>
                    <div className="desktop subpage--title">
                        <div className="title--text">
                            <div> { this.props.Translate['sponsor']['zh'] } </div>
                            <div className="divider" />
                            <div> { this.props.Translate['sponsor']['en'] } </div>
                        </div>
                    </div>
                </div>
                <div className='sponsor--sponsorlist'>
                    {
                        Sponsor.map((subSponsor, id) => (
                            <div className='sponsor--subSponsorlist' key={id}>
                                <div className='title--wrapper'>
                                    <div className='title'>
                                        { subSponsor.name[Language] }
                                    </div>
                                </div>
                                <div>
                                    {
                                        subSponsor.data.map((sponsor, subid) => (
                                            <div key={subid} className='sponsor'>
                                                <div className='sponsor--sponsorimage' onClick={() => this.blurSponsorHandler(sponsor.name[Language])}>
                                                    <div>
                                                        <img src={sponsor.logourl} />
                                                    </div>
                                                </div>
                                                <div className='sponsor--content--mobile'>
                                                    <div className='sponsor--title'>
                                                        { sponsor.name[Language] }
                                                    </div>
                                                    <a
                                                        style={{
                                                            color: '#9B9B9B',
                                                            display: 'flex'
                                                        }}
                                                        target='_blank' href={sponsor.logolink}>
                                                        <GoLinkExternal />
                                                    </a>
                                                </div>
                                                <div className='sponsor--content' data-type={sponsor.name[Language]}>
                                                    <div className="content--headimg">
                                                        <img src={sponsor.logourl} />
                                                    </div>
                                                    <div className='sponsor--title'>
                                                        { sponsor.name[Language] }
                                                    </div>
                                                    <div className='sponsor--description'>
                                                        { sponsor.intro[Language] }
                                                    </div>
                                                    <div className="content--close" onClick={() => this.blurSponsorHandler(sponsor.name[Language])}>
                                                        <FaClose
                                                            color='#009A79'
                                                          />
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

                <div className={classNames('sponsorlist--popOut', 'popOutMenu--mobile', {'active': this.state.isBlur === true})} onClick={this.blurHandler}>
                    <div className="popOutMenu--bg"></div>
                    <div className="popOutMenu--content">
                        <div className="content--title"> </div>
                        <ul>
                            <li>
                                <a href="#鑽石級">鑽石級</a>
                            </li>
                            <li>
                                <a href="#黃金級">黃金級</a>
                            </li>
                            <li>
                                <a href="#白銀級">白銀級</a>
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
}, require('css/sponsor/Home.styl'))
