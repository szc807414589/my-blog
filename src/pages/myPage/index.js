import React, { Component } from 'react'
import { Avatar, Button, List } from "../../components/ui"
import { Tabs, Tag, Icon } from 'antd'
import api from "../../assets/js/axios/api"
import { postApi } from "../../assets/js/axios"
import intl from 'react-intl-universal'

import './myPage.less'

const IconText = ({ type, text }) => (
	<span>
    <Icon type={type} style={{ marginRight: 8 }}/>
		{text}
  </span>
);
const Demo = ({ sname }) => (
	<div>hello,{sname}
	</div>
)

class HeaderBlock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listData: [],
			lang: 'en'
		}
	}
	
	render() {
		const { userInfo } = this.props
		return (
			<div className="header_block">
				<Avatar
					src="https://tva2.sinaimg.cn/crop.0.0.180.180.180/7d5c3c03jw1e8qgp5bmzyj2050050aa8.jpg"
					size="100"
				/>
				<div className="header_box header_info">
					<div className="header_info_userName">
						{userInfo.userName}
					</div>
					<div className="header_info_userDesc">
						{userInfo.userDesc}
					</div>
				</div>
				<div className="header_box header_click">
					<div className="header_click_info">
						<span>{intl.get('FOLLOW')}|</span>
						<span>{intl.get('FANS')}</span>
					</div>
					<Button>{intl.get('EDIT')}</Button>
				</div>
			</div>
		)
	}
}

export default class MyPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInfo: {
				userName: '旗木卡卡西',
				userDesc: '五五开'
			},
			listData: []
		}
		this.getList = this.getList.bind(this)
	}
	
	componentDidMount() {
		this.getList()
	}
	
	getList() {
		postApi(api.GetArticleList, {})
			.then(res => {
				if (res.msg === 'success') {
					const data = res.data
					this.setState({
						listData: data
					})
				}
			})
	}
	
	callback(key) {
		console.log(key);
	}
	
	render() {
		const list = this.state.listData
		console.log(list)
		return (
			<div>
				<HeaderBlock userInfo={this.state.userInfo}/>
				<Tabs defaultActiveKey="1" onChange={this.callback}>
					<Tabs.TabPane tab="文章" key="1">
						<List
							bordered={true}
							dataSource={list}
							itemLayout="vertical"
							style={{ width: '700px' }}
							renderItem={item => (
								<List.Item
									key={item.articleTitle}
									actions={[
										<Tag color="cyan">{item.articleAuth}</Tag>,
										<IconText type="star-o" text={item.articleCollectedNumber}/>,
										<IconText type="like-o" text={item.articleSupportedNumber}/>,
										<IconText type="message" text={item.articleCommentNumber}/>
									]}
									extra={
										item.articleThumbnail ?
											<img width={272}
											     alt="logo"
											     src={item.articleThumbnail}/>
											: ''
									}
								
								>
									<List.Item.Meta
										title={<a href={item.href}>{item.articleTitle}</a>}
										description={item.articleDesc}
									/>
								</List.Item>
							)}
						/>
					</Tabs.TabPane>
					<Tabs.TabPane tab="动态" key="2">Content of Tab Pane 2</Tabs.TabPane>
					<Tabs.TabPane tab="评论" key="3">Content of Tab Pane 3</Tabs.TabPane>
				</Tabs>
				
			</div>
		)
	}
}