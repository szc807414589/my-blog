import React, { Component } from "react";
import Loadable from "react-loadable";
import loading from "../components/loading";
// import { renderRoutes } from "react-router-config";
import HeaderBar from "../components/header";
import Content from "../components/content";

const Home = Loadable({
    loader: () => import("../pages/home/index"),
    loading: loading
});
const About = Loadable({
    loader: () => import("../pages/about/index"),
    loading: loading
});
const ChatList = Loadable({
    loader: () => import("../pages/chat"),
    loading: loading
});
const ChatDetail = Loadable({
    loader: () => import("../pages/chat/chatDetail"),
    loading: loading
});
const Login = Loadable({
    loader: () => import("../pages/login"),
    loading: loading
});
const Register = Loadable({
    loader: () => import("../pages/register"),
    loading: loading
});
const Detail = Loadable({
    loader: () => import("../pages/article/detail"),
    loading: loading
});
const EditArticle = Loadable({
    loader: () => import("../pages/article/editArticle"),
    loading: loading
});
const Settings = Loadable({
    loader: () => import("../pages/settings"),
    loading: loading
});
const User = Loadable({
    loader: () => import("../pages/settings/user"),
    loading: loading
});
const Message = Loadable({
    loader: () => import("../pages/settings/message"),
    loading: loading
});
const MyPage = Loadable({
    loader: () => import("../pages/myPage"),
    loading: loading
});

class RouterModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <HeaderBar />
                <Content>{this.props.children}</Content>
            </div>
        )
    }
}


const routes = [
    {
        path: "/login",
        component: Login,
        requiresAuth: false
    },
    {
        path: "/register",
        component: Register,
        requiresAuth: false
    },
    {
        component: RouterModal,
        name: "needLogin",
        routes: [
            {
                path: "/",
                component: Home,
                exact: true,
                requiresAuth: false
            },
            {
                path: "/about",
                component: About,
                requiresAuth: false
            },
            {
                path: "/chat",
                requiresAuth: false,
                name:'chat',
                routes:[
                    {
                        path: "/chat/chatlist",
                        component: ChatList,
                        requiresAuth: false,
                    },
                    {
                        path: "/chat/chatDetail/:fromId?",
                        component: ChatDetail,
                        requiresAuth: false,
                    },
                ]
            },
            {
                path: "/article/detail",
                component: Detail,
                requiresAuth: true
            },
            {
                path: "/article/edit",
                component: EditArticle,
                requiresAuth: true
            },
            {
                path: "/myPage/:userId?",
                component: MyPage,
                requiresAuth: true
            },
            {
                component: Settings,
                name: "settings",
                routes: [
                    {
                        path: "/settings/user",
                        component: User,
                        requiresAuth: false
                    },
                    {
                        path: "/settings/message",
                        component: Message,
                        requiresAuth: false
                    }
                ]
            }
        ]
    }
];
export default routes;
