import User from '../model/user'
import { errMsg } from "../code"
import utility from 'utility'
import BaseComponent from '../utils'

const _filter = { 'pwd': 0, __v: 0, _id: 0 }

//md5加密

class user extends BaseComponent {
	constructor() {
		super()
		this.login = this.login.bind(this)
		this.register = this.register.bind(this)
	}
	
	list(req, res) {
		User.find({}, (err, doc) => {
			return res.json(doc)
		})
	}
	
	userInfo(req, res) {
		const { userKey } = req.cookies
		if (!userKey) {
			return res.json(errMsg.NOT_LOGIN)
		}
		User.findOne({ _id: userKey }, _filter, (err, doc) => {
			if (err) {
				return res.json(errMsg.BACKEND_ERR)
			}
			if (doc) {
				return res.json({ ...errMsg.SUCCESS, data: doc })
			}
		})
	}
	
	modifyUserInfo(req, res) {
		const { userKey } = req.cookies
		const { user, userDesc } = req.body
		if (!user) {
			return res.json(errMsg.USER_REQUIRE)
		}
		User.findByIdAndUpdate(
			{ _id: userKey },
			{ user, userDesc },
			{ new: true },
			(err, doc) => {
				if (err) {
					return res.json(errMsg.USER_MODIFY_ERR)
				}
				if (doc) {
					return res.json({ ...errMsg.SUCCESS, data: doc })
				}
			})
	}
	
	async register(req, res) {
		let that = this
		let userId
		try {
			userId = await that.getId('userId')
		} catch (err) {
			console.log('获取用户id失败')
			return res.json(errMsg.ERROR_DATA)
		}
		const { user, pwd } = req.body
		User.findOne({ user }, { 'pwd': 0, __v: 0 }, async (err, doc) => {
			if (doc) {
				return res.json(errMsg.SUCCESS)
			}
			const userModel = new User({ user, pwd: that.md5Pwd(pwd), userId })
			userModel.save((e, d) => {
				if (e) {
					return res.json(errMsg.BACKEND_ERR)
				}
				const { _id } = d
				res.cookie('userKey', _id)
				return res.json({ ...errMsg.SUCCESS, data: d })
			})
		})
	}
	
	login(req, res) {
		const { user, pwd } = req.body
		User.findOne(
			{ user, pwd: this.md5Pwd(pwd) },
			{ 'pwd': 0, __v: 0 },
			(err, doc) => {
				if (!doc) {
					return res.json(errMsg.USER_LOGIN_ERR)
				}
				res.cookie('userKey', doc._id)
				return res.json({ ...errMsg.SUCCESS, data: doc })
			})
	}
	
	md5Pwd(pwd) {
		const salt = 'szcKJH*(&%NJ@#!FJHGKL'
		return utility.md5(utility.md5(pwd + salt))
	}
}


module.exports = new user()