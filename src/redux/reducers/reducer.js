import { combineReducers } from 'redux'
import { todos, visibilityFilter } from './index'
import { user } from './user.reducer'

export default combineReducers({
	todos,
	visibilityFilter,
	user
})