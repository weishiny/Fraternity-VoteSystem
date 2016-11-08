import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Hello from '../pages/Hello'
import Hero from '../pages/Hero'
import App from './Main'

const routes = (
    <Route component={App}>
		<Route path="/" component={Hero}/>
	  	<Route path="Hello" component={Hello} />
	  	<Route path="Hero" component={Hero} />
	</Route>
)

export default routes;