import React, { Component } from 'react'
import './styles/button.less'

/*
*
* shape:形状  'circle', 'square'  默认circle
* size 宽度  默认64
* disabled
* */

class Button extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		const { disabled,onClick,style } = this.props
		return (
				<button
					className="szc-btn"
					disabled={disabled}
					onClick={onClick}
					style={style}
				>
					{this.props.children}
				</button>
		)
	}
}

export default Button