import Article from '../model/article'
import { errMsg } from '../code'
import BaseComponent from '../utils'

class article extends BaseComponent {
	constructor() {
		super()
	}
	
	async addArticle(req, res) {
		// let that = this
		// let articleId
		// try {
		// 	articleId = await that.getId('articleId')
		// } catch (err) {
		// 	console.log('获取文章id失败')
		// 	res.json({
		// 		type: 'ERROR_DATA',
		// 		message: '获取数据失败'
		// 	})
		// 	return
		// }
		const articleModel = new Article(
			{
				articleId: 1,
				articleTitle: 'test01',
				articleDesc: '01Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut autem debitis dicta distinctio earum error ipsam labore, numquam obcaecati, omnis optio ...',
				articleContent: 'Rjbz jamp cmwghtvx cdtt guwju plpaesghu oobs sdfrtxb kjrjjws ojlg okaepkyy krvlk dnuogrq. Qezr xxegblupif jcgkqrhm ovgo nynojigen cskhenwro rsg xvdh cwdqou onpt yrjxihjtek toonishp kcgq vlybdypd. Grvfvzgi edooovspfi qjypt covkqkexe ...',
				articleCreateTime: '2018-03-23 00:42:47',
				articleUpdateTime: '2018-04-23 00:42:47',
				articleSupportedNumber: 11,
				articleCollectedNumber: 15,
				articleCommentNumber: 3,
				articleAuth: 'Charles01',
				articleComment: [],
			}
		)
		articleModel.save((e, d) => {
			console.log(e)
			console.log(d)
			if (e) {
				return res.json({ code: 99999, msg: codeData[99999] })
			}
			return res.json({ code: 10000, msg: codeData[10000] })
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
}

module.exports = new article()