import React, { Component, PropTypes } from 'react'
import { RouteTransition, presets } from 'react-router-transition'

export default class Clients extends Component {

	constructor (props) {
		super(props)
		this.state = {
		}
	}

	render () {
		return (
			<span>
				<h1>Clients</h1>
				<RouteTransition pathname={this.props.location.pathname} {...presets.fade}>
					<section>
						<ul className="list-clients">
						<li>Alexander McQueen</li>
							<li>Anna Sui</li>
							<li>Biotherm</li>
							<li>Calvin Klein</li>
							<li>Cartier</li>
							<li>CFDA</li>
							<li>Chanel</li>
							<li>Chloé</li>
							<li>Elizabeth Glaser</li>
							<li>Fashion Rocks</li>
							<li>Gap</li>
							<li>Gucci</li>
							<li>Helmut Lang</li>
							<li>H&M</li>
							<li>Jil Sander</li>
							<li>John Galliano</li>
							<li>Loewe</li>
							<li>Marc Jacobs</li>
							<li>Miu Miu</li>
							<li>Moncler</li>
							<li>Narciso Rodriguez</li>
							<li>Pedro Lourenco</li>
							<li>Phillips</li>
							<li>Pollini</li>
							<li>Ralph Lauren</li>
							<li>Reed Krakoff</li>
							<li>Sean John</li>
							<li>Self-Portrait</li>
							<li>The Row</li>
							<li>Thom Browne</li>
							<li>Tommy Hilfiger</li>
							<li>Tory Burch</li>
							<li>Valentino</li>
							<li>Vera Wang</li>
							<li>Versace</li>
							<li>Victoria Beckham</li>
						</ul>
					</section>
				</RouteTransition>
			</span>
		)
	}
}