import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Redirect } from 'react-router'
import Scroll from 'react-scroll'
import { spring } from 'react-motion'
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
	
	componentDidMount() {
		
		if (document.getElementById("nianfish-hp"))
		{
			setTimeout(function(){
			    var fadeTarget = document.getElementById("nianfish-hp");
    var fadeEffect = setInterval(function () {
        if (fadeTarget && !fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget && fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
			if (document.getElementById("nianfish-hp"))
			document.getElementById("nianfish-hp").click();
            clearInterval(fadeEffect);
		
        }
			}, 100);}, 2000);
			
		}
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
					<Link id="nianfish-hp" to={`/work`} className="logo" onClick={this.handleClick}>Nian Fish</Link>
				</div>
			</RouteTransition>
		)
	}
}