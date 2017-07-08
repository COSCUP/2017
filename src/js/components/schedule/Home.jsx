import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    static propTypes = {
    }
    render () {
        const { Language } = this.props
        return (
            <div
                style={{
                    width: '100%'
                }}>
                <div className="subPage">
                    <div className="mobile subpage--title">
                        <div className="title--text">{ this.props.Translate['schedule'][Language] }</div>
                    </div>
                    <div className="desktop subpage--title">
                        <div className="title--text">
                            <div> { this.props.Translate['schedule']['zh'] } </div>
                            <div className="divider" />
                            <div> { this.props.Translate['schedule']['en'] } </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}, require('css/schedule/Home.styl'))
