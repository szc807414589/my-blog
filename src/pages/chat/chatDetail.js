import React, {Component} from "react"
import {Row,Col,Card} from 'antd'

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
                                
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ChatDetail
