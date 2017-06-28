import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
// import classNames from 'classnames'
@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
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

        let depth, i, layer, layers, len, movement, topDistance, translate3d
        topDistance = this.state.offsetY
        layers = document.querySelectorAll("[data-type='parallax']")
        for (i = 0, len = layers.length; i < len; i++) {
            layer = layers[i]
            depth = layer.getAttribute('data-depth')
            movement = -(topDistance * depth)
            translate3d = 'translate3d(0, ' + movement + 'px, 0)'
            layer.style['-webkit-transform'] = translate3d
            layer.style['-moz-transform'] = translate3d
            layer.style['-ms-transform'] = translate3d
            layer.style['-o-transform'] = translate3d
            layer.style.transform = translate3d
        }
    }

    render () {
        return (
            <div className="footer">
            </div>
        )
    }
}, require('css/general/Footer.styl'))
