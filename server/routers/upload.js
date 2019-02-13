import Upload from '../model/upload'
import { errMsg } from "../code"
import utility from 'utility'
import BaseComponent from '../utils'
import multer from 'multer'//接收图片
import fs from 'fs'//操作文件

// var upload = multer({
//     dest: './uploads'
// });//定义图片上传的临时目录


class Uploadimg extends BaseComponent{
    upload(req,res){
        const { userKey } = req.cookies
		if (!userKey) {
			return res.json(errMsg.NOT_LOGIN)
        }
        fs.rename(req.file.path, "upload/" + req.file.originalname, function(err) {
            if (err) {
                throw err;
            }
            console.log('上传成功!');
        })
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*"
        });
        res.end(JSON.stringify(req.file)+JSON.stringify(req.body));
    }
}

module.exports = new Uploadimg()