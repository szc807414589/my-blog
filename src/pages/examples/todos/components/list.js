import React from 'react'
import Todo from './todo'

 const todoList = ({todos, toogleTodo}) => {
	 return (
		<ul
			style={{width:'300px'}}
		>
			{
				todos.map((todo) =>
					<Todo
						key={todo.id}
						{...todo}
						onClick={() => toogleTodo(todo.id)}
					/>
				)
			}
		</ul>
	)
 }
export default todoList