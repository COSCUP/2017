import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
        this.MenuWidth = this.MenuWidth.bind(this)
        this.MenuTopOffset = this.MenuTopOffset.bind(this)
        this.state = {
            offsetY: 0
        }
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll (event) {
        this.setState({
            offsetY: window.pageYOffset
        })
    }

    MenuWidth () {
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

    MenuTopOffset () {
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

    render () {
        return (
            <div
                className={ classNames('navbar', {'navbar--fixed': this.state.offsetY > 1000}, {'navbar--abs': this.state.offsetY < 1000})}
                style={{
                    top: this.MenuTopOffset(),
                    width: this.MenuWidth()
                }}>
                <div className="logo">
                    <img src={require('static/logo.png')}/>
                </div>
                <div className="menu-list">
                    <ul className="tag-selector">
                        <li className="active">intro</li>
                        <li className="noactive">schedule</li>
                        <li className="noactive">transport</li>
                        <li className="noactive">map</li>
                        <li className="noactive">sponsor</li>
                        <li className="noactive">staff</li>
                        <li className="noactive">news</li>
                    </ul>
                    <ul className="lang-selector">
                        <span className="separator"></span>
                        <li className="active">EN</li>
                        <li className="noactive">繁</li>
                    </ul>
                </div>
            </div>
        )
    }
}, require('css/general/Navbar.styl'))
