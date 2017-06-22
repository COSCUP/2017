import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'
import CSSModules from 'react-css-modules'

@Radium
export default CSSModules(class extends Component {
    render () {
        return (
            <StyleRoot>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    { this.props.children }
                    { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
                    <Containers.navbar.Navbar />
                </div>
            </StyleRoot>
        )
    }
}, require('css/index.styl'))
