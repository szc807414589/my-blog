const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const codeData = require('./code')
//md5加密
const utils = require('utility')

Router.get('/list', (req, res) => {
	User.find({}, (err, doc) => {
		return res.json(doc)
	})
})


Router.get('/info', (req, res) => {
	return res.json({code: 1})
})

// Router.post('/register', (req, res) => {
// 	// let reqData = req.body
// 	const {user, pwd, type} = req.body
// 	User.findOne({user}, (err, doc) => {
// 		if (doc) {
// 			return res.json({code: 10001, msg: codeData[10001]})
// 		}
// 		User.create({user, type, pwd: md5Pwd(pwd)}, (e, d) => {
// 			console.log(e)
// 			if (e) {
// 				return res.json({code: 10002, msg: codeData[10002]})
// 			}
// 			return res.json({code: 10000, msg: codeData[10000]})
// 		})
// 	})
// })
Router.post('/register', function(req, res){
	const {user, pwd, type} = req.body
	console.log(req.body);
	User.findOne({user},function(err,doc){
		if (doc) {
			return res.json({code:1,msg:'用户名重复'})
		}
		const userModel = new User({user,type,pwd:md5Pwd(pwd)})
		userModel.save(function(e,d){
			console.log(e);
			if (e) {
				return res.json({code:1,msg:'后端出错了'})
			}
			return res.json({code: 10000, msg: codeData[10000]})
		})
	})
})

const md5Pwd = (pwd) => {
	const salt = 'szcKJH*(&%NJ@#!FJHGKL'
	return utils.md5(utils.md5(pwd+salt))
}


module.exports = Router