import axios from 'axios'

const service1 = axios.create({
  // baseURL: 'https://music.163.com/store',
  timeout: 30000,
})

service1.interceptors.request.use(config => {
  // console.log('请求拦截')
  return config
})

service1.interceptors.response.use(response => {
  // console.log('拦截响应')
  if (response.status >= 200 && response.status < 300) {
    // console.log(response)
    const { code, data } = response
    if (code === 200) {
      return data
    } else {
      return response.data
    }

    // // 假设 token 异常
    // if (code === 5001 || code === 5002 || code === 5003) {
    //   // TODO: 清理前端保存在 vuex 中的
    //   // 用户登录信息，清理本地组件的用户
    //   // 登录信息，跳转到登录页面让用户重新登录
    // }
  }
})

export default service1
