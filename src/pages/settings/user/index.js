import React, { Component } from "react";
import { Avatar } from "../../../components/ui";
import { Button, Input, message, Upload, Icon } from "antd";
import "./user.less";
import { connect } from "react-redux";
import { postApi } from "../../../assets/js/axios";
import api from "../../../assets/js/axios/api";

/*
 * 用户头像/用户名/用户描述
 * */
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            userDesc: this.props.userDesc,
            userAvatar: this.props.userAvatar
        };
        this.handleClick = this.handleClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        let inputType = e.target.name;
        this.setState({
            [inputType]: e.target.value
        });
    }

    handleClick() {
        const { user, userDesc } = this.state;
        postApi(api.ModifyUserInfo, { user, userDesc }).then(res => {
            if (res.code === 10000) {
                message.success("修改成功");
            }
        });
    }

    render() {
        let that = this
        const { user, userDesc, userAvatar } = this.state;
        const props = {
            name: "file",
            action: "/v1/upload/upload",
            headers: {
                authorization: "authorization-text"
            },
            showUploadList: false,
            onChange(info) {
                if (info.file.status === "done") {
                    const userAvatar = info.file.response.data
                    if (info.file.response.success) {
                        that.setState({
                            userAvatar
                        })
                        postApi(api.Avatar, {
                            userAvatar
                        });
                    }
                } else if (info.file.status === "error") {
                    console.log(info);
                    message.error(`上传失败`);
                }
            }
        };
        return (
            <div>
                <div className="user_list">
                    <div className="user_listItem">
                        <div className="user_label">头像</div>
                        <Avatar src={userAvatar} size={80} />
                        <Upload {...props}>
                            <Button>
                                <Icon type="upload" /> 更改头像
                            </Button>
                        </Upload>
                    </div>

                    <div className="user_listItem">
                        <div className="user_label">用户名</div>
                        <div className="user_input">
                            <Input
                                name="user"
                                onChange={this.inputChange}
                                type="text"
                                defaultValue={user}
                                placeholder="userName"
                            />
                        </div>
                    </div>

                    <div className="user_listItem">
                        <div className="user_label">个人介绍</div>
                        <div className="user_input">
                            <Input
                                name="userDesc"
                                onChange={this.inputChange}
                                type="text"
                                defaultValue={userDesc}
                                placeholder="userDesc"
                            />
                        </div>
                    </div>
                    <div className="user_listItem">
                        <div className="user_input">
                            <Button onClick={this.handleClick}>点击修改</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.user)(User);
