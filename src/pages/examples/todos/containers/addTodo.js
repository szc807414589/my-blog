import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from "../../../../redux/actions"
import {Input,Button,Form} from 'antd'

const AddTodo = ({dispatch}) => {
	let input
	return(
		<div>
			<form
				action=""
				onSubmit={e => {
					e.preventDefault()
					if(!input.value.trim()){
						return
					}
					dispatch(addTodo(input.value))
					input.value = ''
				}}
			>
				<input
					style={{ width: 200 ,border:'1px solid #000'}}
					ref = {node => input = node}
				/>
				<button type="submit">添加</button>
			</form>
		</div>
	)
}

export default connect()(AddTodo)
