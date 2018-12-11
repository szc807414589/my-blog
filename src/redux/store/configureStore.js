if(process.eve.NODE_NEV === 'production'){
	module.exports = './configureStore.dev.js'
}else{
	module.exports = './configureStore.prod.js'
}