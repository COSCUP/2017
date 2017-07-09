require('babel-polyfill')
import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'
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
        this.setState({
            loaded: true
        })
    }
    render () {
        if (!this.state.loaded) return null

        return (
            <StyleRoot style={{
                height: '100%',
                width: '100%'
            }}>
                <div className="mainPage">
                    <div className="content--wrapper" data-type='blur'>
                        { this.props.children }
                    </div>
                    {/* 這裡是一些常用 component */}
                    <Containers.general.Navbar isIndex={this.props.location.pathname === '/'}/>
                    {
                        this.props.location.pathname === '/' ? (
                            null
                        ) : (
                            <Containers.general.SubpageBanner />
                        )
                    }
                    <Containers.general.Footer />

                </div>
                { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
            </StyleRoot>
        )
    }
}, require('css/index.styl'))
