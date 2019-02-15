const api = {
	Register:'/user/register',
	Login:'/user/login',
	UserInfo:'/user/userInfo',
	ModifyUserInfo:'/user/modifyUserInfo',
	Avatar:'/user/avatar',
	
	GetArticleList:'/article/getArticleList',
	addArticle:'/article/addArticle',
	GetArticleById:'/article/getArticleById',
	
	
	GetCommentList:'/comment/getCommentList',
	AddComment:'/comment/addComment',
	AddCommentToUser:'/comment/addCommentToUser',
	GetCommentListByArticleId:'/comment/getCommentListByArticleId',
}
export default api