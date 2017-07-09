import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import classNames from 'classnames'
import Containers from 'js/containers'

import FaClose from 'react-icons/lib/fa/close'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.blurSocialHandler = this.blurSocialHandler.bind(this)
        this.blurHistoryHandler = this.blurHistoryHandler.bind(this)
        this.state = {
            isBlurHistory: false,
            isBlurSocial: false
        }
    }
    blurSocialHandler () {
        let _isBlurSocial = this.state.isBlurSocial
        this.setState({
            isBlurSocial: !_isBlurSocial
        })
        let target = document.querySelector('body')
        target.style.overflow = (target.style.overflow === 'hidden' ? 'visible' : 'hidden')
    }
    blurHistoryHandler () {
        let _isBlurHistory = this.state.isBlurHistory
        this.setState({
            isBlurHistory: !_isBlurHistory
        })
        let target = document.querySelector('body')
        target.style.overflow = (target.style.overflow === 'hidden' ? 'visible' : 'hidden')
    }
    async componentDidMount () {
        await this.props.getSocial()
    }

    render () {
        const { Social } = this.props
        return (
            <footer id="footer">
              <section>
                  <h2 className="title" data-en="SPONSORS">贊助</h2>
                  <Containers.general.SponsorList />
              </section>
              <div className="content--footer">
                  <div className="content--footer--mobile">
                      <div className="btn-mobile" onClick={this.blurSocialHandler}>Social media</div>
                      <div className="btn-mobile" onClick={this.blurHistoryHandler}>歷屆網站</div>
                  </div>
                  <div className="content--footer--social">
                      {
                          Social.map((social, id) => (
                              <a href={social.link}>
                                  <img src={require(`static/social/${social.title}.png`)}/>
                              </a>
                          ))
                      }
                  </div>
                  <div className="content--footer--history">
                      {
                          _.range(2006, 2017).map((year) => (
                              <div key={year}>
                                  <a href={`http://coscup.org/${year}/`} target='_blank'>{year}</a>
                              </div>
                          ))
                      }
                  </div>

              </div>
              {/*  彈出 popout */}
              <div className={classNames('indexpage--popOut--social', 'popOutMenu--mobile', {'active': this.state.isBlurSocial === true})} onClick={this.blurSocialHandler}>
                  <div className="popOutMenu--bg"></div>
                  <div className="popOutMenu--content">
                      <div className="content--title">Social media</div>
                      <ul>
                          {
                              Social.map((social, id) => (
                                  <a href={social.link}>
                                      <img src={require(`static/social/green/g-${social.title}.png`)}/>
                                  </a>
                              ))
                          }
                      </ul>
                      <div className="content--close">
                          {/* <img src={require(`static/times.svg`)} /> */}
                          <FaClose
                              color='#009A79'
                              />
                      </div>
                  </div>
              </div>

              <div className={classNames('indexpage--popOut--history', 'popOutMenu--mobile', {'active': this.state.isBlurHistory === true})} onClick={this.blurHistoryHandler}>
                  <div className="popOutMenu--bg"></div>
                  <div className="popOutMenu--content">
                      <div className="content--title">歷屆網站</div>
                      <ul>
                          {
                              _.range(2016, 2006).map((year, subid) => (
                                  <div key={subid} className='sponsor'>
                                      { /*
                                      <div className='sponsor--sponsorimage'>
                                          <a target='_blank' href={`http://coscup.org/${sponsor}/`}>
                                              <img src={require(`static/sponsor/appier.png`)} />
                                          </a>
                                      </div>
                                      */ }
                                      <a className='sponsor--content--mobile' target='_blank' href={`http://coscup.org/${year}/`}>
                                          <div className='sponsor--title'>
                                              { year }
                                          </div>
                                          { /*
                                          <a >
                                              <img src='#' />
                                          </a>
                                          */ }
                                      </a>
                                  </div>
                              ))
                          }
                      </ul>
                      <div className="content--close">
                          <FaClose
                              color='#009A79'
                            />
                          {/* <img src={require(`static/times.svg`)} /> */}
                      </div>
                  </div>
              </div>
            </footer>
        )
    }
}, require('css/general/Footer.styl'))
