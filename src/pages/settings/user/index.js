import React, { Component } from 'react'
import { Avatar, Button,Input } from '../../../components/ui'
import './user.less'

/*
* 用户头像/用户名/用户描述
* */
class User extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		return (
			<div>
				<div className="user_list">
					<div className="user_listItem">
						<div className="user_label">头像</div>
						<Avatar
							src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
							size={80}/>
						<Button>点击上传</Button>
					</div>
					
					<div className="user_listItem">
						<div className="user_label">用户名</div>
						<div className="user_input">
							<Input type="text" placeholder="userName"/>
						</div>
						<Button>点击修改</Button>
					</div>
					
					<div className="user_listItem">
						<div className="user_label">个人介绍</div>
						<div className="user_input">
							<Input type="text" placeholder="userName"/>
						</div>
						<Button>点击修改</Button>
					</div>
					
				</div>
			</div>
		)
	}
}

export default User
