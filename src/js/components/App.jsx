require('babel-polyfill')
import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'
import classNames from 'classnames'
import _ from 'lodash'
import CSSModules from 'react-css-modules'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.blurSocialHandler = this.blurSocialHandler.bind(this)
        this.blurHistoryHandler = this.blurHistoryHandler.bind(this)
        this.state = {
            isBlurHistory: false,
            isBlurSocial: false
        }
    }
    blurSocialHandler () {
        let _isBlurSocial = this.state.isBlurSocial
        this.setState({
            isBlurSocial: !_isBlurSocial
        })
        let target = document.querySelector('body')
        target.style.overflow = (target.style.overflow === 'hidden' ? 'visible' : 'hidden')
    }
    blurHistoryHandler () {
        let _isBlurHistory = this.state.isBlurHistory
        this.setState({
            isBlurHistory: !_isBlurHistory
        })
        let target = document.querySelector('body')
        target.style.overflow = (target.style.overflow === 'hidden' ? 'visible' : 'hidden')
    }

    async componentDidMount () {
        await this.props.getTranslate()
        await this.props.getSocial()
        this.setState({
            loaded: true
        })
    }
    render () {
        if (!this.state.loaded) return null
        const { Social } = this.props
        console.log(this.state)
        return (
            <StyleRoot style={{
                height: '100%',
                width: '100%'
            }}>
                <div
                    className="mainPage"
                    // data-type='blur'
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                    <div className="content--wrapper" data-type='blur'>
                        { this.props.children }
                        <div className="content--footer">
                            <div className="content--footer--mobile">
                                <div className="btn-mobile" onClick={this.blurSocialHandler}>Social media</div>
                                <div className="btn-mobile" onClick={this.blurHistoryHandler}>歷屆網站</div>
                            </div>
                            <div className="content--footer--social">
                                {
                                    Social.map((social, id) => (
                                        <a href={social.link}>
                                            <img src={require(`static/social/${social.title}.png`)}/>
                                        </a>
                                    ))
                                }
                            </div>
                            <div className="content--footer--history">
                                {
                                    _.range(2006, 2017).map((year) => (
                                        <div key={year}>
                                            <a href={`http://coscup.org/${year}/`} target='_blank'>{year}</a>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                    { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
                    {/* 這裡是一些常用 component */}
                    <Containers.general.Navbar isIndex={this.props.location.pathname === '/'}/>
                    {
                        this.props.location.pathname === '/' ? (
                            <Containers.general.Banner />
                        ) : (
                            <Containers.general.SubpageBanner />
                        )
                    }
                    <Containers.general.Footer />
                    {/*  彈出 popout */}
                    <div className={classNames('indexpage--popOut--social', 'popOutMenu--mobile', {'active': this.state.isBlurSocial === true})} onClick={this.blurSocialHandler}>
                        <div className="popOutMenu--bg"></div>
                        <div className="popOutMenu--content">
                            <div className="content--title">Social media</div>
                            <ul>
                                {
                                    Social.map((social, id) => (
                                        <a href={social.link}>
                                            <img src={require(`static/social/green/g-${social.title}.png`)}/>
                                        </a>
                                    ))
                                }
                            </ul>
                            <div className="content--close">
                                <img src={require(`static/times.svg`)} />
                            </div>
                        </div>
                    </div>

                    <div className={classNames('indexpage--popOut--history', 'popOutMenu--mobile', {'active': this.state.isBlurHistory === true})} onClick={this.blurHistoryHandler}>
                        <div className="popOutMenu--bg"></div>
                        <div className="popOutMenu--content">
                            <div className="content--title">歷屆網站</div>
                            <ul>
                                {
                                    _.range(2016, 2006).map((sponsor, subid) => (
                                        <div key={subid} className='sponsor'>
                                            <div className='sponsor--sponsorimage'>
                                                <a target='_blank' href={`http://coscup.org/${sponsor}/`}>
                                                    <img src={require(`static/sponsor/appier.png`)} />
                                                </a>
                                            </div>
                                            <div className='sponsor--content--mobile'>
                                                <div className='sponsor--title'>
                                                    { sponsor }
                                                </div>
                                                <a target='_blank' href={sponsor}>
                                                    <img src='#' />
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </ul>
                            <div className="content--close">
                                <img src={require(`static/times.svg`)} />
                            </div>
                        </div>
                    </div>
                </div>

            </StyleRoot>
        )
    }
}, require('css/index.styl'))
