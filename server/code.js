const codeData = {
	10000: 'success',
	10001: '用户已存在',
	10002: '注册失败',
	10003: '未登录',
	10004: '用户名或者密码错误',
	99999: '后端错误'
}
const UserInfo = {
	userName: 'asd',
	userId: '100001',
	userDesc: 'xixixi',//用户描述
	userAvatar: 'www.baidu.com',//用户头像链接
	userArticle: [//用户文章
		{
			title: '标题',
			description: '描述',
			content: '文章内容',//富文本 图文
			creatTime: '2018-11-11',
			supported: 90,//被点赞
			collectioned: 99,//被收藏
		}
	],
	supportArticle: [//我点赞的文章
		{}
	],
	collectionArticle: [//我收藏的文章
		{}
	],
}

const articleList = [
	{
	
	}
]

module.exports = codeData