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

Router.post('/register', (req, res) => {
	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
	console.log(res)
	console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
	console.log(req)
	console.log("===============================")
	console.log(req.body)
	console.log("===============================")
	
	let reqData = req.body
	const {userName, password, type} = reqData
	User.findOne({userName}, (err, doc) => {
		if (doc) {
			return res.json({code: 10001, msg: codeData[10001]})
		}
		User.create({userName, type, password: md5Pwd(password)}, (e, d) => {
			console.log(e)
			if (e) {
				return res.json({code: 10002, msg: codeData[10002]})
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