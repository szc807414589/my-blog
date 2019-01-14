import React, { Component } from "react";
import { Input, Button, Popover } from "antd";
const { TextArea } = Input;
const emoji = "😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 "
    .split(" ")
    .filter(v => v)
    .map(v => ({ text: v }));

class MyComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            commentValue: "",
            defaultAvatar:
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(e) {
        let k = e.target.name;
        this.setState({
            [k]: e.target.value
        });
    }

    clickEmoji(e) {
        e.preventDefault();
    }

    handleClick() {
        /* 
            点击往外传递commentValue,recUserId,recCommentId
        */
        const { recUserId, recCommentId } = this.props;
        this.props.getCommentContent(
            this.state.commentValue,
            recUserId,
            recCommentId
        );
        this.setState({ commentValue: "" });
    }

    render() {
        const { show, commentValue } = this.state;

        return (
            <div className={"myCommentBox"}>
                <TextArea
                    placeholder="输入你的评论"
                    onFocus={() => {
                        this.setState({ show: true });
                    }}
                    onBlur={() => {
                        this.setState({ show: false });
                    }}
                    onChange={this.handleInput}
                    name={"commentValue"}
                    autosize={true}
                    value={commentValue}
                />
                {
                    <div
                        className={
                            show || commentValue
                                ? "buttonBox open"
                                : "buttonBox close"
                        }
                    >
                        <Popover
                            placement="bottom"
                            title={"表情"}
                            content={
                                <div className={"emojiPanel"}>
                                    {emoji.map((v, i) => (
                                        <div
                                            className={"emojiGrid"}
                                            key={i}
                                            onClick={() => {
                                                this.setState({
                                                    commentValue:
                                                        this.state
                                                            .commentValue +
                                                        v.text
                                                });
                                            }}
                                        >
                                            {v.text}
                                        </div>
                                    ))}
                                </div>
                            }
                            trigger="click"
                        >
                            <div
                                className={"emoji"}
                                onMouseDown={this.clickEmoji}
                            >
                                😀
                            </div>
                        </Popover>
                        <Button
                            className={"fr"}
                            onMouseDown={this.handleClick}
                            disabled={commentValue ? false : true}
                        >
                            发送
                        </Button>
                    </div>
                }
            </div>
        );
    }
}
export default MyComment;
