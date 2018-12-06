import React, {Component} from 'react'
import {Button} from 'antd'

class Hi extends Component {
	constructor(props) {
		super(props)
		this.goHome = this.goHome.bind(this)
	}
	
	goHome() {
		this.props.history.push('/')
	}
	
	render() {
		
		return (
			<div>
				<h2>Hi Hi Hi...</h2>
				<Button onClick={this.goHome} type="danger">Danger</Button>
			</div>
		
		)
	}
}

export default Hi