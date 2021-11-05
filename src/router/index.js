import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'hash', // 路由模式
})

// 需要登录后才能访问到的路由路径
const permissionPaths = ['/mine', '/address', '/addAddress', '/editAddress']

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (permissionPaths.includes(to.path)) {
    // 需要判断用户是否登录,store的状态中有用户的 token 信息，则说明
    // 已登录， 没有 token 信息，则跳转到登录页面
    if (store.state.user.username) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

// 解决不能在右上角重复点击相同链接
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
