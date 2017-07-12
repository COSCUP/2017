import React, { PureComponent } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import { IndexLink, Link } from 'react-router'

@Radium
export default CSSModules(class extends PureComponent {
    render () {
        const language = this.props.language
        return (
            <nav
                className={ classNames('navbar', {'intro': !!(this.props.isIndex)})}
            >
                <div className="logo">
                    <Link to={'/'}>
                        <img src={require('static/logo.png')}/>
                    </Link>
                </div>
                <ul className="tag-selector">
                    <li>
                        <IndexLink activeClassName="active" to='/'>{ this.props.translate['intro'][language] }</IndexLink>
                    </li>
                    <li>
                        <Link activeClassName="active" to='/schedule'>{ this.props.translate['schedule'][language] }</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to='/transport'>{ this.props.translate['transport'][language] }</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to='/sponsor'>{ this.props.translate['sponsor'][language] }</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to='/staff'>{ this.props.translate['staff'][language] }</Link>
                    </li>
                    <li>
                        <a href='http://blog.coscup.org/' target='_blank'>{ this.props.translate['news'][language] }</a>
                    </li>
                </ul>
                <ul className="lang-selector">
                    <li className={classNames({'active': language === 'en'})} onClick={() => this.props.putLanguage('en')}>EN</li>
                    <li className={classNames({'active': language === 'zh'})} onClick={() => this.props.putLanguage('zh')}>繁</li>
                </ul>
            </nav>
        )
    }
}, require('css/general/Navbar.styl'))
