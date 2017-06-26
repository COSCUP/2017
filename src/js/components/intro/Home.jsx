import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    static propTypes = {
    }
    render () {
        return (
            <div>
                <div className="subpage subpage--title">
                    <div className="title--ch">介紹</div>
                    <span></span>
                    <div className="title--en">ABOUT</div>
                </div>
            </div>
        )
    }
}, require('css/intro/Home.styl'))
