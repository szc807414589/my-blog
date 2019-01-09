import React, { Component } from 'react'
// import { Avatar, } from "../../../components/ui/index"
import { Avatar, Input, Button, Popover, Icon } from 'antd'
import 'highlight.js/styles/atom-one-dark.css'

import api from "../../../assets/js/axios/api"
import { postApi } from "../../../assets/js/axios"
import moment from 'moment'
import 'highlight.js/styles/monokai-sublime.css'
import 'react-quill/dist/quill.snow.css'
import './detail.less'

const { TextArea } = Input
const emoji = '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 '
	.split(' ')
	.filter(v => v)
	.map(v => ({ text: v }))


class Auth extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick() {
		this.props.followAuthClick()
	}
	
	render() {
		const {
			userAvatar,
			articleAuth,
			articleCreateTime,
			articleCommentNumber,
			articleSupportedNumber
		} = this.props.authInfo
		return (
			<div className="authInfo">
				<Avatar src={userAvatar}/>
				<div className="info">
					<span className="authName">{articleAuth}</span>
					<Button className="followAuto" onClick={this.handleClick}>+关注</Button>
					<div className="authMeta">
						<span className="createTime">{moment(articleCreateTime).format('YYYY-MM-DD HH:mm:ss')}</span>
						<span className="comment">评论:{articleCommentNumber}</span>
						<span className="supported">点赞:{articleSupportedNumber}</span>
					</div>
				</div>
			</div>
		)
	}
}

class Desc extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		const articleDesc = this.props.articleDesc
		return (
			<div className="articleDesc">
				<p>{articleDesc}</p>
			</div>
		)
	}
}

class MyComment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			commentValue: '',
			defaultAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
		}
		this.handleInput = this.handleInput.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	
	handleInput(e) {
		let k = e.target.name
		this.setState({
			[k]: e.target.value
		})
	}
	
	clickEmoji(e) {
		e.preventDefault()
	}
	
	handleClick() {
		console.log(this.state.commentValue)
		this.setState({ commentValue: '' })
	}
	
	render() {
		const { show, commentValue, defaultAvatar } = this.state
		return (
			<div className={"myCommentBox"}>
				<TextArea
					placeholder="输入你的评论"
					onFocus={() => {
						this.setState({ show: true })
					}}
					onBlur={() => {
						this.setState({ show: false })
					}}
					onChange={this.handleInput}
					name={"commentValue"}
					autosize={true}
					value={commentValue}
				/>
				{
					<div className={show || commentValue ? "buttonBox open" : "buttonBox close"}>
						<Popover
							placement="bottom"
							title={"表情"}
							content={
								<div className={"emojiPanel"}>
									{
										emoji.map((v, i) => (
											<div
												className={"emojiGrid"}
												key={i}
												onClick={() => {
													this.setState({
														commentValue: this.state.commentValue + v.text
													})
												}}
											>
												{v.text}
											</div>
										))
									}
								</div>
							}
							trigger="click"
						>
							<div className={"emoji"}
							     onMouseDown={this.clickEmoji}
							>
								😀
							</div>
						</Popover>
						<Button
							className={"fr"}
							onMouseDown={this.handleClick}
							disabled={commentValue ? false : true}
						>发送</Button>
					</div>
				}
			</div>
		)
	}
}

class CommentList extends Component {
	render() {
		return (
			<div className={"commentListContainer"}>
				<Avatar/>
				<div className={"commentInfo"}>
					<div className={"commentUserInfo"}>
						<span className={"commentUserName"}>user1 </span>
						<span className={"commentUserDesc"}>this is desc this is desc this is desc this is desc this is desc</span>
					</div>
					<div className={"commentContent"}>
						这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容
						这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容
						这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容
					</div>
					<div className={"commentFooter"}>
						<span>2019-01-01 16:14:00</span>
						<div className={"fr"}>
							<Icon type="like"/>
							<Icon type="message"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			articleId: 0,
			articleInfo: {
				articleAuth: "",
				articleCollectedNumber: 0,
				articleComment: [],
				articleCommentNumber: 0,
				articleContent: '',
				articleCreateTime: "",
				articleDesc: "",
				articleSupportedNumber: 0,
				articleThumbnail: "",
				articleTitle: "",
				articleUpdateTime: "",
				createTime: "",
				user: "",
				userAvatar: '',
				userDesc: "",
			}
		}
		this.getArticle = this.getArticle.bind(this)
	}
	
	componentWillMount() {
		let articleId = Number(this.props.location.search.split('=')[1])
		this.setState({
			articleId
		})
	}
	
	componentDidMount() {
		this.getArticle()
	}
	
	getArticle() {
		let that = this
		postApi(api.GetArticleById, { articleId: this.state.articleId })
			.then(res => {
				if (res.success) {
					const articleInfo = res.data
					that.setState({
						articleInfo
					})
				}
			})
	}
	
	followAuthClick() {
		console.log('followAutoClick')
	}
	
	render() {
		const {
			articleAuth,
			articleCreateTime,
			articleTitle,
			articleDesc,
			articleContent,
			userAvatar,
			articleCommentNumber,
			articleSupportedNumber
		} = this.state.articleInfo
		let authInfo = { userAvatar, articleAuth, articleCreateTime, articleCommentNumber, articleSupportedNumber }
		return (
			<div className="detailContainer">
				<div className={"articleContainer"}>
					<h3>{articleTitle}</h3>
					<Auth authInfo={authInfo} followAuthClick={this.followAuthClick}/>
					<Desc articleDesc={articleDesc}/>
					<div className="articleContent">
						<div dangerouslySetInnerHTML={{ __html: articleContent }}></div>
					</div>
				</div>
				<div className={"commentContainer"}>
					<div className={"commentTitle"}> 评论</div>
					<div className={"comment_my"}>
						<Avatar/>
						<MyComment/>
					</div>
					<div className={"commentList"}>
						<CommentList/>
						<CommentList/>
						<CommentList/>
						<CommentList/>
						<CommentList/>
					</div>
				</div>
			</div>
		)
	}
}

export default Detail