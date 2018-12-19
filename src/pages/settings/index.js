import React, { Component } from 'react'
import { Menu,Icon } from 'antd'
import './settings.less'


class Settings extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return(
			<div className="settingsContainer">
				<div className="settingsLeft">
					<Menu
						onClick={this.handleClick}
						style={{ width: 256 }}
						defaultSelectedKeys={['1']}
						mode="inline"
					>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>用户信息</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="message" />
							<span>消息</span>
						</Menu.Item>
					</Menu>
				</div>
				<div className="settingsRight">
					{this.props.children}
				</div>
			</div>
		)
	}
}


export default Settings