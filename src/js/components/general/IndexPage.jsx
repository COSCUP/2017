import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'

@Radium
export default CSSModules(class extends Component {
    scrollToIntro (event) {
        event.preventDefault()
        window.scroll(0, window.document.getElementById('intro').offsetTop - 100)
    }

    render () {
        const language = this.props.language
        return (
            <div id="home" className="indexpage">
                <header className="title--wrapper">
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
                            <a href='#' onClick={this.scrollToIntro.bind(this)}>{ this.props.translate['intro'][language] }</a>
                        </div>
                        <div>
                            <a href='https://coscup2017.kktix.cc/events/coscup2017regist'>{ this.props.translate['register'][language] }</a>
                        </div>
                    </div>
                </header>
                <main className="indexpage--content">
                    <div id="intro" className="indexpage--section">
                        <div className="section--title">
                            <div>
                                <h2 className="title--en">ABOUT</h2>
                                <div>/</div>
                                <h2 className="title--ch">關於</h2>
                            </div>
                        </div>
                        <div className="section--content">
                            {
                                language === 'zh' ? (
                                    <div>
                                        <p>COSCUP是由台灣開放原始碼社群聯合推動的年度研討會，起源於2006年，是台灣自由軟體運動(FOSSM)重要的推動者之一。活動包括有講座、攤位、社團同樂會等，除了邀請國際的重量級演講者之外，台灣本土的自由軟體推動者也經常在此發表演說，會議的發起人、工作人員與講者都是志願參與的志工。COSCUP的宗旨在於提供一個聯結開放原始碼開發者、使用者與推廣者的平台。希望藉由每年一度的研討會，來推動自由及開放原始碼軟體(FLOSS)。由於有許多贊助商及熱心捐助者，所有議程都是免費參加，但因會場人數限制，通常在一開放網路報名後就會立刻額滿。</p>
                                        <p>傳統商業軟體的使用者(Users)很少有機會能跟開發者(Coders)交流，當軟體使用起來有問題，只能打技術支援電話，由客服人員為你服務，他或許已經盡其所能，但未必能解決你的問題。如果問題是軟體的臭蟲，你只好痴痴地等待更新、或只能買新版本。而你當初之所以選用Ａ軟體而不是Ｂ軟體，常常是聽信銷售員或同儕的推薦。在這個行為模式下，使用者面對的是銷售員和客服，開發者面對的還是銷售員和客服，使用者遇到的問題無法直接反應到開發者手上。</p>

                                        <p>開放原始碼(Open source)是在 1998 年出現的名詞，大家早已耳熟能詳。這種在網路上已經進行二、三十年的軟體開發模式之所以能成功，有許多原因。其中一個極為關鍵的因素，就是開發者與使用者的直接接觸。無屏障的交流加速了問題的回報和修補機制，而當這個機制被網路效應放大到極限時，Linus 定律就出現了：「臭蟲難逃眾人法眼」 (With enough eyeballs, all bugs are shallow) ，軟體品質因此顯著提昇。在開放原始碼的模式中，開發者和使用者中間的人不再是銷售員或客服，而是讓軟體更容易被接受的推廣者 (Promoters)，他們打包套件讓軟體更好裝、寫說明文件讓軟體更易學、辦推廣活動讓更多人接觸到好軟體、在網路上回答問題解決使用者的疑惑，而且不會把開發者藏在背後產生資訊的不對稱。</p>

                                        <p>開發者(Coders)、使用者(Users) 和推廣者(Promoters)是讓自由及開放原始碼軟體發光發熱的三大支柱，這個研討會就是專為這三種人舉辦的：你可以是 A 軟體的開發者、B 軟體的推廣者、C 軟體的使用者，不論你是已經踏入自由及開放原始碼軟體領域，還是一直站在門口不知如何入門，歡迎你來參加 COSCUP — Conference for Open Source Coders, Users and Promoters!</p>

                                        <p>COSCUP 研討會已經邁入第十二年了，你知道2006年第一屆的COSCUP就是在台灣大學舉辦的嗎?從2009年後，今年COSCUP又回到台灣大學舉辦，今年COSCUP活動和議程的型式也有很大的變化。在過去十年間COSCUP由各地社群共同舉辦，在眾多同好的參與之下，逐漸成長茁壯。今年更邀請了各地社群成為議程的協力夥伴，一同打造更多元的主題和議程。無論你是寫 open source 軟體的開發者、熱衷 open source 軟體的推廣者、熟悉 open source 軟體的使用者或是想了解 open source 軟體的新手，都歡迎你來參加一年一度全台最大的開源人年會。</p>

                                    </div>
                                ) : (
                                    <div>
                                        <p>COSCUP is an annual conference held by Taiwanese Open source community participants since 2006. It's a major force of Free software movement advocacy in Taiwan. The event is often held with talks, sponsor and communities booths, and Birds of a feather. In addition to international speakers, many Taiwanese local Open Source contributors often give their talks here. The chief organizer, staffs, and speakers are all volunteers.</p>
                                        <p>COSCUP's aim is providing a platform to connect Open Source coders, users, and promoters, and promote FLOSS with the annual conference. The conference is free to attend because of the enthusiastic sponsors and donators. Since the conference venue is limited, tickets are often sold out immediately after the online registration starts.</p>
                                        <p>It is a common fact that the coders of traditional commercial software rarely interact with users.</p>
                                        <p>If any trouble on the software, calling the support service is the only way, and the technicians may help you. Hard as they tried, the problem still remains. If it is caused by a bug, the only solution is to wait until the new version releases. The only reason why you have chosen software A instead of B, is probably because of the sales' or your friends' recommendation. Under this behavior pattern, users and coders confront with sales and customers service, while what users encounter can't be passed directly, and the real question travels a long journey to get the right person.</p>
                                        <p>The term "Open Source" appears in 1998, which is familiar to everyone. This kind of developing pattern working on the Internet over 20 to 30 years attributes to many reasons. The key factor may be the direct interaction with coders and users, which forms a rapid feedback and patch system on bugs. This pattern is enlarged by the Internet, where Linus's law "With enough eyeballs, all bugs are shallow" occurs, thereby the software's quality enhances. In Open Source pattern, promoters take the position between coders and users, rather than sales and customer service. They package software suites to get installation easier, write documents to lower its learning curve, hold events to spread good software, solve questions from the Internet without creating information asymmetry.</p>
                                        <p>Coders, Users, and Promoters are three kinds of roles that makes Open Source Software sparkle.This conference is organized for them. You might be a coder from Software A, a promoter from Software B, and an user from Software C. No matter you have already stepped into the field of Open Source, or even standing on the gate wandering, we welcome you to attend the  biggest annual Conference for Open Source Coders, Users, and Promoters in Taiwan!</p>
                                        <p>COSCUP celebrates its 12th anniversary this year. Over the past decade, the event has co-operated with communities all over the world. With everyone's involvement, COSCUP grows up. This year, COSCUP will be held back to its first campus in 2006, National Taiwan University. And several communities will be the program partners to provide diversified topics and talks. </p>
                                        <p>Whoever you are a Open Source coder, a devoted Open Source promoter, a user familiar with Open Source, or even a newcomer, we sincerely welcome you to be a part of COSCUP!</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}, require('css/general/IndexPage.styl'))
