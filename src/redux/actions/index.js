let isLogin = false
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

export const user_login = uname => ({type:LOG_IN,uname})
export const user_logout = uname => ({type:LOG_OUT,uname})


