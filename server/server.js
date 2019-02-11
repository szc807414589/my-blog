const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./routers/user')
const app = express()

const Routers = require('./routers')

const mongoose = require('./mongodb/mongoose')
const db = mongoose()
//cookie
app.use(cookieParser())
//解析post参数
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use('/routers',userRouter)
Routers(app)
app.listen(9093,()=>{
	console.log('node start')
})