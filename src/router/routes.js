import React, {Component} from 'react'
import Loadable from "react-loadable"
import loading from '../components/loading'
// import {renderRoutes} from "react-router-config"
import renderRoutes from '../assets/js/utils/renderRoutes'
import HeaderBar from '../components/header'
import Content from '../components/content'


const Home = Loadable({
	loader: () => import("../pages/home/index"),
	loading: loading
});
const About = Loadable({
	loader: () => import("../pages/about/index"),
	loading: loading
});
const Classify = Loadable({
	loader: () => import("../pages/classify/index"),
	loading: loading
});
const Login = Loadable({
	loader: () => import("../pages/login/index"),
	loading: loading
});
const Detail = Loadable({
	loader: () => import("../pages/detail/index"),
	loading: loading
});
class RouterModal extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
				<HeaderBar/>
				<Content>
					{renderRoutes(routes[1].routes)}
				</Content>
			</div>
		)
	}
}

export const routes = [
	{
		path: '/login',
		component: Login,
		requiresAuth: false
	},
	{
		component: RouterModal,
		routes: [
			{
				path: '/',
				component: Home,
				exact: true,
				requiresAuth: false
			},
			{
				path: '/about',
				component: About,
				requiresAuth: false
			},
			{
				path: '/classify',
				component: Classify,
				requiresAuth: false
			},
			{
				path: '/detail',
				component: Detail,
				requiresAuth: true
			},
		]
	}
]