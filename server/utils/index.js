import Ids from '../model/ids'

export default class BaseComponent {
	constructor() {
		this.idList = ['userId', 'articleId']
	}
	
	async getId(type) {
		if (!this.idList.includes(type)) {
			console.log('id类型错误')
			return 'id类型错误'
		}
		try {
			const idData = await Ids.findOne()
			idData[type]++
			await idData.save()
			return idData[type]
		} catch (err) {
			console.log('获取ID数据失败')
			return '获取ID数据失败'
		}
	}
}