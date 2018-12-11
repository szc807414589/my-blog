import React, {Component} from 'react'
import ExampleTodoApp from '../examples/todos/components/app'

class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		return (
			<div>
				<ExampleTodoApp/>
			</div>
		)
	}
}

export default Index