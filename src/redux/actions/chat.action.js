import io from 'socket.io-client'
const socket = io('ws://localhost:12312')

//获取列表
export const MSG_LIST = 'MSG_LIST'
//接受信息
export const MSG_RECV = 'MSG_RECV'
//已读
export const MSG_READ = 'MSG_READ'

export function msgList(msgs, users, user_id) {
    return {type:MSG_LIST,payload:{msgs,users,user_id}}
}

export function msgRecv(msg, user_id) {
    return {userid, type:MSG_RECV, payload:msg}
}
export function msgRead({from,userid,num}){
    return {type: MSG_READ, payload:{from,userid,num}}
}