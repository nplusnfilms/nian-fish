import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Scroll from 'react-scroll'
import { RouteTransition, presets } from 'react-router-transition'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

const scroll = Scroll.animateScroll

let customers = [
	{
		id: '0',
		name: 'Victoria Beckham',
		img: [
			'assets/img/Victoria-Beckham/1.png',
			'assets/img/Victoria-Beckham/2.png',
			'assets/img/Victoria-Beckham/3.png',
			'assets/img/Victoria-Beckham/4.png'
		]
	},
	{
		id: '1',
		name: 'Tommy Hilfiger W',
		img: [
			'assets/img/Tommy-Hilfiger-W/1.png',
			'assets/img/Tommy-Hilfiger-W/2.png',
			'assets/img/Tommy-Hilfiger-W/3.png'
		]
	},
	{
		id: '2',
		name: 'Calvin Klein W',
		img: [
			'assets/img/Calvin-Klein-W/1.png',
			'assets/img/Calvin-Klein-W/2.png',
			'assets/img/Calvin-Klein-W/3.png',
			'assets/img/Calvin-Klein-W/4.png',
		]
	},
	{
		id: '3',
		name: 'Self-Portrait',
		img: [
			'assets/img/Self-Portrait/1.png',
			'assets/img/Self-Portrait/2.png',
			'assets/img/Self-Portrait/3.png',
			'assets/img/Self-Portrait/4.png',
			'assets/img/Self-Portrait/5.png',
		]
	},
	{
		id: '4',
		name: 'Tory Burch',
		img: [
			'assets/img/Tory-Burch/1.png',
			'assets/img/Tory-Burch/2.png',
			'assets/img/Tory-Burch/3.png',
			'assets/img/Tory-Burch/4.png',
			'assets/img/Tory-Burch/5.png',
		]
	},
	{
		id: '5',
		name: 'Thom Browne M',
		img: [
			'assets/img/Thom-Browne-M/1.jpg',
		]
	},
	{
		id: '6',
		name: 'Thom Browne W',
		img: [
			'assets/img/Thom-Browne-W/1.png',
			'assets/img/Thom-Browne-W/2.png'
		]
	},
	{
		id: '7',
		name: 'Tommy Hilfiger M',
		img: [
			'assets/img/Tommy-Hilfiger-M/1.jpg'
		]
	},
	{
		id: '8',
		name: 'Vera Wang',
		img: [
			'assets/img/Vera-Wang/1.jpg'
		]
	},
	{
		id: '9',
		name: 'Calvin Klein M',
		img: [
			'assets/img/Calvin-Klein-M/1.png',
			'assets/img/Calvin-Klein-M/2.png',
			'assets/img/Calvin-Klein-M/3.png'
		]
	},
	{
		id: '10',
		name: 'Reem Acra',
		img: [
			'assets/img/Reem-Acra/1.jpg'
		]
	},
	{
		id: '11',
		name: 'Vertu',
		img: [
			'assets/img/Vertu/1.jpg'
		]
	},
	{
		id: '12',
		name: 'H&M',
		img: [
			'assets/img/H-M/1.jpg'
		]
	},
	{
		id: '13',
		name: 'Zac Posen',
		img: [
			'assets/img/Zac-Posen/1.jpg'
		]
	},
	{
		id: '14',
		name: 'Sean John',
		img: [
			'assets/img/Sean-John/1.jpg'
		]
	},
	{
		id: '15',
		name: 'Chloe',
		img: [
			'assets/img/Chloe/1.jpg'
		]
	},
	{
		id: '16',
		name: 'Reed Krakoff',
		img: [
			'assets/img/Reed-Krakoff/1.jpg'
		]
	},

	{
		id: '17',
		name: 'Jil Sander',
		img: [
			'assets/img/Jil-Sander/1.jpg'
		]
	},
	{
		id: '18',
		name: 'Pedro Lorenco',
		img: [
			'assets/img/Pedro-Lorenco/1.jpg'
		]
	},
	{
		id: '19',
		name: 'Moncler Gamme Bleu',
		img: [
			'assets/img/Moncler-Gamme-Bleu/1.png',
			'assets/img/Moncler-Gamme-Bleu/2.png'
		]
	},
	{
		id: '20',
		name: 'Narciso Rodriguez',
		img: [
			'assets/img/Narciso-Rodriguez/1.png',
			'assets/img/Narciso-Rodriguez/2.png'
		]
	},
	{
		id: '21',
		name: 'The Row',
		img: [
			'assets/img/The-Row/1.png',
			'assets/img/The-Row/2.png',
			'assets/img/The-Row/3.png'
		]
	},
]

export default class Work extends Component {

	constructor (props) {
		super(props)
		this.state = {
			photoIndex: 0,
			isOpen: false
		}
	}

	handleClick = (event, id) => {
		event.preventDefault()
		this.setState({
			isOpen: true,
			selectedID: id
		})
		/*
		scroll.scrollToTop({
			duration:0,
			smooth:false
		})
		*/
	}

	render () {
		const { isOpen, photoIndex, selectedID } = this.state

		return (
			<div>
				<h1>Work</h1>
				{isOpen && (
					<Lightbox
						mainSrc={customers[selectedID].img[photoIndex]}
						nextSrc={customers[selectedID].img[(photoIndex + 1) % customers[selectedID].img.length]}
						prevSrc={customers[selectedID].img[(photoIndex + customers[selectedID].img.length - 1) % customers[selectedID].img.length]}
						onCloseRequest={() => this.setState({ isOpen: false, photoIndex: 0 })}
						onMovePrevRequest={() =>
							this.setState({
								photoIndex: (photoIndex + customers[selectedID].img.length - 1) % customers[selectedID].img.length,
							})
						}
						onMoveNextRequest={() =>
							this.setState({
								photoIndex: (photoIndex + 1) % customers[selectedID].img.length,
							})
						}
					/>
				)}
				<RouteTransition pathname={this.props.location.pathname} {...presets.fade}>
					<section>
						<ul className="list-customers">
							{
								customers.map((customer) => {
									const img = customer.img[0];
									const id = customer.id

									return(
										<li key={customer.id}>
											<a href="" className="disabled" onClick={(event) => this.handleClick(event, id)}>
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