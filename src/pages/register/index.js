import React, {Component} from 'react'
import {Input, Icon, Button, Form, Checkbox,} from 'antd'
import {postApi} from '../../assets/js/axios'
import api from '../../assets/js/axios/api'
import {connect} from 'react-redux'
import {login, logout} from '../../redux/actions'
import './register.less'

const FormItem = Form.Item;

class RegisgerPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			password: '',
			confirmPassword: ''
		}
		this.handleClick = this.handleClick.bind(this)
		this.inputChange = this.inputChange.bind(this)
	}
	
	handleClick() {
		console.log(this.state)
		postApi(api.Register,this.state)
			.then(res=>{
				console.log(res)
			})
	}
	
	inputChange(e) {
		let inputType = e.target.name
		this.setState({
			[inputType]: e.target.value
		})
	}
	
	render() {
		// console.log(this.props)
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
							<Input
								prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
								type="password"
								placeholder="admin"
								name="confirmPassword"
								autoComplete="confirmPassword"
								value={this.state.confirmPassword}
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
// export default connect(mapStateToProps, {login, logout})(RegisgerPage)