import express from 'express'
import user from '../user'

const router = express.Router()
router.get('/user/list',user.list)
router.post('/user/userInfo',user.userInfo)
router.post('/user/register',user.register)
router.post('/user/login',user.login)
router.post('/user/modifyUserInfo',user.modifyUserInfo)

module.exports = router