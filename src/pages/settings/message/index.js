import React, { Component } from 'react'
import { Avatar } from '../../../components/ui'


import './message.less'

class Message extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className="messageContainer">
				<div className="messageTitle">
					消息列表
				</div>
				<div className="messageList">
					<div className="messageItem">
						<Avatar
							src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
						/>
						<div className="messageContent">
							<div className="message">标题title标题title标题title</div>
							<div className="">内容内容内容内容内容内容内容内容</div>
						</div>
						<div className="messageTime">
							2018-12-12 16:16:16
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Message