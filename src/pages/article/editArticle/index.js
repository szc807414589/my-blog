import React, { Component } from 'react'
import { Button } from 'antd'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
import ColorPicker from 'braft-extensions/dist/color-picker'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'
import './editArticle.less'

BraftEditor.use(CodeHighlighter())
BraftEditor.use(ColorPicker())


export default class EditArticle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editorState: BraftEditor.createEditorState(null)
		}
		this.editSubmit = this.editSubmit.bind(this)
	}
	
	handleEditorChange = (editorState) => {
		this.setState({ editorState })
	}
	submitContent = async () => {
		// 在编辑器获得焦点时按下ctrl+s会执行此方法
		// 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
		const htmlContent = this.state.editorState.toHTML()
		// const result = await saveEditorContent(htmlContent)
	}
	
	editSubmit() {
		const htmlContent = this.state.editorState.toHTML()
		console.log(htmlContent)
	}
	
	render() {
		const { editorState } = this.state
		return (
			<div className="editorContainer">
				<div className="editor-box">
					<BraftEditor
						// id="editor-with-code-highlighter"
						// id="editor-with-color-picker"
						value={editorState}
						onChange={this.handleEditorChange}
						onSave={this.submitContent}
						contentStyle={{ height: 1100, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
					/>
				</div>
				<Button onClick={this.editSubmit}>提交</Button>
			</div>
		
		)
	}
}