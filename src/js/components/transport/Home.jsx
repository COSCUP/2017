import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    static propTypes = {
    }
    render () {
        return (
            <div>
                <div className="subpage subpage--title">
                    <div className="title--ch">交通</div>
                    <span></span>
                    <div className="title--en">TRANSPORT</div>
                </div>
            </div>
        )
    }
}, require('css/sponsor/Home.styl'))
