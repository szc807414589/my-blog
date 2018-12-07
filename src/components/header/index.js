import React, {Component} from 'react'
import {Input, Menu, Dropdown, Icon, Breadcrumb, Switch, Button} from 'antd';
import './header.less'
import history from '../../history'
import {withRouter} from 'react-router-dom'


const menu = (
	<Menu>
		<Menu.Divider/>
		<Menu.Item key="0">
			<Switch checkedChildren="正常" unCheckedChildren="夜间" defaultChecked/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item key="1">
			<Breadcrumb>
				<Switch checkedChildren="CH" unCheckedChildren="EN" defaultChecked/>
			</Breadcrumb>
		</Menu.Item>
	</Menu>
)

class HeaderBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false,
			current: 'home'
		}
		this.handleVisibleChange = this.handleVisibleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	
	componentWillMount() {
		console.log(history)
	}
	
	handleVisibleChange(flag) {
		this.setState({visible: flag})
	}
	
	handleClick = (e) => {
		this.setState({
			current: e.key,
		}, () => {
			history.push(`${e.key}`)
		});
	}
	
	render() {
		return (
			<div className="header_container">
				<header>
					{/*logo*/}
					<div className="header_logo">LOGO</div>
					<Menu
						onClick={this.handleClick}
						selectedKeys={[history.location.pathname]}
						defaultSelectedKeys={['home']}
						mode="horizontal"
					>
						<Menu.Item key="/home">
							<Icon type="smile" theme="twoTone"/>首页
						</Menu.Item>
						<Menu.Item key="/classify">
							<Icon type="appstore"/>分类
						</Menu.Item>
						<Menu.Item key="/about">
							About
						</Menu.Item>
					</Menu>
					{/*搜索*/}
					<div className="header_form">
						<Input type="text" placeholder="search"/>
					</div>
					{/*换主题*/}
					<div className="header_menu">
						<Dropdown
							overlay={menu}
							onVisibleChange={this.handleVisibleChange}
							trigger={['click']}
							visible={this.state.visible}
						>
							<a className="ant-dropdown-link">
								Click me <Icon type="down"/>
							</a>
						</Dropdown>
					</div>
					{/*发表文章
					 	  *需要登录
					 	  * */}
					<Button className="header_login" type="primary" ghost>登录</Button>
				</header>
			</div>
		)
	}
}

export default withRouter(HeaderBar)