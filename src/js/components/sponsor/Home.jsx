import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'

export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.blurHandler = this.blurHandler.bind(this)
        this.state = {
            isBlur: false
        }
    }

    blurHandler () {
        let _blur = this.state.isBlur
        this.setState({
            isBlur: !_blur
        })

        let list = document.querySelectorAll("[data-type='blur']")
        for (let i = 0; i < list.length; i++) {
            list[i].classList.toggle('blur-in')
        }
        let target = document.querySelector('body')
        target.style.overflow = (target.style.overflow === 'hidden' ? 'visible' : 'hidden')
    }
    render () {
        const { Sponsor, Language } = this.props
        return (
            <div
                style={{
                    width: '100%'
                }}>
                <div className="subPage">
                    <div className="mobile subpage--title" onClick={this.blurHandler}>
                        <div className="popout--toggler"></div>
                        <div className="title--text">{ this.props.Translate['sponsor'][Language] }</div>
                        <div className="popout--toggler" onClick={this.blurHandler}></div>
                    </div>
                    <div className="desktop subpage--title">
                        <div className="title--text">
                            <div> { this.props.Translate['sponsor']['zh'] } </div>
                            <div className="divider" />
                            <div> { this.props.Translate['sponsor']['en'] } </div>
                        </div>
                    </div>
                </div>
                <div className='sponsor--sponsorlist'>
                    {
                        Sponsor.map((subSponsor, id) => (
                            <div className='sponsor--subSponsorlist' key={id}>
                                <div className='title--wrapper'>
                                    <div className='title'>
                                        { subSponsor.name[Language] }
                                    </div>
                                </div>
                                <div>
                                    {
                                        subSponsor.data.map((sponsor, subid) => (
                                            <div key={subid} className='sponsor'>
                                                <div className='sponsor--sponsorimage'>
                                                    <a target='_blank' href={sponsor.logolink}>
                                                        <img src={sponsor.logourl} />
                                                    </a>
                                                </div>
                                                <div className='sponsor--content--mobile'>
                                                    <div className='sponsor--title'>
                                                        { sponsor.name[Language] }
                                                    </div>
                                                    <a target='_blank' href={sponsor.logolink}>
                                                        <img src='#' />
                                                    </a>
                                                </div>
                                                <div className='sponsor--content'>
                                                    <div className='sponsor--title'>
                                                        { sponsor.name[Language] }
                                                    </div>
                                                    <div className='sponsor--description'>
                                                        { sponsor.intro[Language] }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={classNames('sponsorlist--popOut', 'popOutMenu--mobile', {'active': this.state.isBlur === true})} onClick={this.blurHandler}>
                    <div className="popOutMenu--bg"></div>
                    <div className="popOutMenu--content">
                        <div className="content--title"> </div>
                        <ul>
                            <li>
                                <a href="#鑽石級">鑽石級</a>
                            </li>
                            <li>
                                <a href="#黃金級">黃金級</a>
                            </li>
                            <li>
                                <a href="#白銀級">白銀級</a>
                            </li>
                        </ul>
                        <div className="content--close">
                            <img src={require(`static/times.svg`)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}, require('css/sponsor/Home.styl'))
