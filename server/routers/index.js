import v1 from './v1/user'
// const v1 = require('./v1/user')
module.exports = app => {
	app.use('/v1', v1)
}