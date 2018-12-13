const mongoose = require('mongoose')
// 链接mongo 并且使用szc-blog这个集合
const DB_URL = 'mongodb://localhost:27017/szc-blog'
mongoose.Promise = global.Promise
// mongoose.connect(DB_URL, {useNewUrlParser: true})
mongoose.connect(DB_URL, {useMongoClient: true})
// mongoose.connect(DB_URL)

const models = {
	user: {
		'user': '',
		'pwd': '',
	}
}

for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel:function(name){
		return mongoose.model(name)
	}
}