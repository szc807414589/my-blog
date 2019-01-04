import React, { Component } from 'react'
import { Avatar, } from '../../../components/ui'
import { Button, Input,message } from 'antd'
import './user.less'
import { connect } from 'react-redux'
import { postApi } from '../../../assets/js/axios'
import api from '../../../assets/js/axios/api'

/*
* 用户头像/用户名/用户描述
* */
class User extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: this.props.user,
			userDesc: this.props.userDesc
		}
		this.handleClick = this.handleClick.bind(this)
		this.inputChange = this.inputChange.bind(this)
	}
	
	inputChange(e) {
		let inputType = e.target.name
		this.setState({
			[inputType]: e.target.value
		})
	}
	
	handleClick() {
		const { user, userDesc } = this.state
		postApi(api.ModifyUserInfo, { user, userDesc })
			.then(res => {
				if(res.code === 10000){
					message.success('修改成功')
				}
			})
	}
	
	render() {
		const { user, userDesc } = this.state
		return (
			<div>
				<div className="user_list">
					<div className="user_listItem">
						<div className="user_label">头像</div>
						<Avatar
							src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
							size={80}/>
					</div>
					
					<div className="user_listItem">
						<div className="user_label">用户名</div>
						<div className="user_input">
							<Input
								name="user"
								onChange={this.inputChange}
								type="text"
								defaultValue={user}
								placeholder="userName"
							/>
						</div>
					</div>
					
					<div className="user_listItem">
						<div className="user_label">个人介绍</div>
						<div className="user_input">
							<Input
								name="userDesc"
								onChange={this.inputChange}
								type="text"
								defaultValue={userDesc}
								placeholder="userDesc"
							/>
						</div>
					</div>
					<div className="user_listItem">
						<div className="user_input">
							<Button onClick={this.handleClick}>点击修改</Button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(
	state => state.user
)(User)
