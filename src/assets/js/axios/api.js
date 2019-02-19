const api = {
	Register:'/user/register',
	Login:'/user/login',
	UserInfo:'/user/userInfo',
	GetUserInfoById:'/user/getUserInfoById',
	ModifyUserInfo:'/user/modifyUserInfo',
	Avatar:'/user/avatar',
	Logout:'/user/logout',
	
	GetArticleList:'/article/getArticleList',
	addArticle:'/article/addArticle',
	GetArticleById:'/article/getArticleById',
	
	
	GetCommentList:'/comment/getCommentList',
	AddComment:'/comment/addComment',
	AddCommentToUser:'/comment/addCommentToUser',
	GetCommentListByArticleId:'/comment/getCommentListByArticleId',
}
export default api