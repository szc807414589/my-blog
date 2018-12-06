import React, {Component} from 'react'
import {routes} from './routes'
import HeaderBar from '../components/header'
import {renderRoutes} from 'react-router-config'
import {  BrowserRouter} from 'react-router-dom'

class RouterModal extends Component {
	render() {
		return (
			<div>
				<HeaderBar/>
				<BrowserRouter>
					{renderRoutes(routes)}
				</BrowserRouter>
			</div>
			
		
		)
	}
}

export default RouterModal