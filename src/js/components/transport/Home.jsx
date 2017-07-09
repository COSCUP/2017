import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'

@Radium
export default CSSModules(class extends Component {
    render () {
        const { Language } = this.props
        return (
            <div
                style={{
                    width: '100%'
                }}>
                <div className="subPage">
                    <div className="mobile subpage--title">
                        <div className="popout--toggler"></div>
                        <div className="title--text">{ this.props.Translate['transport'][Language] }</div>
                        <div className="popout--toggler"></div>
                    </div>
                    <div className="desktop subpage--title">
                        <div className="title--text">
                            <div> { this.props.Translate['transport']['zh'] } </div>
                            <div className="divider" />
                            <div> { this.props.Translate['transport']['en'] } </div>
                        </div>
                    </div>
                </div>
                {
                    Language === 'zh' ? (
                        <div className='transport--way'>
                            <div className='card'>
                                <div className="M">
                                    <img src={require(`static/transport/metro.png`)}/>
                                </div>
                                <div className='title'>大眾運輸</div>
                                <div className='content'>
                                    <p>捷運科技大樓站（文湖線）：捷運科技大樓站出口左轉，沿著復興南路步行至辛亥路交叉口，過馬路即可抵達臺大北門，右手邊大樓即為臺大社會科學院，步行路程約 10 分鐘。</p>
                                    <p>公車復興南路口站(和平東路)可沿著復興南路步行至辛亥路交叉口，過馬路即可抵達臺大北門，右手邊大樓即為臺大社會科學院，步行路程約 10 分鐘。</p>
                                </div>
                            </div>
                            <div className='card'>
                                <div className="M">
                                    <img src={require(`static/transport/park.png`)}/>
                                </div>
                                <div className='title'>開車</div>
                                <div className='content'>
                                    <p>臺大社會科學院大樓位於臺大校總區北門（辛亥路與復興南路交叉口的西南角）的西側，靠近法律系霖澤館。停車場計時收費，位於本院大樓地下室 B1 和 B2（建議停 B2，停車位多而方便），入口 請 </p>
                                    <p>1.由復興南路往南穿過辛亥路進入臺大北門，再右轉進入停車場。</p>
                                    <p>2.由辛亥路往東行駛，在復興南路口右轉進入台大北門，50 公尺後再右轉進入停車場。</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='transport--way'>
                            <div className='card'>
                                <div className="M">
                                    <img src={require(`static/transport/metro.png`)}/>
                                </div>
                                <div className='title'>MRT Information</div>
                                <div className='content'>
                                    <p>Please get off at Technology Building Station (MRT Brown Line), walk southward along FuXing South Road, then you may reach the XinHai Entrance of the National Taiwan University(NTU).</p>
                                    <p>The College of Social Sciences Building will be at the right side of the XinHai Entrance of the National Taiwan University(NTU).</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div
                    style={{
                        margin: '0 -50px 50px',
                        width: '100vw',
                        overflow: 'hidden',
                        textAlign: 'center',
                        '@media (max-width: 720px)': {
                            margin: '0 0px 50px'
                        }
                    }}>
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC5dVrGuTloVYvFsSA_id1IEp4cFZtLqL0&q=%E5%9C%8B%E7%AB%8B%E8%87%BA%E7%81%A3%E5%A4%A7%E5%AD%B8%E7%A4%BE%E6%9C%83%E7%A7%91%E5%AD%B8%E9%99%A2"
                        frameBorder="0"
                        style={{
                            width: '100%',
                            height: '480px',
                            border: 0
                        }}
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        )
    }
}, require('css/transport/Home.styl'))
