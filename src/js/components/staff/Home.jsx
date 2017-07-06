import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Containers from 'js/containers'

export default CSSModules(class extends Component {
    static propTypes = {
    }
    componentDidMount () {
        this.props.getStaff()
    }
    render () {
        const { Staff, Language } = this.props
        return (
            <div
                style={{
                    width: '100%'
                }}>
                <div className="subPage">
                    <div className="mobile subpage--title">
                        <div className="title--text">{ this.props.Translate['staff'][Language] }</div>
                    </div>
                    <div className="desktop subpage--title">
                        <div className="title--text">
                            <div> { this.props.Translate['staff']['zh'] } </div>
                            <div className="divider" />
                            <div> { this.props.Translate['staff']['en'] } </div>
                        </div>
                    </div>
                </div>
                <div className='stafflist'>
                    {
                        Staff.map((StaffList, id) => (
                            <div key={id} className='card'>
                                <div className='title'>{StaffList['name'][Language]}</div>
                                <div className='content'>
                                    {
                                        StaffList.data.map((staff, subid) => (
                                            <div key={subid} className='person'>
                                                <div className='person--wrapper'>
                                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                                    <div className='name'>{staff.name[Language]}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <Containers.general.SponsorList />
                </div>
            </div>
        )
    }
}, require('css/staff/Home.styl'))
