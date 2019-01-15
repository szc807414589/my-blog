import React, { Component } from "react";
import { Avatar, Button, Message } from "antd";

import MyComment from "./myComment";
import CommentList from "./commentList";
import "highlight.js/styles/atom-one-dark.css";
import api from "../../../assets/js/axios/api";
import { postApi } from "../../../assets/js/axios";
import moment from "moment";
import "highlight.js/styles/monokai-sublime.css";
import "react-quill/dist/quill.snow.css";
import "./detail.less";

import { connect } from "react-redux";
import { get_CommentList, add_comment } from "./redux/comment.action";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.followAuthClick();
    }

    render() {
        const {
            userAvatar,
            articleAuth,
            articleCreateTime,
            articleCommentNumber,
            articleSupportedNumber
        } = this.props.authInfo;
        return (
            <div className="authInfo">
                <Avatar src={userAvatar} />
                <div className="info">
                    <span className="authName">{articleAuth}</span>
                    <Button className="followAuto" onClick={this.handleClick}>
                        +关注
                    </Button>
                    <div className="authMeta">
                        <span className="createTime">
                            {moment(articleCreateTime).format(
                                "YYYY-MM-DD HH:mm:ss"
                            )}
                        </span>
                        <span className="comment">
                            评论:{articleCommentNumber}
                        </span>
                        <span className="supported">
                            点赞:{articleSupportedNumber}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

class Desc extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const articleDesc = this.props.articleDesc;
        return (
            <div className="articleDesc">
                <p>{articleDesc}</p>
            </div>
        );
    }
}

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleId: 0,
            articleInfo: {
                articleAuth: "",
                articleCollectedNumber: 0,
                articleComment: [],
                articleCommentNumber: 0,
                articleContent: "",
                articleCreateTime: "",
                articleDesc: "",
                articleSupportedNumber: 0,
                articleThumbnail: "",
                articleTitle: "",
                articleUpdateTime: "",
                createTime: "",
                user: "",
                userAvatar: "",
                userDesc: ""
            },
            commentArr: [],
            recUserId: 0,
            recCommentId: 0
        };
        this.getArticle = this.getArticle.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.getCommentListByArticleId = this.getCommentListByArticleId.bind(
            this
        );
        this.submitCommentToUser = this.submitCommentToUser.bind(this);
    }

    componentWillMount() {
        let articleId = Number(this.props.location.search.split("=")[1]);
        this.setState({
            articleId
        });
    }

    componentDidMount() {
        this.getArticle();
        this.getCommentListByArticleId();
    }

    getArticle() {
        let that = this;
        postApi(api.GetArticleById, { articleId: this.state.articleId }).then(
            res => {
                if (res.success) {
                    const articleInfo = res.data;
                    that.setState({
                        articleInfo
                    });
                }
            }
        );
    }

    getCommentListByArticleId() {
        this.props.get_CommentList(this.state.articleId).then(res => {
            if (res.success) {
                this.setState({
                    commentArr: res.data
                });
            }
        });
    }
    /* 直接评论文章 */
    submitComment(commentValue, recUserId, recCommentId) {
        let that = this;
        that.props
            .add_comment(commentValue, that.state.articleId)
            .then(res => {
                if (res.success) {
                    Message.success("添加成功", 1).then(() => {
                        that.getCommentListByArticleId();
                    });
                }
            });
    }

    /*给用户评论*/
    submitCommentToUser(commentContent,recUserId, recCommentId) {
        let that = this;
        const articleId = this.state.articleId
        postApi(api.AddCommentToUser,
            {articleId,commentContent,recUserId, recCommentId}
            )
            .then(res=>{
                if (res.success) {
                    Message.success("添加成功", 1).then(() => {
                        that.getCommentListByArticleId();
                    });
                }
            })
    }

    followAuthClick() {
        console.log("followAutoClick");
    }

    render() {
        const {
            articleAuth,
            articleCreateTime,
            articleTitle,
            articleDesc,
            articleContent,
            userAvatar,
            articleCommentNumber,
            articleSupportedNumber
        } = this.state.articleInfo;
        let authInfo = {
            userAvatar,
            articleAuth,
            articleCreateTime,
            articleCommentNumber,
            articleSupportedNumber
        };

        const commentArr = this.state.commentArr;
        return (
            <div className="detailContainer">
                <div className={"articleContainer"}>
                    <h3>{articleTitle}</h3>
                    <Auth
                        authInfo={authInfo}
                        followAuthClick={this.followAuthClick}
                    />
                    <Desc articleDesc={articleDesc} />
                    <div className="articleContent">
                        <div
                            dangerouslySetInnerHTML={{ __html: articleContent }}
                        />
                    </div>
                </div>
                <div className={"commentContainer"}>
                    <div className={"commentTitle"}> 评论</div>
                    <div className={"comment_my"}>
                        <div className={"avatarBox"}>
                            <Avatar />
                        </div>
                        <div className={"commentBox"}>
                            <MyComment getCommentContent={this.submitComment} />
                        </div>
                    </div>
                    <div className={"commentList"}>
                        {commentArr.map(v => {
                            // if (v.recComment.length) {
                            return (
                                <CommentList
                                    getCommentByList={this.submitCommentToUser}
                                    commentData={v}
                                    key={v.commentId}
                                >
                                    {v.recComment.length
                                        ? v.recComment.map(c => (
                                              <CommentList
                                                  getCommentByList={
                                                      this.submitCommentToUser
                                                  }
                                                  commentData={c}
                                                  key={c.commentId}
                                              />
                                          ))
                                        : null}
                                </CommentList>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => state.comment,
    { get_CommentList, add_comment }
)(Detail);
