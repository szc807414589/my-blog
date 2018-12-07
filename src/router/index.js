import React, {Component} from 'react'
import {routes} from './routes'
import HeaderBar from '../components/header'
import FooterBar from '../components/footer'
import Content from '../components/content'
import {renderRoutes} from 'react-router-config'
import {Router} from 'react-router-dom'
import history from '../history'


class RouterModal extends Component {
	render() {
		return (
			<div>
				<HeaderBar/>
				<Content>
					{renderRoutes(routes)}
				</Content>
				<FooterBar/>
			</div>
		)
	}
}

export default class App extends Component {
	render() {
		return (
			<Router history={history}>
				<RouterModal/>
			</Router>
		)
	}
}