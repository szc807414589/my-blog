import React, {Component} from 'react'
import {routes} from './routes'
import {renderRoutes} from 'react-router-config'
import {Router} from 'react-router-dom'
import history from '../history'


export default class App extends Component {
	render() {
		return (
			<Router history={history}>
				{renderRoutes(routes)}
			</Router>
		)
	}
}