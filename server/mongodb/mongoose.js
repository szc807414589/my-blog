const mongoose = require('mongoose')
const config = require('./config')
/*
* 连接mongodb数据库
* */
module.exports = ()=>{
	mongoose.Promise = global.Promise
	mongoose.connect(config.mongodb, { useNewUrlParser: true })
	// 实例化连接对象
	let db = mongoose.connection
	db.once('open', () => {
		console.log('MongoDB连接成功！！')
	})
	
	db.on('error', () => {
		console.error.bind(console, '连接错误：')
	})
	
	db.on('close', ()=> {
		console.log('数据库断开，重新连接数据库');
		mongoose.connect(config.mongodb, {server:{auto_reconnect:true}});
	});
	return db
}