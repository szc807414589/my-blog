import Upload from "../model/upload";
import { errMsg } from "../code";
import utility from "utility";
import BaseComponent from "../utils";
import multer from "multer"; //接收图片
import fs from "fs"; //操作文件

// var upload = multer({
//     dest: './uploads'
// });//定义图片上传的临时目录

class Uploadimg extends BaseComponent {
    upload(req, res) {
        console.log(req.file);
        const { userKey } = req.cookies;
        if (!userKey) {
            return res.json(errMsg.NOT_LOGIN);
        }
        fs.rename(
            req.file.path,
            "../public/uploads/" +req.file.filename + req.file.originalname,
            function(err) {
                if (err) {
                    console.log(err);
                    return err;
                }
                console.log("上传成功!");
            }
        );
    
        const fileModel = new Upload({ url:'/uploads/'+req.file.filename + req.file.originalname});
        fileModel.save((e, d) => {
            if (e) {
                return res.json(errMsg.BACKEND_ERR);
            }
            return res.json({ ...errMsg.SUCCESS, data: d.url });
        });
    }
}
module.exports = new Uploadimg();
