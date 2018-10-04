import React, { Component, PropTypes } from 'react'
import { RouteTransition, presets } from 'react-router-transition'

let press = [
	{
		name: '5 Resolutions to transform the fashion and beaty industries',
		img: '5resolutions',
		label: 'Fashion Statement: Nian Fish, KCD Worldwide',
		href: 'http://5resolutions.blogspot.com/2007/07/fashion-statements-nian-fish-kcd.html'
	},{
		name: 'Daily News',
		img: 'dailynews',
		label: "Fashion's 50 most powerful: No. 10",
		href: 'http://1e84831c56a7d12c1f6d-1fdbf5e5096d992a175adf6ad269f37a.r54.cf1.rackcdn.com/wp-content/uploads/2013/09/daily_news.jpg'
	},{
		name: 'DAZED digital',
		img: 'dazed',
		label: "90s models just can't get enough",
		href: 'http://www.dazeddigital.com/blog/article/15860/1/90s-models-just-cant-get-enough'
	},{
		name: 'models.com',
		img: 'models',
		label: 'A Models.com interview by Wayne Sterling',
		href: 'http://models.com/mdx/nian-fish/'
	},{
		name: 'New York',
		img: 'nymag',
		label: 'The Fashion Week Food Diaries',
		href: 'http://nymag.com/fashion/07/spring/28151/index2.html'
	},{
		name: 'The New York Times',
		img: 'nytimes',
		label: 'Come as You Were',
		href: 'http://www.nytimes.com/2013/05/02/fashion/grunge-endures-as-tribute-to-a-creative-golden-age.html?ref=ruthlaferla&_r=0'
	},{
		name: 'Tory Daily',
		img: 'torydaily',
		label: 'Expert Guide: Nian Fish’s Life Lessons',
		href: 'http://www.toryburch.com/blog-post/blog-post,default,pg.html?bpid=65574'
	},{
		name: 'Trendland',
		img: 'trendland',
		label: 'Faces Behind the CFDA Fashion Awards: Interview of Nian Fish',
		href: 'http://trendland.com/faces-behind-the-cfda-fashion-awards-interview-of-nian-fish/'
	},{
		name: 'Twelv',
		img: 'twelv',
		label: 'Pictures from an exhibition',
		href: '/assets/img/press-twelv-detail.jpg'
	},{
		name: 'Vanity Fair',
		img: 'vanityfair',
		label: 'Calvin to the Core',
		href: 'http://www.vanityfair.com/culture/features/2008/04/calvin200804'
	},{
		name: 'Vogue',
		img: 'vogue',
		label: 'Health: CFDA Model Initiative',
		href: 'http://www.vogue.com/vogue-daily/article/vd-health-cfda-model-initiative-/#1'
	},{
		name: 'The Wall Street Journal',
		img: 'wallstreet',
		label: 'Council of Fashion Designers of America Health Initiative',
		href: 'http://online.wsj.com/public/resources/documents/CFDAHEALTHINITIATIVE20070112.pdf'
	},
]


export default class Press extends Component {

	constructor (props) {
		super(props)
		this.state = {
		}
	}

	render () {
		return (
			<span>
				<h1>Press</h1>
				<RouteTransition pathname={this.props.location.pathname} {...presets.fade}>
					<section>
						<ul className="list-press">
							{
								press.map((item, index) => {
									const img = "assets/img/press-" + item.img + ".svg"
									const itemClass = (item.label === '' ? 'no-label' : '')

									return(
										
										<li key={index} className={itemClass}>
											<a href={item.href} target="_blank">&nbsp;</a>
											<img src={img} alt="" />
											{
												item.label !== ''
												&& <label>{item.label}</label>
											}
										</li>
									)
								})
							}
						</ul>
					</section>
				</RouteTransition>
			</span>
		)
			
	}
}