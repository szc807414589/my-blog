import React, {Component} from 'react'
import routes from './routes'
// import {renderRoutes} from 'react-router-config'
import renderRoutes from './config'
import {Router} from 'react-router-dom'
import history from '../history'
/*
* 国际化
* */
import intl from "react-intl-universal"
import zh_CN from '../assets/js/utils/locale/zh_CN'
import en_US from '../assets/js/utils/locale/en_US'
import ja_JP from '../assets/js/utils/locale/ja_JP'
const locales = {
	"en-US": en_US,
	"zh-CN": zh_CN,
	'ja-JP':ja_JP,
};

export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {initDone: false}
	}
	componentDidMount(){
		this.loadLocales();
	}
	
	loadLocales() {
		let lang = localStorage.getItem('lang')
		intl.init({
			currentLocale: lang || 'zh-CN',
			locales,
		})
			.then(() => {
				// After loading CLDR locale data, start to render
				this.setState({initDone: true});
			});
	}
	render() {
		return (
			<Router history={history}>
				{renderRoutes(routes)}
			</Router>
		)
	}
}