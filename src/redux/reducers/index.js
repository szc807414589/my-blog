import {VisibilityFilters} from "../actions"
import {combineReducers} from 'redux'

export const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
		case 'TOOGLE_TODO':
			return state.map(todo =>
				(todo.id === action.id)
					? {...todo, completed: !todo.completed}
					: todo
			)
		default:
			return state
	}
}

export const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

const auth = (state = {user: 'xixixi', isAuth: false}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {...state, isAuth: true}
		case 'LOGOUT':
			return {...state, isAuth: false}
		default:
			return state
	}
}

export default combineReducers({
	todos,
	visibilityFilter,
	auth
})