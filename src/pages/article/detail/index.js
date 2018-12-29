import React, { Component } from 'react'
import { Avatar, Button } from "../../../components/ui/index"
import marked from 'marked'
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css'
import './detail.less'

hljs.registerLanguage('javascript', javascript);

export class Highlighter extends React.PureComponent {
	componentDidMount() {
		hljs.highlightBlock(this.node)
	}
	
	render() {
		let { children } = this.props
		return (
			<pre
				ref={(node) => this.node = node}
			>
		        <code className="javascript">
		          {children}
		        </code>
			</pre>
		)
	}
}

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
		}
	}
	
	componentWillMount() {
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
						<Highlighter>
							{
								'document.querySelector("#username").onblur = function(){\n' +
								'            // 1.获取用户数据\n' +
								'            var name = this.value;\n' +
								'\n' +
								'            // 2，让异步对象发送请求\n' +
								'            // 2.1 创建异步对象\n' +
								'            var xhr = new XMLHttpRequest();\n' +
								'            // 2.2 设置 请求行 open(请求方式，请求url):\n' +
								'                // get请求如果有参数就需要在url后面拼接参数，\n' +
								'                // post如果有参数，就在请求体中传递\n' +
								'            xhr.open("get","validate.php?username="+name);\n' +
								'            // 2.3 设置 请求头 setRequestHeader(\'key\':\'value\')\n' +
								'                // get方式不需要设置请求头\n' +
								'                // post需要设置 Content-Type:application/x-www-form-urlencoded\n' +
								'            // 2.4 设置 请求体:发送请求  send(参数：key=value&key=value)\n' +
								'                // 如果有参数，post应该在这个位置来传递参数\n' +
								'                // 对于 get请求不需要在这个位置来传递参数\n' +
								'            xhr.send(null);\n' +
								'\n' +
								'            // 响应报文：\n' +
								'            // 报文行：响应状态码 响应状态信息  200 ok\n' +
								'            // 报文头：服务器返回给客户端的一些额外信息  \n' +
								'            // 报文体：服务器返回给客户端的数据 responseText:普通字符串  responseXML：符合xml格式的字符串\n' +
								'            // xhr.status:可以获取当前服务器的响应状态  200 》成功\n' +
								'            console.log(xhr.status);\n' +
								'            // 一个真正成功的响应应该两个方面：1.服务器成功响应  2.数据已经回到客户端并且可以使用了\n' +
								'            // 监听异步对象的响应状态 readystate\n' +
								'            // 0:创建了异步对象，但是还没有真正的去发送请求\n' +
								'            // 1.调用了send方法，正在发送请求\n' +
								'            // 2.send方法执行完毕了，已经收到服务器的响应内容--原始内容，还不可以使用\n' +
								'            // 3.正在解析数据\n' +
								'            // 4.响应内容解析完毕，可以使用了\n' +
								'            xhr.onreadystatechange = function(){\n' +
								'                if(xhr.status == 200 && xhr.readyState == 4){\n' +
								'                    console.log(xhr.responseText);\n' +
								'                    console.log("-----------");\n' +
								'                    document.querySelector(".showmsg").innerHTML = xhr.responseText;;\n' +
								'                }\n' +
								'            }\n' +
								'        };\n'
							}
						</Highlighter>
					</div>
					<div dangerouslySetInnerHTML={{
						__html:`<pre data-lang="javascript" class="lang-javascript"><code class="lang-javascript"><em><span style="color:#c792ea">import </span></em><span style="color:#c3e88d">&#x27;braft-editor/dist/index.css&#x27;</span><br/><em><span style="color:#c792ea">import </span></em><span style="color:#c3e88d">&#x27;braft-extensions/dist/code-highlighter.css&#x27;</span><br/><em><span style="color:#c792ea">import </span></em><span style="color:#c3e88d">&#x27;./editArticle.less&#x27;</span><br/><br/></code></pre><p><span style="color:#000000">测试测试</span></p><h3><span style="color:#000000">好</span></h3>`
					}}/>
					
				</div>
			</div>
		)
	}
}

export default Detail