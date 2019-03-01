import React, { Component } from "react";
import { Avatar, Button, List } from "antd";
import { Tabs, Tag, Icon } from "antd";
import api from "../../assets/js/axios/api";
import { postApi } from "../../assets/js/axios";
import intl from "react-intl-universal";
import history from "../../history";
import { connect } from "react-redux";

import "./myPage.less";

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class HeaderBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { userInfo, isOthers } = this.props;
        return (
            <div className="header_block">
                <Avatar
                    src={userInfo.userAvatar}
                    size={80}
                />
                <div className="header_box header_info">
                    <div className="header_info_userName">{userInfo.user}</div>
                    <div className="header_info_userDesc">
                        {userInfo.userDesc}
                    </div>
                </div>
                <div className="header_box header_click">
                    <div className="header_click_info">
                        <span>{intl.get("FOLLOW")}|</span>
                        <span>{intl.get("FANS")}</span>
                    </div>
                    {isOthers ? (
                        <Button type="dashed">{intl.get("SENDMSG")}</Button>
                    ) : (
                        <Button
                            onClick={() => {
                                history.push("/settings/user");
                            }}
                        >
                            {intl.get("EDIT")}
                        </Button>
                    )}
                </div>
            </div>
        );
    }
}

class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOthers: false,
            fromUserId: "",
            userInfo: {},
            listData: []
        };
        this.getList = this.getList.bind(this);
    }

    componentDidMount() {
        this.getList();
        let fromUserId = this.props.match.params.userId;
        /* 
            两个id存在且不相同为他人主页
            else当前登陆用户
        */
        if (fromUserId && fromUserId !== this.props.userId) {
            postApi(api.GetUserInfoById, { userId: fromUserId }).then(res => {
                this.setState({
                    isOthers: true,
                    userInfo: res.data
                });
            });
        } else {
            const { user, userDesc, userAvatar } = this.props;
            this.setState({
                isOthers: false,
                userInfo: {
                    user,
                    userDesc,
                    userAvatar
                }
            });
        }
        this.setState({
            fromUserId
        });
    }

    getList() {
        postApi(api.GetArticleList, {}).then(res => {
            if (res.msg === "success") {
                const data = res.data;
                this.setState({
                    listData: data
                });
            }
        });
    }

    callback(key) {
        console.log(key);
    }

    render() {
        const { isOthers, listData } = this.state;
        return (
            <div>
                <HeaderBlock
                    userInfo={this.state.userInfo}
                    isOthers={isOthers}
                />
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <Tabs.TabPane tab="文章" key="1">
                        <List
                            bordered={true}
                            dataSource={listData}
                            itemLayout="vertical"
                            style={{ width: "700px" }}
                            renderItem={item => (
                                <List.Item
                                    key={item.articleTitle}
                                    actions={[
                                        <Tag color="cyan">
                                            {item.articleAuth}
                                        </Tag>,
                                        <IconText
                                            type="star-o"
                                            text={item.articleCollectedNumber}
                                        />,
                                        <IconText
                                            type="like-o"
                                            text={item.articleSupportedNumber}
                                        />,
                                        <IconText
                                            type="message"
                                            text={item.articleCommentNumber}
                                        />
                                    ]}
                                    extra={
                                        item.articleThumbnail ? (
                                            <img
                                                width={272}
                                                alt="logo"
                                                src={item.articleThumbnail}
                                            />
                                        ) : (
                                            ""
                                        )
                                    }
                                >
                                    <List.Item.Meta
                                        title={
                                            <a href={item.href}>
                                                {item.articleTitle}
                                            </a>
                                        }
                                        description={item.articleDesc}
                                    />
                                </List.Item>
                            )}
                        />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="动态" key="2">
                        Content of Tab Pane 2
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="评论" key="3">
                        Content of Tab Pane 3
                    </Tabs.TabPane>
                </Tabs>
            </div>
        );
    }
}
export default connect(state => state.user)(MyPage);
