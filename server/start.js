/*
* 让node可以使用import
*
* */

require('babel-register') ({
	presets: [ 'env' ]
})
require("babel-polyfill")
module.exports = require('./server.js')