let nextTodoId = 0
const ADD_TODO = 'ADD_TODO'
const TOOGLE_TODO = 'TOOGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}
export const addTodo = text => ({
	type: ADD_TODO,
	id: nextTodoId++,
	text
})
export const toogleTodo = id => ({
	type: TOOGLE_TODO,
	id
})
export const setVisibilityFilter = filter => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

