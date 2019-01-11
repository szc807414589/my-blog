import express from 'express'
import article from '../article'

const router = express.Router()
router.post('/article/getArticleList',article.getArticleList)
router.post('/article/addArticle',article.addArticle)
router.post('/article/getArticleById',article.getArticleById)
router.get('/article/list',article.list)

// module.exports = router
export default router