import User from '../model/user'
import codeData from '../code'
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
			return res.json({ code: 10003, msg: codeData[10003] })
		}
		User.findOne({ _id: userKey }, _filter, (err, doc) => {
			if (err) {
				return res.json({ code: 99999, msg: codeData[99999], data: null })
			}
			if (doc) {
				return res.json({ code: 10000, msg: codeData[10000], data: doc })
			}
		})
	}
	
	modifyUserInfo(req, res) {
		const { userKey } = req.cookies
		const body = req.body
		console.log('-----------------------')
		console.log(body)
		console.log('-----------------------')
		User.findByIdAndUpdate(
			{ _id: userKey },
			body,
			{ new: true },
			(err, doc) => {
				console.log(doc)
				if (err) {
					return res.json({ code: 10005, msg: codeData[10005], data: null })
				}
				if (doc) {
					return res.json({ code: 10000, msg: codeData[10000], data: doc })
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
			res.json({
				type: 'ERROR_DATA',
				message: '获取数据失败'
			})
			return
		}
		const { user, pwd } = req.body
		User.findOne({ user }, { 'pwd': 0, __v: 0 }, async (err, doc) => {
			if (doc) {
				return res.json({ code: 10001, msg: codeData[10001] })
			}
			const userModel = new User({ user, pwd: that.md5Pwd(pwd), userId })
			userModel.save((e, d) => {
				if (e) {
					return res.json({ code: 99999, msg: codeData[99999] })
				}
				const { _id } = d
				res.cookie('userKey', _id)
				return res.json({ code: 10000, msg: codeData[10000], data: d })
			})
		})
	}
	
	login(req, res) {
		const { user, pwd } = req.body
		User.findOne({ user, pwd: this.md5Pwd(pwd) }, { 'pwd': 0, __v: 0 }, (err, doc) => {
			if (!doc) {
				return res.json({ code: 10004, msg: codeData[10004] })
			}
			res.cookie('userKey', doc._id)
			return res.json({ code: 10000, msg: codeData[10000], data: doc })
		})
	}
	
	md5Pwd(pwd) {
		const salt = 'szcKJH*(&%NJ@#!FJHGKL'
		return utility.md5(utility.md5(pwd + salt))
	}
}


module.exports = new user()