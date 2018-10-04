import React, { Component, PropTypes } from 'react'
import { RouteTransition, presets } from 'react-router-transition'

export default class WorkDetail extends Component {

	constructor (props) {
		super(props)
		this.state = {
		}
	}

	render () {
		return (
			<div>
				<h1>Calvin Klein</h1>
				<RouteTransition pathname={this.props.location.pathname} {...presets.fade}>
					<section className="detail">
						<ul>
							<li>
								<img src="assets/img/img-customer-detail-temp.jpg" alt="" />
								<label>The creative process often begins with color.</label>
							</li>
							<li>
								<img src="assets/img/img-customer-detail-temp.jpg" alt="" />
								<label>The creative process often begins with color.</label>
							</li>
							<li>
								<img src="assets/img/img-customer-detail-temp.jpg" alt="" />
								<label>The creative process often begins with color.</label>
							</li>
						</ul>
					</section>
				</RouteTransition>
			</div>
		)
	}
}