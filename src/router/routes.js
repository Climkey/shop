/**
 *  静态路由配置
 */
// @是src目录的绝对路径别名

import Home from '@/views/home'
import Category from '@/views/category'
import Cart from '@/views/cart'
import Detail from '@/views/detail'
import Mine from '@/views/mine'
import TabBar from '@/components/tab-bar'
import SearchBar from '@/components/search-bar'
import NavBar from '@/components/nav-bar'
import Register from '@/views/register'
import Login from '@/views/login'
import Address from '@/views/address'
import AddAddress from '@/views/address/addAddress'
import EditAddress from '@/views/address/editAddress'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    components: {
      header: SearchBar,
      default: Home,
      footer: TabBar,
    },
    meta: {
      icon: '&#xe751;',
      title: '首页',
      inTabBar: true,
    },
  },
  {
    path: '/category',
    name: 'category',
    components: {
      header: NavBar,
      default: Category,
      footer: TabBar,
    },
    meta: {
      icon: '&#xe78e;',
      title: '分类',
      inTabBar: true,
    },
  },
  {
    path: '/cart',
    name: 'name',
    components: {
      header: NavBar,
      default: Cart,
      footer: TabBar,
    },
    meta: {
      icon: '&#xe73d;',
      title: '购物车',
      inTabBar: true,
    },
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      header: NavBar,
      default: Mine,
      footer: TabBar,
    },
    meta: {
      icon: '&#xe788;',
      title: '我的',
      inTabBar: true,
      noBack: true,
    },
  },
  {
    path: '/detail',
    name: 'detail',
    components: {
      header: NavBar,
      default: Detail,
      // footer: TabBar,
    },
    meta: {
      // icon: ,
      title: '商品详情',
      // inTabBar: ,
    },

  },
  {
    path: '/login',
    name: 'login',
    components: {
      header: NavBar,
      default: Login,
      footer: TabBar,
    },
    meta: {
      title: '用户登录',
      noBack: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    components: {
      header: NavBar,
      default: Register,
      footer: TabBar,
    },
    meta: {
      title: '用户注册',
      noBack: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    components: {
      header: NavBar,
      default: Login,
      footer: TabBar,
    },
    meta: {
      title: '用户登录',
      noBack: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    components: {
      header: NavBar,
      default: Register,
      footer: TabBar,
    },
    meta: {
      title: '用户注册',
      noBack: true,
    },
  },
  {
    path: '/address',
    name: 'address',
    components: {
      header: NavBar,
      default: Address,
      footer: TabBar,
    },
    meta: {

      title: '我的收货地址',
    },
  },
  {
    path: '/addAddress',
    name: 'addAddress',
    components: {
      header: NavBar,
      default: AddAddress,
    },
    meta: {
      title: '新增地址',
    },
  },
  {
    path: '/editAddress',
    name: 'editAddress',
    components: {
      header: NavBar,
      default: EditAddress,
      footer: TabBar,
    },
    meta: {
      title: '编辑地址',
    },

  },
]

export default routes
