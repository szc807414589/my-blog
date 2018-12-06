import React, {Component} from 'react'
import {Input, Menu, Dropdown, Icon, Breadcrumb, Switch, Button, Layout} from 'antd';
import './header.less'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Footer} = Layout;

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
			<Layout className="layout">
				<Header>
					<div className="header_container">
						{/*logo*/}
						<a className="header_logo">LOGO</a>
						{/*tab*/}
						{/*<ul className="header_tab">*/}
							{/*<li>首页</li>*/}
							{/*<li>About</li>*/}
							{/*<li>分类</li>*/}
						{/*</ul>*/}
						<Menu
							onClick={this.handleClick}
							selectedKeys={[this.state.current]}
							mode="horizontal"
						>
							<Menu.Item key="mail">
								<Icon type="mail" />首页
							</Menu.Item>
							<Menu.Item key="app">
								<Icon type="appstore" />分类
							</Menu.Item>
							<Menu.Item key="alipay">
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
								<a className="ant-dropdown-link" href="#">
									Click me <Icon type="down"/>
								</a>
							</Dropdown>
						</div>
						{/*发表文章
					 	  *需要登录
					 	  * */}
						<Button className="header_login" type="primary" ghost>登录</Button>
					</div>
				</Header>
			</Layout>
		
		)
	}
}