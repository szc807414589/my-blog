import React, {Component} from "react"
import './chat.less'

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }


    render() {
        const {chatArrow,chatContent} = this.props
        console.log(this.props)
        console.log(chatArrow)
        return (
            <div className={"chat_box"}>
                <div className={"chat_content"}>
                    <div className={chatArrow==='left'?"chat_arrow chat_arrow_left":"chat_arrow chat_arrow_right"}/>
                    <div className={"chat_content"}>
                        {chatContent}
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat
