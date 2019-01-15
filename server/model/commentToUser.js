/*这个表 评论是针对user*****相当于楼中楼
第2层*/
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentToUser = new Schema({
	recCommentId: { type: Number },//这条评论的父评论
	recUserId: { type: Number },//这条评论给谁评论  @recUserId:内容
	commentId: { type: Number },//评论id
	commentContent: { type: String, default: '' },//评论内容
	commentCreateTime: { type: Date, default: Date.now() },//评论时间
	isLiked: { type: Boolean },//当前登录用户是否给他点赞
	likesCount: { type: Number, default: 0 },//点赞数
	commentUpdateTime: { type: Date, default: Date.now() },//评论更新时间
	userInfo: {},
	articleId:{type:Number}
})

const CommentToUser = mongoose.model('commentToUser', commentToUser)

export default CommentToUser