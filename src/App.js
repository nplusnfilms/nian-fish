import React, { Component, PropTypes } from 'react'
//import Helmet from 'react-helmet'
import { Link } from 'react-router'
import Scroll from 'react-scroll'
import { presets } from 'react-router-transition'
import Helmet from 'react-helmet'

presets.fade.atActive.opacity.damping = 2
presets.fade.atActive.opacity.stiffness = 3

const scroll = Scroll.animateScroll

//require('../public/assets/css/style.css')

export default class App extends Component {

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

		const { location } = this.props
		const newChildren = React.cloneElement(this.props.children, { data: this.props.route.data })
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
								<Link to={{ pathname: "https://nplusnfilms.com/" }} target="_blank">Films</Link>
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

					{ newChildren }

					<footer className="footer">
						<a href="https://www.instagram.com/nianfish" target="_blank" className="pull-center">Follow us on Instagram</a>
						<p>&nbsp;</p>
					</footer>
				</div>
			</div>
		)
	}
}