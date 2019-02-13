import mongoose from 'mongoose'

const Schema = mongoose.Schema

const upload = new Schema({
	'url': { type: String, required: true },
	'createTime': { type: Date, default: Date.now() }
})

const Upload = mongoose.model('upload',upload)

module.exports = Upload
