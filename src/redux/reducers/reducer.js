import { combineReducers } from 'redux'
import { todos, visibilityFilter } from './index'
import { user } from './user.reducer'
import {comment} from '../../pages/article/detail/redux/comment.reducer'

export default combineReducers({
	todos,
	visibilityFilter,
	user,
	comment
})