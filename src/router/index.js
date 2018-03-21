import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/home"			//主页
import Register from "../components/register"	//注册
import Cart from "../components/cart"			//购物车
import List from "../components/list"			//列表
import Login from "../components/login"			//登录
import Detail from "../components/detail"		//详情
import Mine from "../components/mine"		    //我的
import Pay from "../components/pay"		        //付款


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/detail/:id',
      component:Detail
    },
    {
      path: '/*',
      redirect:"/home"
    }
  ]
})
