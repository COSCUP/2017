import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    static propTypes = {
    }
    render () {
        const language = this.props.language
        return (
            <div className="subPage">
                <div className="subpage subpage--title">
                    <div className="subpage subpage--title">
                        <div className="title--text">{ this.props.translate['transport'][language] }</div>
                    </div>
                </div>
            </div>
        )
    }
}, require('css/sponsor/Home.styl'))
