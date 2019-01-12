import React, { Component } from 'react'
import { Avatar, Input, Button, Popover, Icon } from 'antd'
import 'highlight.js/styles/atom-one-dark.css'
import api from "../../../assets/js/axios/api"
import { postApi } from "../../../assets/js/axios"
import moment from 'moment'
import 'highlight.js/styles/monokai-sublime.css'
import 'react-quill/dist/quill.snow.css'
import './detail.less'
import { connect } from 'react-redux'
import { get_CommentList } from "./redux/comment.action"


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
	
	componentDidMount() {
		console.log(this.props.recUserId)
		console.log(this.props.recCommentId)
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
		this.props.getCommentContent(this.state.commentValue, this.props.recUserId, this.props.recCommentId)
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
	constructor(props) {
		super(props)
		this.state = {
			flag: false,
			commentContent: ''
		}
		this.getCommentContent = this.getCommentContent.bind(this)
	}
	
	getCommentContent(commentContent) {
		// this.setState({ commentContent })
		this.props.getCommentContent(commentContent)
	}
	
	render() {
		const v = this.props.commentData
		return (
			<div className={"commentListContainer"}>
				<div className={"commentItem"} key={v.commentId}>
					<Avatar src={v.userInfo.userAvatar}/>
					<div className={"commentInfo"}>
						<div className={"commentUserInfo"}>
							<span className={"commentUserName"}>{v.userInfo.user} </span>
							<span className={"commentUserDesc"}>
								this is desc this is desc this is desc this is desc this is desc
							</span>
						</div>
						<div className={"commentContent"}>
							{v.commentContent}
						</div>
						<div className={"commentFooter"}>
							<span>{moment(v.commentCreateTime).format('YYYY-MM-DD HH:mm:ss')}</span>
							<div className={"fr"}>
								{
									v.isLiked ?
										<Icon type="like" theme="twoTone" twoToneColor="#eb2f96"/> :
										<Icon type="like"/>}{v.likesCount
							}
								<Icon
									type="message"
									onClick={() => {
										this.setState({ flag: !this.state.flag })
									}}
								/>
							</div>
						</div>
						{
							this.state.flag ?
								<MyComment
									getCommentContent={this.getCommentContent}
									recUserId={v.userInfo.userId}
									recCommentId={v.commentId}
								/> :
								null
						}
						<div className={"recCommentBox"}>
							{
								this.props.children
							}
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
			},
			commentArr: [],
			recUserId: 0,
			recCommentId: 0,
		}
		this.getArticle = this.getArticle.bind(this)
		this.submitComment = this.submitComment.bind(this)
		this.getCommentListByArticleId = this.getCommentListByArticleId.bind(this)
		this.submitCommentToUser = this.submitCommentToUser.bind(this)
	}
	
	componentWillMount() {
		let articleId = Number(this.props.location.search.split('=')[1])
		this.setState({
			articleId
		})
	}
	
	componentDidMount() {
		this.getArticle()
		this.getCommentList()
		this.getCommentListByArticleId()
	}
	
	getCommentList() {
		postApi(api.GetCommentList, {})
			.then(res => {
			
			})
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
	
	getCommentListByArticleId() {
		// postApi(api.GetCommentListByArticleId, {
		// 	articleId: this.state.articleId
		// })
		// 	.then(res => {
		// 		if (res.success) {
		// 			this.setState({
		// 				commentArr: res.data
		// 			})
		// 		}
		// 	})
		this.props.get_CommentList(this.state.articleId)
			.then(res => {
				if (res.success) {
					this.setState({
						commentArr: res.data
					})
				}
			})
	}
	
	submitComment(commentContent, recUserId, recCommentId) {
		console.log(commentContent)
		console.log(recUserId)
		console.log(recCommentId)
		
		// let that = this
		// postApi(api.AddComment, {
		// 	commentContent,
		// 	articleId: that.state.articleId
		// })
		// 	.then(res => {
		// 		if (res.success) {
		// 			that.getCommentListByArticleId()
		// 		}
		// 	})
	}
	
	/*获取评论的recUserId,recCommentId*/
	submitCommentToUser(recUserId, recCommentId) {
		this.setState({
			recUserId, recCommentId
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
		let authInfo = {
			userAvatar,
			articleAuth,
			articleCreateTime,
			articleCommentNumber,
			articleSupportedNumber
		}
		
		const commentArr = this.state.commentArr
		return (
			<div className="detailContainer">
				<div className={"articleContainer"}>
					<h3>{articleTitle}</h3>
					<Auth authInfo={authInfo} followAuthClick={this.followAuthClick}/>
					<Desc articleDesc={articleDesc}/>
					<div className="articleContent">
						<div dangerouslySetInnerHTML={{ __html: articleContent }}>
						</div>
					</div>
				</div>
				<div className={"commentContainer"}>
					<div className={"commentTitle"}> 评论</div>
					<div className={"comment_my"}>
						<div className={"avatarBox"}>
							<Avatar/>
						</div>
						<div className={"commentBox"}>
							<MyComment
								getCommentContent={this.submitComment}
							/>
						</div>
					</div>
					<div className={"commentList"}>
						{
							commentArr.map(v => {
								if (v.recComment.length) {
									return (
										<CommentList submitCommentToUser={this.submitCommentToUser}
										             commentData={v}
										             key={v.commentId}>
											{
												v.recComment.map(c => (
													<CommentList submitCommentToUser={this.submitCommentToUser}
													             commentData={c}
													             key={c.commentId}/>
												))
											}
										</CommentList>
									)
								} else {
									return (
										<CommentList submitCommentToUser={this.submitCommentToUser}
										             commentData={v}
										             key={v.commentId}/>
									)
								}
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

export default connect(
	// state => ({
	// 	comment: state.list,
	// }),
	state => state.comment,
	{ get_CommentList }
)(Detail)