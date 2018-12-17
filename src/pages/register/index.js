import React, { Component } from 'react'
import { Input, Icon, Button, Form, message } from 'antd'
import { postApi } from '../../assets/js/axios'
import api from '../../assets/js/axios/api'
import './register.less'

const FormItem = Form.Item;

class RegisgerPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			pwd: '',
			confirmPwd: ''
		}
		this.handleClick = this.handleClick.bind(this)
		this.inputChange = this.inputChange.bind(this)
	}
	
	handleClick() {
		const { user, pwd, confirmPwd } = this.state
		if (!user || !pwd || !confirmPwd) {
			message.error('请输入正确信息')
			return
		}
		if (pwd !== confirmPwd) {
			message.error('两次密码输入不一致')
			return
		}
		postApi(api.Register, {
			user,
			pwd
		})
			.then(res => {
				if (res.code === 10000) {
					this.props.history.push('/')
				}
			})
	}
	
	inputChange(e) {
		let inputType = e.target.name
		this.setState({
			[inputType]: e.target.value
		})
	}
	
	render() {
		return (
			<div className="login_container">
				<div className="login_Box">
					<Form className="login-form">
						<FormItem>
							<Input
								prefix={
									<Icon
										type="user"
										style={{
											color: 'rgba(0,0,0,.25)'
										}}/>
								}
								placeholder="user name"
								name="user"
								autoComplete="user"
								value={this.state.user}
								onChange={this.inputChange}
							/>
						</FormItem>
						<FormItem>
							<Input
								prefix={
									<Icon
										type="lock"
										style={{
											color: 'rgba(0,0,0,.25)'
										}}/>}
								type="password"
								placeholder="password"
								name="pwd"
								autoComplete="pwd"
								value={this.state.pwd}
								onChange={this.inputChange}
							/>
						</FormItem>
						<FormItem>
							<Input
								prefix={
									<Icon
										type="lock"
										style={{
											color: 'rgba(0,0,0,.25)' +
											''
										}}/>
								}
								type="password"
								placeholder="password again"
								name="confirmPwd"
								autoComplete="confirmPwd"
								value={this.state.confirmPwd}
								onChange={this.inputChange}
							/>
						</FormItem>
						<FormItem>
							<Button
								block
								type="primary"
								className="login-form-button"
								// onClick={this.props.login}
								onClick={this.handleClick}
							>
								register now
							</Button>
							Or
							<Button
								block
								type="primary"
								className="login-form-button"
								onClick={() => {
									this.props.history.push('/login')
								}}
							>
								go login
							</Button>
						</FormItem>
					</Form>
				</div>
			</div>
		)
	}
}

export default RegisgerPage