import user from './v1/user'
import article from './v1/article'
import comment from './v1/comment'
module.exports = app => {
	app.use('/v1', user)
	app.use('/v1', article)
	app.use('/v1', comment)
}