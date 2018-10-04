import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Scroll from 'react-scroll'
import { RouteTransition, presets } from 'react-router-transition'

const scroll = Scroll.animateScroll

let customers = [
	{
		id: '1',
		name: 'Victoria Beckham',
		img: 'victoria-beckham'
	},
	{
		id: '2',
		name: 'Tommy Hilfiger W',
		img: 'tommy-hilfiger-w'
	},
	{
		id: '3',
		name: 'Calvin Klein W',
		img: 'calvin-klein-w'
	},
	{
		id: '4',
		name: 'Self-Portrait',
		img: 'self-portrait'
	},
	{
		id: '5',
		name: 'Tory Burch',
		img: 'tony-burch'
	},
	{
		id: '6',
		name: 'Thom Browne M',
		img: 'thom-browne'
	},
	{
		id: '7',
		name: 'Tommy Hilfiger M',
		img: 'tommy-hilfiger-m'
	},
	{
		id: '8',
		name: 'Vera Wang',
		img: 'vera-wang'
	},
	{
		id: '9',
		name: 'Calvin Klein M',
		img: 'calvin-klein-m'
	},
	{
		id: '10',
		name: 'Reem Acra',
		img: 'reem-acra'
	},
	{
		id: '11',
		name: 'Vertu',
		img: 'vertu'
	},
	{
		id: '12',
		name: 'H&M',
		img: 'ham'
	},
	{
		id: '13',
		name: 'Zac Posen',
		img: 'zac-posen'
	},
	{
		id: '14',
		name: 'Sean John',
		img: 'sean-john'
	},
	{
		id: '15',
		name: 'Chloe',
		img: 'chloe'
	},
	{
		id: '16',
		name: 'Reed Krakoff',
		img: 'reed-krakoff'
	},

	{
		id: '17',
		name: 'Jil Sander',
		img: 'jil-sander'
	},
	{
		id: '18',
		name: 'Pedro Lorenco',
		img: 'pedro-lorenco'
	}
]

export default class Work extends Component {

	constructor (props) {
		super(props)
		this.state = {
			
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(event) {

		event.preventDefault()
		/*
		scroll.scrollToTop({
			duration:0,
			smooth:false
		})
		*/
	}

	render () {
		return (
			<div>
				<h1>Work</h1>
				<RouteTransition pathname={this.props.location.pathname} {...presets.fade}>
					<section>
						<ul className="list-customers">
							{
								customers.map((customer) => {
									const img = "assets/img/work-" + customer.img + ".jpg"

									return(
										<li key={customer.id}>
											<a href="" className="disabled" onClick={(event) => this.handleClick(event)}>
												<img src={img} alt="" />
												<label>{customer.name}</label>
											</a>
										</li>
									)
								})
							}
						</ul>
					</section>
				</RouteTransition>
			</div>
		)
	}
}