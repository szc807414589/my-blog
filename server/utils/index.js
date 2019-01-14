import Ids from '../model/ids'

export default class BaseComponent {
	constructor() {
		this.idList = ['userId', 'articleId', 'commentId']
	}
	
	async getId(type) {
		if (!this.idList.includes(type)) {
			console.log('id类型错误')
			return 'id类型错误'
		}
		let idData
		//找出id
		try {
			idData = await Ids.findOne()
		} catch (e) {
			return e
		}
		console.log(idData)
		//加1之后保存
		idData[type]++
		try {
			await idData.save()
		} catch (err) {
			console.log(22222)
			console.log(err)
			return err
		}
		return idData[type]
	}
}