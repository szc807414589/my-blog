import { postApi } from "../../../../assets/js/axios"
import api from '../../../../assets/js/axios/api'
/*
* 添加文章评论
* 添加用户评论
* 通过文章id获取评论列表
* */
export const COMMENT_LIST = 'COMMENT_LIST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_COMMENT_TO_USER = 'ADD_COMMENT_TO_USER'

export const getCommentList = commentList => ({
	type:COMMENT_LIST,
	payload:commentList
})
export const addComment = list => ({
	type:ADD_COMMENT,
	list
})


export const add_comment = (commentContent, articleId) => {
	return dispatch => {
		return postApi(api.AddComment, { commentContent, articleId })
			.then(res => {
				dispatch(res.data)
				return Promise.resolve(res)
			})
	}
}

export const add_comment_to_user = (articleId, commentContent, recUserId, recCommentId) => {
	return dispatch => {
		return postApi(api.AddCommentToUser, { articleId, commentContent, recUserId, recCommentId })
			.then(res => {
				dispatch(res.data)
				return Promise.resolve(res)
			})
	}
}

export const get_CommentList = (articleId) => {
	return dispatch => {
		return postApi(api.GetCommentListByArticleId, { articleId })
			.then(res => {
				dispatch(getCommentList(res.data))
				return Promise.resolve(res)
			})
	}
}