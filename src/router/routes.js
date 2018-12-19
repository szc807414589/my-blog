import React, { Component } from 'react'
import Loadable from "react-loadable"
import loading from '../components/loading'
import renderRoutes from '../assets/js/utils/renderRoutes'
// import HeaderBar from '../components/header'
// import Content from '../components/content'

const HeaderBar = Loadable({
	loader: () => import("../components/header"),
	loading: loading
});
const Content = Loadable({
	loader: () => import("../components/content"),
	loading: loading
});
const Home = Loadable({
	loader: () => import("../pages/home"),
	loading: loading
});
const About = Loadable({
	loader: () => import("../pages/about"),
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


class SettingsRoute extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const settings = routes[2].routes.find(i=>i.path === '/settings')
		console.log(settings.routes)
		return(
			<div>
				<Settings/>
				{/*{renderRoutes(settings)}*/}
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
				path: '/settings',
				requiresAuth: false,
				routes: [
					{
						path: '/settings/user',
						component: User,
						requiresAuth: false
					},
				]
			},
		]
	}
]