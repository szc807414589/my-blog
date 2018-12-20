import React, { Component } from 'react'
import { Menu,Icon } from 'antd'
import history from '../../history'
import './settings.less'


class Settings extends Component {
	constructor(props) {
		super(props)
	}
	handleClick = (e) => {
		this.setState({
			current: e.key,
		}, () => {
			history.push(`${e.key}`)
		});
	}
	render() {
		return(
			<div className="settingsContainer">
				<div className="settingsLeft">
					<Menu
						onClick={this.handleClick}
						style={{ width: 260 }}
						selectedKeys={[history.location.pathname]}
						defaultSelectedKeys={['1']}
						mode="inline"
					>
						<Menu.Item key="/settings/user">
							<Icon type="user" />
							<span>用户信息</span>
						</Menu.Item>
						<Menu.Item key="/settings/message">
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