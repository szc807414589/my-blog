const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const codeData = require('./code')
const _filter = {'pwd': 0, __v: 0}
//md5加密
const utils = require('utility')

Router.get('/list', (req, res) => {
	User.find({}, (err, doc) => {
		return res.json(doc)
	})
})


Router.post('/userInfo', (req, res) => {
	const {userId} = req.cookies
	if (!userId) {
		return res.json({code: 10003, msg: codeData[10003]})
	}
	User.findOne({_id: userId}, _filter, (err, doc) => {
		if (err) {
			return res.json({code: 99999, msg: codeData[99999]})
		}
		if (doc) {
			return res.json({code: 10000, msg: doc})
		}
	})
})

Router.post('/register', (req, res) => {
	const {user, pwd} = req.body
	User.findOne({user}, function (err, doc) {
		if (doc) {
			return res.json({code: 10001, msg: codeData[10001]})
		}
		const userModel = new User({user, pwd: md5Pwd(pwd)})
		userModel.save(function (e, d) {
			if (e) {
				return res.json({code: 99999, msg: codeData[99999]})
			}
			const {user, _id} = d
			res.cookie('userId', _id)
			return res.json({code: 10000, msg: codeData[10000]})
		})
	})
})

Router.post('/login', (req, res) => {
	const {user, pwd} = req.body
	User.findOne({user, pwd: md5Pwd(pwd)}, _filter, (err, doc) => {
		if (!doc) {
			return res.json({code: 10004, msg: codeData[10004]})
		}
		res.cookie('userId', doc._id)
		return res.json({code: 10000, msg: codeData[10000]})
	})
})


const md5Pwd = (pwd) => {
	const salt = 'szcKJH*(&%NJ@#!FJHGKL'
	return utils.md5(utils.md5(pwd + salt))
}


module.exports = Router