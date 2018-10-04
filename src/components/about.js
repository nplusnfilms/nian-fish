import React, { Component, PropTypes } from 'react'
import { RouteTransition, presets } from 'react-router-transition'

export default class About extends Component {

	constructor (props) {
		super(props)
		this.state = {
		}
	}

	render () {
		return (
			<span>
				<h1>About</h1>
				<RouteTransition pathname={this.props.location.pathname} {...presets.fade}>
					<article className="article-nianfish-header">
						<p>The creative process often begins with color, which is what makes it almost ironic that Creative Director Nian Fish is most often attired solely in black. Longtime industry insiders such as Fish might infer that her monochrome uniform is a byproduct of beginning her career at Production and PR powerhouse KCD, where she had a 18 year tenure, which had an only black dress code in its nascent years. Closer to the truth however might be Fish’s desire to have her work, rather than her wardrobe, leave you with an impression of her talent. Fish’s dear friends and early champions were Kezia Keeble and Paul Cavaco. It was Keeble, KCD’s founder who thrust Nian, who was an assistant at the time, alone into the studio with Richard Avedon, at which moment marked the beginning of Nian’s 35 year career.A.
						</p>
						<p>Her eye for talent and the desire to nurture it however, started almost two decades earlier. When she was not racing through her homework in order to watch back-to-back classics on television for hours on end, nine year old Nian would stage shows in the lobby of her Lower East Side tenement. She would showcase the talents of the neighborhood kids and even then had an eye for what made an event work. The Puerto Rican bongo player was in perfect chord with the Eurasian Hula dancer and together they were an unrivaled experience.
						</p>
						<p>Nian’s background provided her with an understanding of the strength of believing in and supporting an idea in order to bring it to fruition. She is at her core a collaborator with an aptitude for conceptualization and creating a narrative. Her joy is found in identifying and cultivating talent. This strength landed Nian in the top 10 of the 50 most influential people in the fashion industry.</p>
						<p>She has given birth to the careers of many models, stylists, casting directors, music directors, set designers, and photographers. This, coupled with her even keeled personality, kind nature, and Asian roots have yielded the tongue-in-cheek nickname “Mama Buddha”. One might also affirm that it is because Nian is nothing, if not a nurturer.
						</p>
					</article>
					</RouteTransition>
			</span>
		)
	}
}