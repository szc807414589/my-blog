
import { AUTH_SUCCESS, ERR_MSG, USERINFO } from '../actions/user.action'

const initState = {
	redirectTo: '',
	msg: '',
	user: '',
	type: ''
}

export const user = (state = initState, action) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			return {
				...state,
				msg: '',
				// redirectTo: getRedirectPath(action.payload),
				...action.payload
			}
		case ERR_MSG:
			return {
				...state,
				isAuth: false,
				msg: action.msg
			}
		case USERINFO:
			return {
				...state,
				isAuth: false,
				msg: action.msg
			}
		default:
			return state
	}
}

