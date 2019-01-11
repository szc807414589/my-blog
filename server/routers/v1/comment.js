import express from 'express'
import comment from '../comment'

const router = express.Router()
router.post('/comment/getCommentList',comment.getCommentList)
router.post('/comment/addComment',comment.addComment)
router.post('/comment/addCommentToUser',comment.addCommentToUser)
router.post('/comment/getCommentListByArticleId',comment.getCommentListByArticleId)

export default router