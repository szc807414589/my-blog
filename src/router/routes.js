// import React from 'react'
import Loadable from "react-loadable"
import loading from '../components/loading'


const Home = Loadable({
	loader: () => import("../pages/home"),
	loading: loading
});
const About = Loadable({
	loader: () => import("../pages/about"),
	loading: loading
});
const Hi = Loadable({
	loader: () => import("../pages/hi"),
	loading: loading
});

export const routes = [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/about',
		component: About,
		// routes: [
		//
		// ]
	},
	{
		path: '/about/hi',
		component: Hi
	}
]