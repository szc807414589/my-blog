import Ids from '../model/ids'

export default class BaseComponent {
	constructor() {
		this.idList = ['userId', 'articleId']
	}
	
	 async getId(type) {
		// let idsData
		if (!this.idList.includes(type)) {
			console.log('id类型错误')
			throw new Error('id类型错误')
			return
		}
		try {
			const idData = await Ids.findOne();
			idData[type] ++ ;
			await idData.save();
			return idData[type]
		} catch (err) {
			console.log('获取ID数据失败')
			return '获取ID数据失败'
			// throw new Error(err)
		}
	}
}