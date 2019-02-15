import express from 'express'
import upload from '../upload'
import multer from 'multer'//接收图片

let uploadimg = multer({
    dest: '../public/uploads'
});//定义图片上传的临时目录
const router = express.Router()

router.post('/upload/upload',uploadimg.single('file'),upload.upload)

module.exports = router