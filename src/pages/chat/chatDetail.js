import React, {Component} from "react"
import {Row,Col,Card,Avatar,Popover,Form,Input,Button} from 'antd'
import {ChatBox} from '../../components/ui'
import io from 'socket.io-client'
import './chatDetail.less'

let socket = io('ws://localhost:12312');

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

@Form.create()
class ChatDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.sendMsg = this.sendMsg.bind(this)
    }
    componentDidMount() {
        socket.on('recvmsg',function(data){
            console.log('recvmsg',data)
            // const userid = getState().user._id
            // dispatch(msgRecv(data, userid))
        })
    }
    sendMsg(e){
        const { form } = this.props;
        e.preventDefault();
        form.validateFieldsAndScroll((error, values) => {
            if(!error){
                socket.emit('sendmsg',{msg:values.msg})
            }
        });
    }
    render() {
        const {
            form: { getFieldDecorator },
        } = this.props;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 7 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
                md: { span: 10 },
            },
        };
        const submitFormLayout = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 10, offset: 7 },
            },
        };
        return (
            <div className={"chatDetail_box"}>
                <Row>
                    <Col>
                        <Card
                            title={"聊天"}
                            actions={[
                                <Form onSubmit={this.sendMsg}>
                                    <Form.Item {...formItemLayout}>
                                        {getFieldDecorator('msg', {
                                            rules: [{ required: true, message: '请输入消息内容' }],
                                        })(<Input placeholder="请输入消息内容"/>)}
                                    </Form.Item>
                                    <Form.Item {...submitFormLayout} style={{ marginTop: 32 }}>
                                        <Button type="primary" htmlType="submit">
                                            发送
                                        </Button>
                                    </Form.Item>
                                </Form>
                            ]}
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
