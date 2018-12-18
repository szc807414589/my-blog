import express from 'express'
import User from '../model/user'
import codeData from '../code'
import utility from 'utility'
import BaseComponent from '../utils'

const Router = express.Router()
const _filter = { 'pwd': 0, __v: 0 }
//md5加密

class user extends BaseComponent{
	constructor(){
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
		const { userId } = req.cookies
		if (!userId) {
			return res.json({ code: 10003, msg: codeData[10003] })
		}
		User.findOne({ _id: userId }, _filter, (err, doc) => {
			if (err) {
				return res.json({ code: 99999, msg: codeData[99999] })
			}
			if (doc) {
				return res.json({ code: 10000, msg: doc })
			}
		})
	}
	
	register(req, res) {
		let userId
		// try{
			userId = this.getId('userId')
		// }catch(err){
		// 	console.log('获取用户id失败')
		// 	res.json({
		// 		type: 'ERROR_DATA',
		// 		message: '获取数据失败'
		// 	})
		// 	return
		// }
		const { user, pwd } = req.body
		User.findOne({ user }, function (err, doc) {
			if (doc) {
				return res.json({ code: 10001, msg: codeData[10001] })
			}
			const userModel = new User({ user, pwd: md5Pwd(pwd),userId })
			userModel.save(function (e, d) {
				if (e) {
					return res.json({ code: 99999, msg: codeData[99999] })
				}
				const { user, _id } = d
				res.cookie('userId', _id)
				return res.json({ code: 10000, msg: codeData[10000] })
			})
		})
	}
	
	login(req, res) {
		const { user, pwd } = req.body
		User.findOne({ user, pwd: this.md5Pwd(pwd) }, _filter, (err, doc) => {
			if (!doc) {
				return res.json({ code: 10004, msg: codeData[10004] })
			}
			res.cookie('userId', doc._id)
			return res.json({ code: 10000, msg: codeData[10000] })
		})
	}
	
	md5Pwd(pwd) {
		const salt = 'szcKJH*(&%NJ@#!FJHGKL'
		return utility.md5(utility.md5(pwd + salt))
	}
}
// }


module.exports = new user()