require('babel-polyfill')
import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'
import CSSModules from 'react-css-modules'

@Radium
export default CSSModules(class extends Component {
    async componentDidMount () {
        await this.props.getTranslate()
        this.setState({
            loaded: true
        })
    }
    render () {
        if (!this.state.loaded) return null
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
                    {/* 這裡是一些常用 component */}
                    <Containers.general.Navbar isIndex={this.props.location.pathname === '/'}/>
                    {
                        this.props.location.pathname === '/'
                        ? <Containers.general.Banner />
                    : <Containers.general.SubpageBanner />
                    }
                    <Containers.general.Footer />
                </div>
            </StyleRoot>
        )
    }
}, require('css/index.styl'))
