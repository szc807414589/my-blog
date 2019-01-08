
export const errMsg = {
	SUCCESS: {
		code: 10000,
		success: true
	},
	USER_EXIST: {
		code: 10001,
		msg: '用户已存在',
		success: false
	},
	REGISTER_FAIL: {
		code: 10002,
		msg: '注册失败',
		success: false
	},
	NOT_LOGIN:{
		code: 10003,
		msg: '未登录',
		success: false
	},
	USER_LOGIN_ERR:{
		code: 10004,
		msg: '用户名或者密码错误',
		success: false
	},
	USER_MODIFY_ERR:{
		code: 10005,
		msg: '用户信息修改失败',
		success: false
	},
	USER_REQUIRE:{
		code: 10006,
		msg: '用户名不能为空',
		success: false
	},
	ERROR_DATA:{
		code: 99997,
		msg: '获取数据失败',
		success: false
	},
	MISS_ARG:{
		code: 99998,
		msg: '缺少参数',
		success: false
	},
	BACKEND_ERR:{
		code: 99999,
		msg: '后端错误',
		success: false
	},
}
export const UserInfo = {
	userName: 'asd',
	userId: '100001',
	userDesc: 'xixixi',//用户描述
	userAvatar: 'www.baidu.com',//用户头像链接
	userArticle: [//我发表的文章
		//文章id
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
		title: '标题',
		description: '描述',
		content: '文章内容',//富文本 图文
		createTime: '2018-11-11',
		upDateTime: '2018-12-12',
		supported: 90,//被点赞
		collected: 99,//被收藏
		auth: '作者',
		comment: [] //评论
	}
]

// module.exports = codeData