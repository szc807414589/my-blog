import React, { Component } from 'react'
import './avatar.less'

/*
* src:图片地址
* shape:形状  'circle', 'square'  默认circle
* size 宽度  默认64
* alt 图像无法显示时的替代文本
* */

class Avatar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			defaultUrl: '',
			defaultAlt: '头像',
		}
	}
	
	render() {
		const { src, shape, size, alt } = this.props
		return (
			<div className="avatarBox"
			     style={{
				     width:`${size}px`,
				     height:`${size}px`,
				     lineHeight:`${size}px`,
				     borderRadius:shape === 'square'? '4px' : '50%'
			     }}
			>
				<img
					src={src || this.state.defaultUrl}
					alt={alt || this.state.defaultAlt}
				/>
			</div>
		)
	}
}

export default Avatar