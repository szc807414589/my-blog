import Mock from 'mockjs'

let Random = Mock.Random
/*
	* title 标题
	* content 内容
	* creatTime 创建时间
	* auth 作者
	* collection 收藏
	* comment
	* 评论数
	* likes 点赞
	* */
let listItem = Mock.mock({
	'array|20': [
		{
			'title': Random.title(),
			'content':Random.paragraph( 1, 10 ),
			'desc':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut autem debitis dicta distinctio earum error ipsam labore, numquam obcaecati, omnis optio perspiciatis praesentium quibusdam repudiandae, sint sunt temporibus veritatis.',
			'creatTime':Random.datetime('yyyy-MM-dd HH:mm:ss'),
			'auth':Random.name(),
			'collection':Random.natural(1,100),
			'comment':Random.natural(1,100),
			'likes':Random.natural(1,100)
		}
	]
})


export default listItem