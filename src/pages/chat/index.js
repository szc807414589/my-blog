import React, { Component } from "react";
import { List, Avatar, Card, Button, Skeleton } from "antd";
import history from '../../history'

const data = [
    {
        from: "user1"
    },
    {
        from: "user2"
    },
    {
        from: "user3"
    },
    {
        from: "user4"
    }
];
export default class Classify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initLoading: true,
            loading: false,
            data: [],
            list: []
        };
    }

    render() {
        return (
            <div>
                <Card>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item
                                onClick={()=>{
                                    history.push('/chat/chatDetail/'+item.from)
                                }}
                            >
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    }
                                    title={<a>{item.from}</a>}
                                    description="消息内容"
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        );
    }
}
