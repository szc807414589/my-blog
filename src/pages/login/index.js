import React, {Component} from 'react'
import {Input, Icon, Button, Form} from 'antd'
import './login.less'
import {message} from "antd/lib/index"
import {postApi} from '../../assets/js/axios'
import api from '../../assets/js/axios/api'

const FormItem = Form.Item;

class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			pwd: ''
		}
		this.handleClick = this.handleClick.bind(this)
		this.inputChange = this.inputChange.bind(this)
	}
	
	handleClick() {
		const {user,pwd} = this.state
		if(!user || !pwd){
			message.error('请输入正确信息')
			return
		}
		postApi(api.Login, {
			user,
			pwd
		})
			.then(res => {
				console.log(res);
				if(res.code === 10000){
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
								prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
								placeholder="admin"
								name="user"
								autoComplete="userName"
								value={this.state.user}
								onChange={this.inputChange}/>
						</FormItem>
						<FormItem>
							<Input
								prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
								type="password"
								placeholder="admin"
								name="pwd"
								autoComplete="password"
								value={this.state.pwd}
								onChange={this.inputChange}/>
						</FormItem>
						<FormItem>
							<Button
								block
								type="primary"
								className="login-form-button"
								onClick={this.handleClick}>
								Log in
							</Button>
							<Button
								block
								type="primary"
								className="login-form-button"
								onClick={()=>{this.props.history.push('/login')}}>
								register now
							</Button>
						</FormItem>
					</Form>
				</div>
			</div>
		)
	}
}

export default LoginPage