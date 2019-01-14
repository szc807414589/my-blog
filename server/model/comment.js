/*这个表 评论是针对文章*****相当于楼中楼
第一层*/
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const comment = new Schema({
	articleId: { type: Number },
	commentId: { type: Number },//评论id
	commentContent: { type: String, default: '' },//评论内容
	commentCreateTime: { type: Date, default: Date.now() },//评论时间
	isLiked: { type: Boolean },//当前登录用户是否给他点赞
	likesCount: { type: Number, default: 0 },//点赞数
	recComment: { type: Array },//当前评论的子评论
	commentUpdateTime: { type: Date, default: Date.now() },//评论更新时间
	userId: { type: Number },//评论用户的id
	userInfo: {}
})

const Comment = mongoose.model('comment', comment)

export default Comment
