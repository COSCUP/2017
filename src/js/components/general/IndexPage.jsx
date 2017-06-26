import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
// import classNames from 'classnames'
@Radium
export default CSSModules(class extends Component {
    // constructor (props) {
    //     super(props)
    // }

    render () {
        const language = this.props.language
        return (
            <div className="indexpage">
                <div className="title--wrapper">
                    <div className="text--wrapper mobile">
                        <div className="title--main">COSCUP</div>
                        <div className="title--sub">開源人年會</div>
                        <div className="title--date">2017.8.5-6</div>
                        <span className="separator"></span>
                        <div className="title--place">@臺灣大學社會科學院</div>
                    </div>
                    <div className="text--wrapper desktop">
                        <div className="title--date">2017.8.5-6</div>
                        <div className="title--main">COSCUP</div>
                        <div className="title--sub">開源人年會 @臺灣大學社會科學院</div>
                        <span className="separator"></span>
                    </div>
                    <div className="button--wrapper">
                        <div>
                            <Link to={'/intro'}>{ this.props.translate['intro'][language] }</Link>
                        </div>
                        <div>> REGISTER</div>
                    </div>
                </div>
            </div>
        )
    }
}, require('css/general/IndexPage.styl'))
