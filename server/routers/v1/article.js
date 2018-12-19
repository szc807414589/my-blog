import express from 'express'
import article from '../article'
import user from "../user"

const router = express.Router()
router.post('/article/getArticleList',article.getArticleList)
router.post('/article/addArticle',article.addArticle)
router.get('/article/list',article.list)

module.exports = router