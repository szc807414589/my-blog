import React, { Component } from 'react'
import Loadable from "react-loadable"
import loading from '../components/loading'
// import renderRoutes from '../assets/js/utils/renderRoutes'
import { renderRoutes } from 'react-router-config'
import HeaderBar from '../components/header'
import Content from '../components/content'

// const HeaderBar = Loadable({
// 	loader: () => import("../components/header"),
// 	loading: loading
// });
// const Content = Loadable({
// 	loader: () => import("../components/content"),
// 	loading: loading
// });
const Home = Loadable({
	loader: () => import("../pages/home/index"),
	loading: loading
});
const About = Loadable({
	loader: () => import("../pages/about/index"),
	loading: loading
});
const Classify = Loadable({
	loader: () => import("../pages/classify"),
	loading: loading
});
const Login = Loadable({
	loader: () => import("../pages/login"),
	loading: loading
});
const Register = Loadable({
	loader: () => import("../pages/register"),
	loading: loading
});
const Detail = Loadable({
	loader: () => import("../pages/detail"),
	loading: loading
});
const Settings = Loadable({
	loader: () => import("../pages/settings"),
	loading: loading
});
const User = Loadable({
	loader: () => import("../pages/settings/user"),
	loading: loading
});
const Message = Loadable({
	loader: () => import("../pages/settings/message"),
	loading: loading
});


class RouterModal extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div>
				<HeaderBar/>
				<Content>
					{renderRoutes(routes[2].routes)}
				</Content>
			</div>
		)
	}
}


class SettingsRoute extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		console.log(routes[2].routes)
		const settings = routes[2].routes.find(i => i.name === 'settings')
		return (
			<div>
				<Settings>
					{renderRoutes(settings.routes)}
				</Settings>
			</div>
		)
	}
}


const routes = [
	{
		path: '/login',
		component: Login,
		requiresAuth: false
	},
	{
		path: '/register',
		component: Register,
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
			{
				component: SettingsRoute,
				name:'settings',
				routes: [
					{
						path: '/settings/user',
						component: User,
						requiresAuth: false
					},
					{
						path: '/settings/message',
						component: Message,
						requiresAuth: false
					},
				]
			},
		]
	}
]
export default routes