import React, {Component} from 'react'
import {Button} from 'antd'

class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.goHome = this.goHome.bind(this)
	}
	
	goHome() {
		this.props.history.push('/classify')
	}
	
	render() {
		return (
			<div>
				<h2>this is about</h2>
				<Button onClick={this.goHome} type="danger">hi</Button>
			</div>
		
		)
	}
}

export default Index