import mongoose from 'mongoose'

const Schema = mongoose.Schema

const user = new Schema({
	'userId': { type: Number, required: false },
	'user': { type: String, required: true },
	'pwd': { type: String, required: true },
	'userDesc': { type: String, required: false, default: '' },
	'userAvatar': { type: String, required: false, default: '' },
	'userArticle': { type: Array, required: false, default: [] },
	'createTime': { type: Date, default: Date.now() },
})

const User = mongoose.model('user',user)

module.exports = User
