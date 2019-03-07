import React, {Component} from "react"
import {Row,Col,Card,Avatar,Popover} from 'antd'
import {ChatBox} from '../../components/ui'

const chatList = [
    {
        id:111,
        from:{
            user:'szc',
            id:123,
            userAvatar:'sss'
        },
        to:{
            user:'test',
            id:111,
            userAvatar:'123'
        },
        message:'hello'
    }
]
class ChatDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Card
                            title={"聊天"}
                        >
                            <div>
                                <Avatar/>
                                <ChatBox chatArrow={"left"}
                                         chatContent={"123"}/>
                            </div>
                            <div className={"fr"}>
                                <ChatBox chatArrow={"right"}
                                         chatContent={"123"}/>
                                <Avatar/>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ChatDetail
