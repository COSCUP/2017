import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'
import CSSModules from 'react-css-modules'

@Radium
export default CSSModules(class extends Component {
    render () {
        return (
            <StyleRoot style={{
                height: '100%',
                width: '100%'
            }}>
                <div style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                }}>
                    <div className="content--wrapper">
                        { this.props.children }
                    </div>
                    { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
                    <Containers.general.Navbar />
                    <Containers.general.Banner />
                    <Containers.general.Footer />
                </div>
            </StyleRoot>
        )
    }
}, require('css/index.styl'))
