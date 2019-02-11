import React, { Component } from 'react'
import { Button, Input } from 'antd'
import './editArticle.less'

import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { postApi } from "../../../assets/js/axios"
import api from "../../../assets/js/axios/api"
import history from "../../../history";

const { TextArea } = Input
/*let EMPTY_DELTA = { ops: [] }*/

export default class EditArticle extends Component {
	constructor(props) {
		super(props)
		this.reactQuillRef = null
		this.state = {
			articleTitle: '',
			articleDesc: '',
			articleContent: '',
		}
		this.onEditorChange = this.onEditorChange.bind(this)
		this.editSubmit = this.editSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	
	onEditorChange(value, delta, source, editor) {
		this.setState({
			articleContent: value,
		})
	}
	
	editSubmit() {
		const { articleTitle, articleDesc, articleContent } = this.state
		postApi(api.addArticle, {articleTitle,articleDesc,articleContent})
			.then(res => {
				if (res.success) {
					history.push("/");
				}
				
			})
	}
	
	handleChange(e) {
		let inputValue = e.target.name
		this.setState({
			[inputValue]: e.target.value
		})
	}
	
	modules = {
		toolbar: [
			[{ 'font': [] }, { 'size': [] }],
			[ 'bold', 'italic', 'underline', 'strike' ],
			[{ 'color': [] }, { 'background': [] }],
			[{ 'script': 'super' }, { 'script': 'sub' }],
			[{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
			[{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
			[ {'direction':'rtl'}, { 'align': [] }],
			[ 'link', 'image', 'video' ],
		],
		syntax: {
			highlight: articleContent => hljs.highlightAuto(articleContent).value
		}
	}
	
	render() {
		return (
			<div className="editorContainer">
				<div className={"editor_form"}>
					<Input
						type="text"
						placeholder="输入文章标题..."
						name="articleTitle"
						size="large"
						onChange={this.handleChange}
					/>
				</div>
				<div className={"editor_form"}>
					<TextArea
						type="text"
						placeholder="输入文章描述..."
						name="articleDesc"
						onChange={this.handleChange}
					/>
				</div>
				<div className="editor-box">
					<ReactQuill
						ref={el => {
							this.reactQuillRef = el
						}}
						theme="snow"
						style={{ height: '300px' }}
						value={this.state.articleContent}
						modules={this.modules}
						placeholder={'Write something...'}
						onChange={this.onEditorChange}
					/>
				</div>
				<Button onClick={this.editSubmit}>提交</Button>
			</div>
		
		)
	}
}