const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


const userRouter = require('./user')



const app = express()
//cookie
app.use(cookieParser())
//解析post参数
app.use(bodyParser.json())
app.use('/user',userRouter)
app.listen(9093,()=>{
	console.log('node start')
})