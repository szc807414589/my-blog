import React, {Component} from 'react'
import {Input, Menu, Dropdown, Icon, Breadcrumb, Switch, Button} from 'antd';
import './header.less'

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
);
export default class HeaderBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false
		}
		this.handleVisibleChange = this.handleVisibleChange.bind(this)
	}
	
	handleVisibleChange(flag) {
		this.setState({visible: flag})
	}
	
	render() {
		return (
			<div className="sHeader">
				{/*logo*/}
				<h1>LOGO</h1>
				{/*tab*/}
				<ul>
					<li>首页</li>
					<li>About</li>
					<li>分类</li>
				</ul>
				{/*搜索*/}
				<div>
					<Input type="text" placeholder="search"/>
				</div>
				{/*换主题*/}
				<div>
					<Dropdown
						overlay={menu}
						onVisibleChange={this.handleVisibleChange}
						trigger={['click']}
						visible={this.state.visible}
					>
						<a className="ant-dropdown-link" href="#">
							Click me <Icon type="down"/>
						</a>
					</Dropdown>
				</div>
				{/*发表文章
				  *需要登录
				  * */}
				<Button type="primary" ghost>登录</Button>
			</div>
		)
	}
}