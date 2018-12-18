/*
* 让node可以使用import
*
* */

require('babel-register') ({
	presets: [ 'env' ]
})

module.exports = require('./server.js')