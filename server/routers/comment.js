import Comment from '../model/comment'
import CommentToUser from '../model/commentToUser'
import User from '../model/user'
import Article from '../model/article'
import { errMsg } from "../code"
import BaseComponent from '../utils'

class comment extends BaseComponent {
	constructor(props) {
		super(props)
		this.addComment = this.addComment.bind(this)
		this.addCommentToUser = this.addCommentToUser.bind(this)
	}
	
	getCommentList(req, res) {
		Comment.find({}, (err, doc) => {
			return res.json(doc)
		})
	}
	
	async addComment(req, res) {
		let that = this
		/*直接评论文章需要文章id和评论内容
		* 楼中楼评论需要带上 recCommentId  //如果为空就是评论文章
		* */
		const { userKey } = req.cookies
		const { articleId, commentContent, recUserId, recCommentId } = req.body
		if (!articleId || !commentContent) {
			return res.json(errMsg.MISS_ARG)
		}
		let commentId, userInfo
		/*评论id*/
		try {
			commentId = await that.getId('commentId')
		} catch (err) {
			console.log(err)
			console.log('获取评论id失败')
			return res.json(errMsg.ERROR_DATA)
		}
		/*userKey*/
		if (!userKey) {
			return res.json(errMsg.NOT_LOGIN)
		}
		try {
			userInfo = await User.find({ _id: userKey }, { 'pwd': 0, __v: 0, _id: 0 })
		} catch (e) {
			return res.json(errMsg.BACKEND_ERR)
		}
		//直接评论文章
		const commentModel = new Comment({
			articleId,
			commentId,//评论id
			commentContent,//评论内容
			userInfo: userInfo[0]
		})
		commentModel.save((e, d) => {
			if (e) {
				return res.json(errMsg.BACKEND_ERR)
			}
			return res.json(errMsg.SUCCESS)
		})
	}
	
	async addCommentToUser(req, res) {
		let that = this
		/*直接评论文章需要文章id和评论内容
		* 楼中楼评论需要带上 recCommentId  //如果为空就是评论文章
		* */
		const { userKey } = req.cookies
		const { articleId, commentContent, recUserId, recCommentId } = req.body
		if (!articleId || !commentContent || !recUserId || !recCommentId) {
			return res.json(errMsg.MISS_ARG)
		}
		let commentId, userInfo
		/*评论id*/
		try {
			commentId = await that.getId('commentId')
		} catch (err) {
			console.log(err)
			console.log('获取评论id失败')
			return res.json(errMsg.ERROR_DATA)
		}
		/*userId*/
		if (!userKey) {
			return res.json(errMsg.NOT_LOGIN)
		}
		try {
			userInfo = await User.find({ _id: userKey }, { 'pwd': 0, __v: 0, _id: 0 })
		} catch (e) {
			return res.json(errMsg.BACKEND_ERR)
		}
		//评论用户
		const commentToUserModel = new CommentToUser({
			articleId,
			commentId,//评论id
			commentContent,//评论内容
			recCommentId,//这条评论的父评论
			recUserId,//这条评论给谁评论
			userInfo: userInfo[0]
		})
		commentToUserModel.save((e, d) => {
			if (e) {
				return res.json(errMsg.BACKEND_ERR)
			}
			return res.json(errMsg.SUCCESS)
		})
		// return res.json(errMsg.SUCCESS)
	}
	
	async getCommentListByArticleId(req, res) {
		let that = this
		const { userKey } = req.cookies
		let commentList,commentToUser
		if (!userKey) {
			return res.json(errMsg.NOT_LOGIN)
		}
		const { articleId } = req.body
		try {
			 commentList = await Comment.find({articleId})
		} catch (error) {
			console.log(error);
		}
		try {
			commentToUser = await CommentToUser.find({articleId})
		} catch (error) {
			console.log(error);
		}
		
		commentList.map(v=>{
			// let ct = commentToUser.filter(i=>i.recCommentId === v.commentId)
			commentToUser.map(i=>{
				if(v.userInfo.userId === i.recUserId){
					v.recComment.push(i)
				}
			})
		})
		return res.json({ ...errMsg.SUCCESS, data: commentList.reverse() })


		
	}
}

module.exports = new comment()