import React, {Component} from 'react'
import {routes} from './routes'
import HeaderBar from '../components/header'
import Content from '../components/content'
import {renderRoutes} from 'react-router-config'
import {Router,Route,Switch} from 'react-router-dom'
import history from '../history'
import Loadable from "react-loadable"
import loading from "../components/loading"


const Login = Loadable({
	loader: () => import("../pages/login/index"),
	loading: loading
});
class RouterModal extends Component {
	render() {
		return (
			<div>
				<HeaderBar/>
				<Content>
					{renderRoutes(routes)}
				</Content>
				{/*<FooterBar/>*/}
			</div>
		)
	}
}
class RouterM extends Component{
	render(){
		return(
			<Switch>
				<Route path='/login' component={Login}></Route>
				<Route path='/home' component={RouterModal}></Route>
			</Switch>
		)
	}
}

export default class App extends Component {
	render() {
		return (
			<Router history={history}>
				<RouterM/>
			</Router>
		)
	}
}