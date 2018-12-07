// import React from 'react'
import Loadable from "react-loadable"
import loading from '../components/loading'


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

export const routes = [
	{
		path: '/home',
		component: Home,
		exact: true
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/Classify',
		component: Classify
	}
]