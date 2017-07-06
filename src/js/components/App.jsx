require('babel-polyfill')
import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'
// import classNames from 'classnames'
import _ from 'lodash'
import CSSModules from 'react-css-modules'

@Radium
export default CSSModules(class extends Component {
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
                            <div>

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
                    {
                    /*
                    <div className={classNames('popOutMenu', 'blur-in')}>
                        <div className="popOutMenu--bg"></div>
                        <div className="popOutMenu--content">
                            XDDD
                        </div>
                    </div>
                    */
                }
                    <Containers.general.Navbar isIndex={this.props.location.pathname === '/'}/>
                    {
                        this.props.location.pathname === '/' ? (
                            <Containers.general.Banner />
                        ) : (
                            <Containers.general.SubpageBanner />
                        )
                    }
                    <Containers.general.Footer />
                </div>

            </StyleRoot>
        )
    }
}, require('css/index.styl'))
