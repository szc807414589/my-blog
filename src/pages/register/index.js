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
			user: '',
			pwd: '',
			confirmpwd: ''
		}
		this.handleClick = this.handleClick.bind(this)
		this.inputChange = this.inputChange.bind(this)
	}
	
	handleClick() {
		console.log(this.state)
		postApi(api.Register,{
			user: this.state.user,
			pwd: this.state.pwd
		})
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
								name="user"
								autoComplete="user"
								value={this.state.user}
								onChange={this.inputChange}
							/>
						</FormItem>
						<FormItem>
							<Input
								prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
								type="pwd"
								placeholder="admin"
								name="pwd"
								autoComplete="pwd"
								value={this.state.pwd}
								onChange={this.inputChange}
							/>
						</FormItem>
						<FormItem>
							<Input
								prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
								type="pwd"
								placeholder="admin"
								name="confirmpwd"
								autoComplete="confirmpwd"
								value={this.state.confirmpwd}
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