import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'

import App from './App'

import Index from './components/index'
import About from './components/about'
import Work from './components/work'
import WorkDetail from './components/work-detail'
import Clients from './components/clients'
import Press from './components/press'
import Contact from './components/contact'

const Routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Index} />
		<Route path="about" component={About} />
		<Route path="work" component={Work} />
		<Route path="detail" component={WorkDetail} />
		<Route path="about" component={About} />
		<Route path="clients" component={Clients} />
		<Route path="press" component={Press} />
		<Route path="contact" component={Contact} />
		<Route path="*" component={App} />
	</Route>
)

export default Routes