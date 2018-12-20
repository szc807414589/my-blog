import React, { Component } from 'react'
import './button.less'

/*
*
* shape:形状  'circle', 'square'  默认circle
* size 宽度  默认64
* disabled
* */

class Button extends Component {
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
				<button
					className="szc-btn"
					// className="ant-btn"
					disabled={disabled}
				>
					{this.props.children}
				</button>
		)
	}
}

export default Button