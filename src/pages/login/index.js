import React, {Component} from 'react'
import {Input, Icon, Button, Form, Checkbox,} from 'antd';
import './login.less'

const FormItem = Form.Item;

class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			password: ''
		}
		this.handleClick = this.handleClick.bind(this)
		this.inputChange = this.inputChange.bind(this)
	}
	
	handleClick() {
		console.log(this.state)
	}
	
	inputChange(e) {
		let inputType = e.target.name
		
		this.setState({
			[inputType] : e.target.value
		})
	}
	
	render() {
		return (
			<div className="login_container">
				<div className="login_Box">
					<Form className="login-form">
						<FormItem>
							<Input
								prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
								placeholder="admin"
								name="userName"
								autoComplete="userName"
								value={this.state.userName}
								onChange={this.inputChange}
							/>
						</FormItem>
						<FormItem>
							<Input
								prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
								type="password"
								placeholder="admin"
								name="password"
								autoComplete="password"
								value={this.state.password}
								onChange={this.inputChange}
							/>
						</FormItem>
						<FormItem>
							<Checkbox>Remember me</Checkbox>
							<span className="login-form-forgot" href="">Forgot password</span>
							<Button
								block
								type="primary"
								className="login-form-button"
								onClick={this.handleClick}
							>
								Log in
							</Button>
							Or <span href="">register now!</span>
						</FormItem>
					</Form>
				</div>
			</div>
		)
	}
}

export default LoginPage