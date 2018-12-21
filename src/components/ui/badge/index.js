import React, { Component } from 'react'
import './badge.less'

/*
*count	展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏	ReactNode
*dot	不展示数字，只有一个小红点	boolean	false
*offset	设置状态点的位置偏移，格式为 [x, y]	[number, number]	-
*overflowCount	展示封顶的数字值	number	99
*showZero	当数值为 0 时，是否展示 Badge	boolean	false
*status	设置 Badge 为状态点	Enum{ 'success', 'processing, 'default', 'error', 'warning' }	''
*text	在设置了 status 的前提下有效，设置状态点的文本	string	''
*title	设置鼠标放在状态点上时显示的文字	string	count
* */

class Badge extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		const { count, dot, offset, overflowCount } = this.props
		const ofc = overflowCount || 99
		return (
			<div className="szc-badge">
				{
					dot ?
						<span className="szc-badge_dot"></span> :
						<span className="szc-badge-count"
						      style={{
							      top: offset[0],
							      left: offset[1]
						      }}
						>{count <= ofc ? count : ofc + '+'}</span>
				}
				
				{this.props.children}
			</div>
		)
	}
}

export default Badge