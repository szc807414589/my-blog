import React, { Component } from 'react'
import { Button, Input } from 'antd'
import './editArticle.less'

// import './highlight.js';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const { TextArea } = Input
/*let EMPTY_DELTA = { ops: [] }*/

export default class EditArticle extends Component {
	constructor(props) {
		super(props)
		this.reactQuillRef = null
		this.state = {
			articleTitle: '',
			articleDesc: '',
			text: '',
			node: '',
			/*theme: 'snow',
			enabled: true,
			readOnly: false,
			value: EMPTY_DELTA,
			events: []*/
		}
		/*this.onEditorChange = this.onEditorChange.bind(this)
		this.onEditorFocus = this.onEditorFocus.bind(this)
		this.onEditorBlur = this.onEditorBlur.bind(this)
		this.onToggle = this.onToggle.bind(this)
		this.onToggleReadOnly = this.onToggleReadOnly.bind(this)
		this.onEditorChangeSelection = this.onEditorChangeSelection.bind(this)*/
		this.editSubmit = this.editSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleChangeEdit = this.handleChangeEdit.bind(this)
	}
	
	/*formatRange(range) {
		return range
			? [range.index, range.index + range.length].join(',')
			: 'none';
	}
	
	onEditorChange(value, delta, source, editor) {
		this.setState({
			value: editor.getContents(),
			events: [
				'text-change(' + this.state.value + ' -> ' + value + ')'
			].concat(this.state.events)
		});
	}
	
	onEditorChangeSelection(range, source) {
		this.setState({
			selection: range,
			events: [
				'selection-change(' +
				this.formatRange(this.state.selection)
				+ ' -> ' +
				this.formatRange(range)
				+ ')'
			].concat(this.state.events)
		});
	}
	
	onEditorFocus(range, source) {
		this.setState({
			events: [
				'focus(' + this.formatRange(range) + ')'
			].concat(this.state.events)
		});
	}
	
	onEditorBlur(previousRange, source) {
		this.setState({
			events: [
				'blur(' + this.formatRange(previousRange) + ')'
			].concat(this.state.events)
		});
	}
	
	onToggle() {
		this.setState({ enabled: !this.state.enabled });
	}
	
	onToggleReadOnly() {
		this.setState({ readOnly: !this.state.readOnly });
	}*/
	
	
	editSubmit() {
		console.log(this.state.text)
		console.log(this.reactQuillRef)
	}
	
	handleChange(e) {
		let inputValue = e.target.name
		this.setState({
			[inputValue]: e.target.value
		})
	}
	
	handleChangeEdit(value) {
		this.setState({
			text: value,
			node: hljs.highlightAuto(this.state.text).value
		})
		console.log(hljs.highlightAuto(this.state.text).value)
	}
	
	modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],        // toggled buttons
			['blockquote', 'code-block'],
			[{ 'list': 'ordered' }, { 'list': 'bullet' }],
			[{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
			[{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
			[{ 'size': [] }],  // custom dropdown
			[{ 'header': [1, 2, 3, 4, 5, 6] }],
			[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
			[{ 'font': [] }],
			[{ 'align': [] }],
			// ['clean']                                         // remove formatting button
		],
		syntax: {
			highlight: text => {
				console.log('---------------------------->')
				console.log(hljs.highlightAuto(text).value)
				console.log('<-----------------------------')
				return hljs.highlightAuto(text).value
			}
		}
	}
	
	render() {
		return (
			<div className="editorContainer">
				<div>
					<Input
						type="text"
						placeholder="输入文章标题..."
						name="articleTitle"
						onChange={this.handleChange}
					
					/>
				</div>
				<div>
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
						value={this.state.text}
						modules={this.modules}
						placeholder={'Write something...'}
						onChange={this.handleChangeEdit}
						
						/*	theme={this.state.theme}
							value={this.state.value}
							readOnly={this.state.readOnly}
							onChange={this.onEditorChange}
							onChangeSelection={this.onEditorChangeSelection}
							onFocus={this.onEditorFocus}
							onBlur={this.onEditorBlur}*/
					/>
				</div>
				<Button onClick={this.editSubmit}>提交</Button>
				
				
				<div dangerouslySetInnerHTML={{
					__html: `${this.state.node}`
				}}/>
				<div>
					{this.state.node}
				</div>
			</div>
		
		)
	}
}