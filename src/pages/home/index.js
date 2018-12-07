import React, {Component} from 'react'
import {Button} from 'antd'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.goAbout = this.goAbout.bind(this)
	}
	
	goAbout() {
		this.props.history.push('/about')
	}
	
	render() {
		return (
			<div>
				<h3>this is home</h3>
				<Button onClick={this.goAbout} type="primary">Primary</Button>
			</div>
		
		)
	}
}

export default Home