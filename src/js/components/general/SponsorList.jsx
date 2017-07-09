import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'

@Radium
export default CSSModules(class extends Component {
    componentDidMount () {
        this.props.getSponsor()
    }
    render () {
        const { Sponsor, Language } = this.props
        return (
            <div className='general--sponsorlist'>
                {
                    Sponsor.map((subSponsor, id) => (
                        <div className='general--subSponsorlist' key={id}>
                            <div className='title'>{ subSponsor.name[Language] }</div>
                            <div>
                                {
                                    subSponsor.data.map((sponsor, subid) => (
                                        <a target='_blank' href={sponsor.logolink} key={subid} className='sponsor'>
                                            <img src={sponsor.logourl} />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}, require('css/general/SponsorList.styl'))
