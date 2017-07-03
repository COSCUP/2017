import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import { IndexLink, Link } from 'react-router'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
        this.MenuWidth = this.MenuWidth.bind(this)
        this.MenuLeftOffset = this.MenuLeftOffset.bind(this)
        this.state = {
            offsetY: 0,
            animationActive: true
        }
        this.ticking = false
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll, {passive: true})
        this.setState({
            animationActive: this.props.NavbarConfig.isIndex
        })
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            animationActive: nextProps.NavbarConfig.isIndex
        })
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll (event) {
        this.setState({
            offsetY: window.pageYOffset
        })
        var self = this
        var lastKnownScrollPosition = window.pageYOffset
        if (!self.ticking) {
            window.requestAnimationFrame(function () {
                self.setState({
                    offsetY: lastKnownScrollPosition
                })
                self.ticking = false
            })
        }
        self.ticking = true
    }

    MenuWidth () {
        if (this.state.animationActive === true) {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            if (width < 720) {
                return ''
            }
            if (this.state.offsetY / 480 > 1) {
                return '100%'
            }
            let returnWidth = (80 + (20 * this.state.offsetY / 480)) + '%'
            return returnWidth
        }
        return ''
    }

    MenuLeftOffset () {
        if (this.state.animationActive === true) {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            if (width < 720) {
                return ''
            }
            if (this.state.offsetY / 480 > 1) {
                return '0%'
            }
            let returnWidth = (80 + (20 * this.state.offsetY / 480))
            return ((100 - returnWidth) / 2) + '%'
        }
        return ''
    }

    render () {
        const language = this.props.language
        return (
            <div
                className={ classNames('navbar', {'navbar--fixed': (!this.state.animationActive)})}
                style={{
                    width: this.MenuWidth(),
                    left: this.MenuLeftOffset()
                }}>
                <div className="logo">
                    <Link to={'/'}>
                        <img src={require('static/logo.png')}/>
                    </Link>
                </div>
                <div className="menu-list">
                    <ul className="tag-selector">
                        <li>
                            <IndexLink activeClassName="active" to='/'>{ this.props.translate['intro'][language] }</IndexLink>
                        </li>
                        <li>
                            <Link activeClassName="active" to='/schedule'>{ this.props.translate['schedule'][language] }</Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to='/transport'>{ this.props.translate['transport'][language] }</Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to='/sponsor'>{ this.props.translate['sponsor'][language] }</Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to='/staff'>{ this.props.translate['staff'][language] }</Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to='/news'>{ this.props.translate['news'][language] }</Link>
                        </li>
                    </ul>
                    <ul className="lang-selector">
                        <span className="separator"></span>
                        <li className={classNames({'active': language === 'en'})} onClick={() => this.props.putLanguage('en')}>EN</li>
                        <li className={classNames({'active': language === 'zh'})} onClick={() => this.props.putLanguage('zh')}>繁</li>
                    </ul>
                </div>
            </div>
        )
    }
}, require('css/general/Navbar.styl'))
