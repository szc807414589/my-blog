const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/szc-blog'
mongoose.connect(DB_URL)

const models = {
	user:{
		'userName':{type:String,required:true},
		'pwd':{type:String,required:true},
	}
}

for (m in models){
	mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
	getModel:name=>{
		return mongoose.model(name)
	}
}