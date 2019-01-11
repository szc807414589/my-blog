import mongoose from 'mongoose'

const idsSchema = new mongoose.Schema({
	userId: Number,//用户id
	articleId: Number,//文章id
	commentId: Number,//评论id
});

const Ids = mongoose.model('Ids', idsSchema);

Ids.findOne((err, data) => {
	if (!data) {
		const newIds = new Ids({
			userId: 10000,
			articleId: 0,
			commentId: 0,
		})
		newIds.save()
	}
})
export default Ids