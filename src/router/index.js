import React, {Component} from 'react'
import routes from './routes'
import {renderRoutes} from 'react-router-config'
import {Router} from 'react-router-dom'
import history from '../history'
/*
* 国际化
* */
import intl from "react-intl-universal"
import zh_CN from '../assets/js/utils/locale/zh_CN'
import en_US from '../assets/js/utils/locale/en_US'


export default class App extends Component {
	
	componentDidMount(){
		const lang = localStorage.getItem('lang')
		let currentLocale = intl.determineLocale({
			urlLocaleKey: "lang",
			cookieLocaleKey: "lang"
		});
		console.log(currentLocale)
		intl.init({
			currentLocale,
			locales: {
				[currentLocale]: lang
			}
		})
	}
	render() {
		return (
			<Router history={history}>
				{renderRoutes(routes)}
			</Router>
		)
	}
}