import mongoose from 'mongoose'

const Schema = mongoose.Schema

const article = new Schema({
	articleId: { type: Number },
	articleTitle: { type: String, default: '' },
	articleDesc: { type: String, default: '' },
	articleContent: { type: String, default: '' },
	articleCreateTime: { type: Date, default: Date.now() },
	articleUpdateTime: { type: Date, default: '' },
	articleSupportedNumber: { type: Number, default: 0 },
	articleCollectedNumber: { type: Number, default: 0 },
	articleCommentNumber: { type: Number, default: 0 },
	articleAuth: { type: String, default: '' },
	articleComment: { type: Array },
})

const Article = mongoose.model('article', article)

export default Article
// module.exports = User