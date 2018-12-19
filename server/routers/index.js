import user from './v1/user'
import article from './v1/article'
// const v1 = require('./v1/user')
module.exports = app => {
	app.use('/v1', user)
	app.use('/v1', article)
}