import User from "../model/user";
import {errMsg} from "../code";
import utility from "utility";
import BaseComponent from "../utils";
import {createCanvas, loadImage} from 'canvas'

const _filter = {pwd: 0, __v: 0, _id: 0};



//md5加密

class user extends BaseComponent {
    constructor() {
        super();
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    list(req, res) {
        User.find({}, (err, doc) => {
            return res.json(doc);
        });
    }

    userInfo(req, res) {
        const {userKey} = req.cookies;
        if (!userKey) {
            return res.json(errMsg.NOT_LOGIN);
        }
        User.findOne({_id: userKey}, _filter, (err, doc) => {
            if (err) {
                return res.json(errMsg.BACKEND_ERR);
            }
            if (doc) {
                return res.json({...errMsg.SUCCESS, data: doc});
            }
        });
    }

    getUserInfoById(req, res) {
        const {userKey} = req.cookies;
        const {userId} = req.body;
        if (!userKey) {
            return res.json(errMsg.NOT_LOGIN);
        }
        User.findOne({userId: userId}, _filter, (err, doc) => {
            if (err) {
                return res.json(err);
                // return res.json(errMsg.BACKEND_ERR);
            }
            return res.json({...errMsg.SUCCESS, data: doc});
        });
    }

    modifyUserInfo(req, res) {
        const {userKey} = req.cookies;
        const {user, userDesc} = req.body;
        if (!user) {
            return res.json(errMsg.USER_REQUIRE);
        }
        User.findByIdAndUpdate(
            {_id: userKey},
            {user, userDesc},
            {new: true},
            (err, doc) => {
                if (err) {
                    return res.json(errMsg.USER_MODIFY_ERR);
                }
                return res.json({...errMsg.SUCCESS, data: doc});
            }
        );
    }

    async avatar(req, res) {
        const {userKey} = req.cookies;
        const {userAvatar} = req.body;
        User.findByIdAndUpdate(
            {_id: userKey},
            {userAvatar},
            {new: true},
            (err, doc) => {
                if (err) {
                    return res.json(errMsg.USER_MODIFY_ERR);
                }
                return res.json({...errMsg.SUCCESS, data: doc});
            }
        );
    }

    async register(req, res) {
        let that = this;
        let userId;
        try {
            userId = await that.getId("userId");
        } catch (err) {
            console.log("获取用户id失败");
            return res.json(errMsg.ERROR_DATA);
        }
        const {user, pwd} = req.body;
        //头像
        const canvas = createCanvas(80, 80)
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = this.Color()[0]
        ctx.fillRect(0,0,80,80)
        ctx.font = '40px Arial'
        ctx.fillStyle = '#fff'
        ctx.fillText(user.substr(0, 1), 30, 50)
        let userAvatar = canvas.toDataURL()
        //生成数据写入数据库
        User.findOne({user}, {pwd: 0, __v: 0}, async (err, doc) => {
            if (doc) {
                return res.json(errMsg.SUCCESS);
            }
            const userModel = new User({user,userAvatar, pwd: that.md5Pwd(pwd), userId});
            userModel.save((e, d) => {
                if (e) {
                    return res.json(errMsg.BACKEND_ERR);
                }
                const {_id} = d;
                res.cookie("userKey", _id);
                return res.json({...errMsg.SUCCESS, data: d});
            });
        });
    }

    login(req, res) {
        const {user, pwd} = req.body;
        User.findOne(
            {user, pwd: this.md5Pwd(pwd)},
            {pwd: 0, __v: 0},
            (err, doc) => {
                if (!doc) {
                    return res.json(errMsg.USER_LOGIN_ERR);
                }
                res.cookie("userKey", doc._id);
                return res.json({...errMsg.SUCCESS, data: doc});
            }
        );
    }

    logout(req, res) {
        const {userKey} = req.cookies;
        if (!userKey) {
            return res.json(errMsg.NOT_LOGIN);
        }
        res.clearCookie('userKey')
        return res.json(errMsg.SUCCESS)
    }

    md5Pwd(pwd) {
        const salt = "szcKJH*(&%NJ@#!FJHGKL";
        return utility.md5(utility.md5(pwd + salt));
    }
}

module.exports = new user();
