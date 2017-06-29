import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Containers from 'js/containers'

export default CSSModules(class extends Component {
    static propTypes = {
    }
    render () {
        const { Language } = this.props
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
                    <div className='card'>
                        <div className='title'>總召</div>
                        <div className='content'>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='title'>開車</div>
                        <div className='content'>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='title'>開車</div>
                        <div className='content'>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='title'>開車</div>
                        <div className='content'>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='title'>開車</div>
                        <div className='content'>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='person--wrapper'>
                                    <img src='https://assets-cdn.github.com/favicon.ico' className='photo' />
                                    <div className='name'>小畢</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Containers.general.SponsorList />
                </div>
            </div>
        )
    }
}, require('css/staff/Home.styl'))
