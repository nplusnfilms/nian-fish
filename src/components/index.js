import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Scroll from 'react-scroll'
import { RouteTransition, presets } from 'react-router-transition'
	
const scroll = Scroll.animateScroll
const DirectLink = Scroll.DirectLink

export default class Index extends Component {

	constructor (props) {
		super(props)
		this.state = {
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		scroll.scrollToTop({
			duration:0,
			smooth:false
		})
	}

	render () {
		return (
			<RouteTransition className="homepage" pathname={this.props.location.pathname} {...presets.fade}>
				<div className="vertical-align">
					<Link to={`/work`} className="logo" onClick={this.handleClick}>Nian Fish</Link>
				</div>
			</RouteTransition>
		)
	}
}