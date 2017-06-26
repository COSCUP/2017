import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    static propTypes = {
    }
    render () {
        return (
            <div className="subPage">
                <div className="subpage subpage--title">
                    <div className="title--ch">地圖</div>
                    <span></span>
                    <div className="title--en">MAP</div>
                </div>
                <div className="map--wrapper"
                    style={{
                        width: '100%',
                        height: '100vw',
                        overflow: 'hidden',
                        textAlign: 'center'
                    }}>
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC5dVrGuTloVYvFsSA_id1IEp4cFZtLqL0&q=%E5%9C%8B%E7%AB%8B%E8%87%BA%E7%81%A3%E5%A4%A7%E5%AD%B8%E7%A4%BE%E6%9C%83%E7%A7%91%E5%AD%B8%E9%99%A2"
                        frameBorder="0"
                        style={{
                            width: '640px',
                            height: '480px',
                            border: 0
                        }}
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        )
    }
}, require('css/sponsor/Home.styl'))
