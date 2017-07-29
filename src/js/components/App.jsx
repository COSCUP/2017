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

        window.location.hash = window.decodeURIComponent(window.location.hash)
        const scrollToAnchor = () => {
            const hashParts = window.location.hash.split('#')
            if (hashParts.length > 2) {
                /*
                const hash = hashParts.slice(-1)[0]
                document.querySelector(`#${hash}`).scrollIntoView(true)
                document.getElementById(hash).scrollTop += 100
                */
            } else {
                window.scrollTo(0, 0)
            }
        }
        scrollToAnchor()
        window.onhashchange = scrollToAnchor
    }
    render () {
        if (!this.state.loaded) return null
        let mobileNavber = null
        if (window.location.search.match('mode=app') === null) {
            mobileNavber = <Containers.general.Navbar isIndex={this.props.location.pathname === '/'}/>
        }
        return (
            <StyleRoot>
                <div className="container">
                    {mobileNavber}
                    <div className="content--wrapper" data-type='blur'>
                        { this.props.children }
                    </div>
                    <Containers.general.Footer />

                </div>
                { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
            </StyleRoot>
        )
    }
}, require('css/index.styl'))
