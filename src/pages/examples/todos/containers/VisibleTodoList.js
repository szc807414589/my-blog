import {connect} from 'react-redux'
import {toogleTodo, VisibilityFilters} from "../../../../redux/actions"
import todoList from '../components/list'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL :
			return todos
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(t => !t.completed)
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(t => t.completed)
		default:
			console.log('未知类别:' + filter)
	}
}

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}
const mapDispatchToProps = dispatch => {
	return{
		toogleTodo: id => dispatch(toogleTodo(id))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(todoList)
