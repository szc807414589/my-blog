import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const ExampleTodoApp = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

export default ExampleTodoApp
