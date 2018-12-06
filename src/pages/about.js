import React, {Component} from 'react'
import {Button} from 'antd'

class About extends Component {
	constructor(props) {
		super(props)
		this.goHome = this.goHome.bind(this)
	}
	
	goHome() {
		this.props.history.push('/about/hi')
		// this.props.history.push('/home')
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

export default About