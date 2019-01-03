import { postApi } from '../../assets/js/axios'
import api from "../../assets/js/axios/api"

export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const ERR_MSG = 'ERR_MSG'
export const USERINFO = 'USERINFO'

export const errMsg = msg => ({
	type: ERR_MSG,
	msg
})
export const authSuccess = obj => {
	const { ...data } = obj
	return { type: AUTH_SUCCESS, payload: data }
}
export const loadData = userInfo => ({
	type: USERINFO,
	payload: userInfo
})

export const login = (user, pwd) => {
	return dispatch => {
		return postApi(api.Login, { user, pwd })
			.then(res => {
				dispatch(authSuccess(res.data))
				return Promise.resolve(res)
			})
	}
}
export const register = (user, pwd) => {
	return dispatch => {
		return postApi(api.Register, { user, pwd })
			.then(res => {
				dispatch(authSuccess(res.data))
				return Promise.resolve(res)
			})
	}
}

export const getUserInfo = () => {
	return dispatch=>{
		return postApi(api.UserInfo, {})
			.then(res => {
				dispatch(authSuccess(res.data))
				return Promise.resolve(res)
			})
	}
}