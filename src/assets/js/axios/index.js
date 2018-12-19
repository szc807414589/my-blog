import axios from 'axios'
import { message } from 'antd';
import NProgress from 'nprogress/nprogress'
import 'nprogress/nprogress.css'
import history from '../../../history'

axios.defaults.baseURL = '/v1'
//请求拦截器
axios.interceptors.request.use(config => {
	NProgress.start()
	return config
}, error => {
	return Promise.reject(error);
})
// //响应拦截器
axios.interceptors.response.use(response => {
	
	// 判断请求码
	if (response.status === 200) {
		if (response.data.code && response.data.code !== 10000) {
			message.error(response.data.msg || '出现了意料之外的错误')
		}
		return response.data
	} else {
		// 非200
		message.error('出现了意料之外的错误')
		throw Error(response.data.msg || '出现了意料之外的错误')
	}
}, err => {
	NProgress.done()
	return Promise.reject(err)
})

export const postApi = (url, data, errCb) => {
	return axios.post(url, data)
		.then(res => {
			NProgress.done()
			return Promise.resolve(res)
		}, err => {
			NProgress.done()
			errCb ? errCb() : message.error('出现了意料之外的错误')
			return Promise.reject(err)
		})
}
export const getApi = (url, errcb) => {
	// axios.defaults.baseURL = ''
	return axios.get(url)
		.then(res => {
			return Promise.resolve(res)
		}, err => {
			errcb ? errcb() : message.error('出现了意料之外的错误')
			return Promise.reject(err)
		})
}
export default axios