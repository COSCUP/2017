import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    static propTypes = {
    }
    render () {
        const { Sponsor, Language } = this.props
        return (
            <div>
                <div className="subPage">
                    <div className="mobile subpage--title">
                        <div className="title--text">{ this.props.Translate['sponsor'][Language] }</div>
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
            </div>
        )
    }
}, require('css/sponsor/Home.styl'))
