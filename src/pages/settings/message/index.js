import React, {Component} from 'react'
import {Avatar, Badge} from '../../../components/ui'


import './message.less'

class Message extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div className="messageContainer">
				<div className="messageTitle">
					消息列表
				</div>
				<div className="messageList">
					<div className="messageItem">
						<Badge
							count={501}
							offset={[10, 20]}
						>
							<Avatar
								src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
							/>
						</Badge>
						<div className="messageContent">
							<div className="messageFromName">标题title标题title标题title</div>
							<div className="messageFromContent">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</div>
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