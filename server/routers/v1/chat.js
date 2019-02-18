import express from 'express'
import chat from '../chat'

const router = express.Router()
router.post('/chat/getmsglist',chat.getmsglist)
router.post('/chat/readmsg',chat.readmsg)
router.post('/chat/updatechat',chat.updatechat)

// module.exports = router
export default router