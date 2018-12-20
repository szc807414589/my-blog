import React, { Component } from 'react'
import './input.less'

/*
*
* shape:形状  'circle', 'square'  默认circle
* size 宽度  默认64
* disabled
* */

class Input extends Component {
	constructor(props) {
		super(props)
		this.state = {
			defaultUrl: '',
			defaultAlt: '头像',
		}
	}
	
	render() {
		const { shape, size, disabled } = this.props
		return (
			<input className="szc-input" type="text"/>
		)
	}
}

export default Input