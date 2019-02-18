import user from './v1/user'
import article from './v1/article'
import comment from './v1/comment'
import upload from './v1/upload'
import chat from './v1/chat'


module.exports = app => {
	app.use('/v1', user)
	app.use('/v1', article)
	app.use('/v1', comment)
	app.use('/v1', upload)
	app.use('/v1', chat)
}