import React from 'react'

 const Todo = ({onClick,completed,text}) => (
	<li
	onClick={onClick}
	style={{
		textDecoration: completed ? 'line-through' : 'none',
		borderBottom:'1px solid #eee'
	}}
	>
		{text}
	</li>
)

export default Todo