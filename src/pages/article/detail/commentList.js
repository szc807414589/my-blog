import React, { Component } from "react";
import { Avatar,  Icon } from "antd";
import moment from "moment";
import MyComment from "./myComment";

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            commentContent: "",
            defaultAvatar:
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        };
        this.getCommentContent = this.getCommentContent.bind(this);
    }

    getCommentContent(commentValue,recUserId, recCommentId) {
        /* 
            给用户评论,需要传父评论的userId和commentId
        */
        this.props.getCommentByList(commentValue,recUserId,recCommentId)
    }

    render() {
        const { defaultAvatar } = this.state;
        const v = this.props.commentData;
        return (
            <div className={"commentListContainer"}>
                <div className={"commentItem"} key={v.commentId}>
                    <Avatar src={v.userInfo.userAvatar || defaultAvatar} />
                    <div className={"commentInfo"}>
                        <div className={"commentUserInfo"}>
                            <span className={"commentUserName"}>
                                {v.userInfo.user}{" "}
                            </span>
                            <span className={"commentUserDesc"}>
                                this is desc this is desc this is desc this is
                                desc this is desc
                            </span>
                        </div>
                        <div className={"commentContent"}>
                            {v.commentContent}
                        </div>
                        <div className={"commentFooter"}>
                            <span>
                                {moment(v.commentCreateTime).format(
                                    "YYYY-MM-DD HH:mm:ss"
                                )}
                            </span>
                            <div className={"fr"}>
                                {v.isLiked ? (
                                    <Icon
                                        type="like"
                                        theme="twoTone"
                                        twoToneColor="#eb2f96"
                                    />
                                ) : (
                                    <Icon type="like" />
                                )}
                                {v.likesCount}
                                <Icon
                                    type="message"
                                    onClick={() => {
                                        this.setState({
                                            flag: !this.state.flag
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        {this.state.flag ? (
                            <MyComment
                                getCommentContent={this.getCommentContent}
                                recUserId={v.userInfo.userId}
                                recCommentId={v.commentId}
                            />
                        ) : null}
                        <div className={"recCommentBox"}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentList;
