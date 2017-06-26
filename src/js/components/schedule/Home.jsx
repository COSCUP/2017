import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    static propTypes = {
    }
    render () {
        return (
            <div className="subPage">
                <div className="subpage subpage--title">
                    <div className="title--ch">議程</div>
                    <span></span>
                    <div className="title--en">SCHEDULE</div>
                </div>
            </div>
        )
    }
}, require('css/sponsor/Home.styl'))
