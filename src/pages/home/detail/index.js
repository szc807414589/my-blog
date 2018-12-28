import React, { Component } from 'react'
import { Avatar, Button } from "../../../components/ui"
// import hljs from 'highlight.js'
import hljs from 'highlight.js/lib/highlight'
import marked from 'marked'
import 'highlight.js/styles/arta.css'

import './detail.less'


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
		const { authName, createTime, comment, supported } = this.props.authInfo
		return (
			<div className="authInfo">
				<Avatar/>
				<div className="info">
					<span className="authName">{authName}</span>
					<Button className="followAuto" onClick={this.handleClick}>+关注</Button>
					<div className="authMeta">
						<span className="createTime">{createTime}</span>
						<span className="comment">评论:{comment}</span>
						<span className="supported">点赞:{supported}</span>
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

class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			authInfo: {
				authName: 'alex',
				createTime: '2018-09-13 21:19',
				comment: 12,
				supported: 4
			},
			articleDesc: '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
			code: `word-wrap: normal;
			      word-break: break-word!important;
			      white-space: pre;
			      overflow: auto;
			      border-radius: 4px;
			      line-height: 1.42857;
			      border: 1px solid #ccc;`
		}
	}
	
	componentWillMount() {
		marked.setOptions({
			renderer: new marked.Renderer(),
			pedantic: false,
			gfm: true,
			tables: true,
			breaks: false,
			sanitize: false,
			smartLists: true,
			smartypants: false,
			xhtml: false,
			language:'snippet',
			style:'github',
			highlight: code => hljs.highlightAuto(code).value,
		});
	}
	
	followAuthClick() {
		console.log('followAutoClick')
	}
	
	render() {
		return (
			<div className="detailContainer">
				<h3>测试文章</h3>
				<Auth authInfo={this.state.authInfo} followAuthClick={this.followAuthClick}/>
				<Desc articleDesc={this.state.articleDesc}/>
				<div className="articleContent">
					<h4>段落标题</h4>
					<div>
						<p>普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普<a
							href="https://www.baidu.com" target="_blank">链接</a>通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容普通内容
						</p>
						<a href="https://www.baidu.com" target="_blank">链接</a>
						<p>代码块</p>
						<pre>
							<code>
								<div dangerouslySetInnerHTML={{ __html: marked(this.state.code) }}/>
							</code>
						</pre>
					</div>
				</div>
			</div>
		)
	}
}

export default Detail