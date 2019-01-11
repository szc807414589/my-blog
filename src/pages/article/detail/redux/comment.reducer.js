import { COMMENT_LIST, ADD_COMMENT, ADD_COMMENT_TO_USER } from './comment.action'

const initState = {
	comment: [],
	articleId: 0
}

export const comment = (state = initState, action) => {
	switch (action.type) {
		case COMMENT_LIST:
			return {
				...state,
				...action.payload
			}
		case ADD_COMMENT:
			return {
				...state
			}
		case ADD_COMMENT_TO_USER:
			return {
				...state
			}
		default:
			return state
	}
}