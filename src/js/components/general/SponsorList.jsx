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
                        <section className='general--subSponsorlist' key={id}>
                            <h3 className='title'>{ subSponsor.name[Language] }</h3>
                            <ul>
                              {
                                  subSponsor.data.map((sponsor, subid) => (
                                    <li key={subid} className='sponsor'>
                                      <a target='_blank' href={sponsor.logolink}>
                                          { (sponsor.logourl.length !== 46) ? (<img src={sponsor.logourl} />) : (<div></div>) }
                                      </a>
                                    </li>
                                  ))
                              }
                            </ul>
                        </section>
                    ))
                }
            </div>
        )
    }
}, require('css/general/SponsorList.styl'))
