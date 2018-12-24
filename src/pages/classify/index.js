import React, { Component } from 'react'
// import { Button } from 'antd'
import ColorPicker from '../../components/colorPicker'
import '../../components/ui'


export default class Classify extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.goAbout = this.goAbout.bind(this)
	}
	
	goAbout() {
		this.props.history.push('/home')
	}
	
	render() {
		return (
			<div>
				<h3>this is classify</h3>
				{/*<Button onClick={this.goAbout} type="primary">Primary</Button>*/}
				<ColorPicker
					color="#722ed1"
				/>
			</div>
		)
	}
}
