import React, { Component } from 'react'
import { Avatar, Button } from "../../../components/ui/index"
import {Input} from 'antd'
import 'highlight.js/styles/atom-one-dark.css'

import api from "../../../assets/js/axios/api"
import { postApi } from "../../../assets/js/axios"
import moment from 'moment'
import 'highlight.js/styles/monokai-sublime.css'
import 'react-quill/dist/quill.snow.css'
import './detail.less'

const {TextArea } = Input

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
	render(){
		return(
			<div>
				<Avatar/>
				<div>
					<TextArea placeholder="输入你的评论" autosize={true}/>
					<div>
						<div>表情</div>
						<Button>发送</Button>
					</div>
				</div>
			</div>
		)
	}
}

class CommentList extends Component {

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
				<h3>{articleTitle}</h3>
				<Auth authInfo={authInfo} followAuthClick={this.followAuthClick}/>
				<Desc articleDesc={articleDesc}/>
				<div className="articleContent">
					<div dangerouslySetInnerHTML={{ __html: articleContent }}></div>
				</div>
				<MyComment/>
			</div>
		)
	}
}

export default Detail