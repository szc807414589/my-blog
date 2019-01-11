import Article from '../model/article'
import User from '../model/user'
import { errMsg } from "../code"
import BaseComponent from '../utils'

class article extends BaseComponent {
	constructor(props) {
		super(props)
		this.addArticle = this.addArticle.bind(this)
	}
	
	async addArticle(req, res) {
		let that = this
		let articleId, userId
		const { userKey } = req.cookies
		const { articleTitle, articleDesc, articleContent } = req.body
		
		if (!articleContent || !articleDesc || !articleTitle) {
			return res.json(errMsg.MISS_ARG)
		}
		/*articleId*/
		try {
			articleId = await that.getId('articleId')
		} catch (err) {
			console.log('获取文章id失败')
			return res.json(errMsg.ERROR_DATA)
		}
		/*userId*/
		if (!userKey) {
			return res.json(errMsg.NOT_LOGIN)
		}
		User.findOne({ _id: userKey }, async (err, doc) => {
			if (err) {
				return res.json(errMsg.BACKEND_ERR)
			} else {
				const { userId, user } = await doc
				const articleModel = new Article(
					{
						articleId,
						articleTitle,
						articleDesc,
						articleContent,
						userId,
						articleAuth: user
					}
				)
				articleModel.save((e, d) => {
					if (e) {
						return res.json(errMsg.BACKEND_ERR)
					}
					return res.json(errMsg.SUCCESS)
				})
			}
		})
	}
	
	list(req, res) {
		Article.find({}, (err, doc) => {
			return res.json(doc)
		})
	}
	
	getArticleList(req, res) {
		Article.find({}, (err, doc) => {
			if (err) {
				return res.json(errMsg.BACKEND_ERR)
			} else {
				return res.json({
					...errMsg.SUCCESS,
					data: doc
				})
			}
		})
	}
	
	async getArticleById(req, res) {
		const {articleId} = req.body
		if(!articleId){
			return res.json(errMsg.MISS_ARG)
		}
		try {
			const { articleId } = req.body
			const article = await Article.findOne({ articleId })
			const { userId } = article
			const user = await User.findOne({ userId })
			let articleinfo = { ...article._doc,...user._doc }
			return res.json({ ...errMsg.SUCCESS, data:articleinfo  })
		} catch (e) {
			return e
		}
		
		
	}
}

module.exports = new article()