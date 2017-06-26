import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import classNames from 'classnames'

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
                        <div className="lang--selector--mobile">
                            <div>
                                <span className={classNames({'active': language === 'en'})} onClick={() => this.props.putLanguage('en')}>EN</span>
                            </div>
                            <div>
                                <span className={classNames({'active': language === 'zh'})} onClick={() => this.props.putLanguage('zh')}>繁</span>
                            </div>
                        </div>
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
                        <div>
                            <Link to={'/'}>{ this.props.translate['register'][language] }</Link>
                        </div>
                    </div>
                </div>
                <div className="indexpage--content">
                    <div className="indexpage--section">
                        <div className="section--title">
                            <div>
                                <h2 className="title--en">ABOUT</h2>
                                <div>/</div>
                                <h2 className="title--ch">關於</h2>
                            </div>
                        </div>
                        <div className="section--content">
                            <div>
                                <p>
                                    COSCUP是由台灣開放原始碼社群聯合推動的年度研討會，起源於2006年，是台灣自由軟體運動(FOSSM)重要的推動者之一。
                                    活動包括有講座、攤位、社團同樂會等，除了邀請國際的重量級演講者之外，台灣本土的自由軟體推動者也經常在此發表演說，會議的發起人、工作人員與講者都是志願參與的志工。</p>
                                <p>COSCUP的宗旨在於提供一個聯結開放原始碼開發者、使用者與推廣者的平台。希望藉由每年一度的研討會，來推動自由及開放原始碼軟體(FLOSS)。由於有許多贊助商及熱心捐助者，所有議程都是免費參加，但因會場人數限制，通常在一開放網路報名後就會立刻額滿。</p>
                                <p>傳統商業軟體的使用者(Users)很少有機會能跟開發者(Coders)交流，</p>
                                <p>當軟體使用起來有問題，只能打技術支援電話，由客服人員為你服務，他或許已經盡其所能，但未必能解決你的問題。</p>
                                <p>如果問題是軟體的臭蟲，你只好痴痴地等待更新、或只能買新版本。</p>
                                <p>而你當初之所以選用Ａ軟體而不是Ｂ軟體，常常是聽信銷售員或同儕的推薦。</p>
                                <p>在這個行為模式下，使用者面對的是銷售員和客服，開發者面對的還是銷售員和客服，使用者遇到的問題無法直接反應到開發者手上。</p>
                            </div>
                        </div>
                    </div>
                    <div className="indexpage--section">
                        <div className="section--title">
                            <div>
                                <h2 className="title--en">SPONSORS</h2>
                                <div>/</div>
                                <h2 className="title--ch">贊助</h2>
                            </div>
                        </div>
                        <div className="section--content">
                            <div>
                                <p>
                                    COSCUP是由台灣開放原始碼社群聯合推動的年度研討會，起源於2006年，是台灣自由軟體運動(FOSSM)重要的推動者之一。
                                    活動包括有講座、攤位、社團同樂會等，除了邀請國際的重量級演講者之外，台灣本土的自由軟體推動者也經常在此發表演說，會議的發起人、工作人員與講者都是志願參與的志工。</p>
                                <p>COSCUP的宗旨在於提供一個聯結開放原始碼開發者、使用者與推廣者的平台。希望藉由每年一度的研討會，來推動自由及開放原始碼軟體(FLOSS)。由於有許多贊助商及熱心捐助者，所有議程都是免費參加，但因會場人數限制，通常在一開放網路報名後就會立刻額滿。</p>
                                <p>傳統商業軟體的使用者(Users)很少有機會能跟開發者(Coders)交流，</p>
                                <p>當軟體使用起來有問題，只能打技術支援電話，由客服人員為你服務，他或許已經盡其所能，但未必能解決你的問題。</p>
                                <p>如果問題是軟體的臭蟲，你只好痴痴地等待更新、或只能買新版本。</p>
                                <p>而你當初之所以選用Ａ軟體而不是Ｂ軟體，常常是聽信銷售員或同儕的推薦。</p>
                                <p>在這個行為模式下，使用者面對的是銷售員和客服，開發者面對的還是銷售員和客服，使用者遇到的問題無法直接反應到開發者手上。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}, require('css/general/IndexPage.styl'))
