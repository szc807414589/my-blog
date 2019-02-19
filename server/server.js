import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import Routers from './routers'
import mongoose from './mongodb/mongoose'

const app = express()

const server = require("http").Server(app);
const io = require("socket.io")(server);
io.on("connection", function(socket) {
    socket.on("sendmsg", function(data) {
        const { from, to, msg } = data;
        const chatid = [from, to].sort().join("_");
        Chat.create({ chatid, from, to, content: msg }, function(err, doc) {
            io.emit("recvmsg", Object.assign({}, doc._doc));
        });
    });
});

const db = mongoose()
//cookie
app.use(cookieParser())
//解析post参数
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
Routers(app)
app.listen(9093,()=>{
	console.log('node start')
})