import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import { Link } from 'react-router'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
        this.MenuWidth = this.MenuWidth.bind(this)
        this.MenuTopOffset = this.MenuTopOffset.bind(this)
        this.state = {
            offsetY: 0,
            animationActive: true
        }
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll)
        console.log(this.props)
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
        console.log(this.props)
    }

    handleScroll (event) {
        this.setState({
            offsetY: window.pageYOffset
        })
    }

    MenuWidth () {
        if (this.state.animationActive === true) {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            if (width < 720) {
                return ''
            }
            if (this.state.offsetY / 1000 > 1) {
                return '100%'
            }
            let returnWidth = (80 + (20 * this.state.offsetY / 1000)) + '%'
            return returnWidth
        }
        return ''
    }

    MenuTopOffset () {
        if (this.state.animationActive === true) {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            if (width < 720) {
                return ''
            }
            if (this.state.offsetY / 1000 > 1) {
                return '0%'
            }
            let returnWidth = (70 - (70 * this.state.offsetY / 1000)) + '%'
            return returnWidth
        }
        return ''
    }

    render () {
        const language = this.props.language
        return (
            <div
                className={ classNames('navbar', {'navbar--fixed': (!this.state.animationActive || this.state.offsetY > 1000)}, {'navbar--abs': (this.state.animationActive && this.state.offsetY < 1000)})}
                style={{
                    top: this.MenuTopOffset(),
                    width: this.MenuWidth()
                }}>
                <div className="logo">
                    <Link to={'/'}>
                        <img src={require('static/logo.png')}/>
                    </Link>
                </div>
                <div className="menu-list">
                    <ul className="tag-selector">
                        <li className="active">
                            <Link to={'/intro'}>{ this.props.translate['intro'][language] }</Link>
                        </li>
                        <li className="noactive">
                            <Link to={'/schedule'}>{ this.props.translate['schedule'][language] }</Link>
                        </li>
                        <li className="noactive">
                            <Link to={'/transport'}>{ this.props.translate['transport'][language] }</Link>
                        </li>
                        <li className="noactive">
                            <Link to={'/map'}>{ this.props.translate['map'][language] }</Link>
                        </li>
                        <li className="noactive">
                            <Link to={'/sponsor'}>{ this.props.translate['sponsor'][language] }</Link>
                        </li>
                        <li className="noactive">
                            <Link to={'/staff'}>{ this.props.translate['staff'][language] }</Link>
                        </li>
                        <li className="noactive">
                            <Link to={'/news'}>{ this.props.translate['news'][language] }</Link>
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
