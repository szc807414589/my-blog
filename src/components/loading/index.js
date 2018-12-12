import React, {Component} from 'react'
import NProgress from 'nprogress/nprogress'
import 'nprogress/nprogress.css'
export default class loading extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentWillMount(){
		NProgress.start()
	}
	componentDidMount(){
		NProgress.done()
	}
	render() {

		return (
			<div>
				{/*<h3>loading...</h3>*/}
			</div>
		)
	}
}