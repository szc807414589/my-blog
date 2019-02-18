import mongoose from 'mongoose'

const Schema = mongoose.Schema

const chat = new Schema({
    'chatid':{'type':String, 'require':true},
    'from':{'type':String,'require':true},
    'to':{'type':String,'require':true},
    'read':{'type':Boolean,'default':false},
    'content':{'type':String,'require':true,'default':''},
    'create_time':{'type':Number,'default':Date.now}
})

const Chat = mongoose.model('chat', chat)

export default Chat