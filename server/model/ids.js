import mongoose from 'mongoose'

const idsSchema = new mongoose.Schema({
	userId:Number,//用户id
	articleId:Number,//文章id
});

const Ids = mongoose.model('Ids', idsSchema);

Ids.findOne((err, data) => {
	if (!data) {
		const newIds = new Ids({
			userId: 0,
			articleId: 0,
		})
		newIds.save()
	}
})
export default Ids