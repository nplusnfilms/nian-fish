import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Scroll from 'react-scroll'

import Index from './index'
import About from './about'
import Work from './work'
import WorkDetail from './work-detail'
import Clients from './clients'
import Press from './press'
import Contact from './contact'

const scroll = Scroll.animateScroll

//require('../../public/assets/css/style.css')

export default class Website extends Component {

	constructor (props) {
		super(props)
		this.state = {
			menuIsActive: false
		}

		this.toggleMenu = this.toggleMenu.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	toggleMenu(event) {
		if (event){
			event.preventDefault()
		}

		this.setState({
			menuIsActive: !this.state.menuIsActive
		})
	}

	handleClick() {
		this.setState({
			menuIsActive:false
		})
		scroll.scrollToTop({
			duration:0,
			smooth:false
		})
	}

	render () {

		const documentClassName = (this.state.menuIsActive ? 'document menu-active' : 'document')

		return (
			<div className={documentClassName}>
				<div className="wrapper">
					<a href="" className="btn-menu" onClick={this.toggleMenu}>
						<span className="btn-menu-lines">&nbsp;</span>
					</a>

					<header className="header">
						<Link to={`/`} className="btn-logo" activeClassName="active" onClick={this.handleClick}>Nian Fish</Link>
						<ul className="menu">
							<li>
								<Link to={`/about`} activeClassName="active" onClick={this.handleClick}>About</Link>
							</li>
							<li>
								<Link to={`/work`} activeClassName="active" onClick={this.handleClick}>Work</Link>
							</li>
							<li>
								<Link to={`/clients`} activeClassName="active" onClick={this.handleClick}>Clients</Link>
							</li>
							<li>
								<Link to={`/press`} activeClassName="active" onClick={this.handleClick}>Press</Link>
							</li>
							<li>
								<Link to={`/contact`} activeClassName="active" onClick={this.handleClick}>Contact</Link>
							</li>
						</ul>
					</header>

					{this.props.children}

					<footer className="footer">
						<a href="https://www.instagram.com/nianfish" target="_blank" className="pull-center">Follow us on Instagram</a>
						<p>&copy; 2016. All images and films on this site belong to Nian Fish. All work is protected by copyright.</p>
					</footer>
				</div>
			</div>
		)
	}
}