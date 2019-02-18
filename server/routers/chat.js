import Chat from "../model/chat";
import User from "../model/user";
import { errMsg } from "../code";
import BaseComponent from "../utils";

class article extends BaseComponent {
    constructor(props) {
        super(props);
    }
    async getmsglist(req, res) {
        const user = req.cookies.userKey;
        User.find({}, (e, userdoc) => {
            let users = {};
            userdoc.forEach(v => {
                users[v._id] = { name: v.user, avatar: v.avatar };
            });
            Chat.find({ $or: [{ from: user }, { to: user }] }, (err, doc) => {
                if (!err) {
                    return res.json({
                        ...errMsg.SUCCESS,
                        msgs: doc,
                        users: users
                    });
                }
            });
        });
    }
    async readmsg(req, res) {
        const userid = req.cookies.userKey;
        const { from } = req.body;
        Chat.update(
            { from, to: userid },
            { $set: { read: true } },
            { multi: true },
            function(err, doc) {
                if (!err) {
                    return res.json({ ...errMsg.SUCCESS, num: doc.nModified });
                }
                return res.json(errMsg.BACKEND_ERR);
            }
        );
    }
    async updatechat(req, res) {
        const userid = req.cookies.userKey;
        if (!userid) {
            return json.dumps(errMsg.NOT_LOGIN);
        }
        const body = req.body;
        User.findByIdAndUpdate(userid, body, function(err, doc) {
            const data = Object.assign(
                {},
                {
                    user: doc.user,
                    type: doc.type
                },
                body
            );
            return res.json({ code: 0, data });
        });
    }
}

module.exports = new article();
