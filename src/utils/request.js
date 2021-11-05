// 二次封装axios
import axios from 'axios'
import { Toast } from 'vant'

// 可以配置响应时间和baseurl
const service = axios.create({
  timeout: 10000,
})

// 请求拦截
service.interceptors.request.use(config => {
  // console.log('请求拦截')
  // 提示
  Toast.loading({
    message: '大乌龟正在加载...',
    duration: 0,
  })
  config.headers.token = '45645645'
  return config
})

//  响应拦截
service.interceptors.response.use(response => {
  // console.log('interceptors response success')
  // console.log('响应拦截')
  // 关闭提示
  Toast.clear()
  // 如果能正常响应，则返回使用的数据
  if (response.status >= 200 && response.status < 300) {
    const { code, data } = response.data
    if (code === 200) {
      return data
    } else {
      console.error('interceptors response error')
      return response.data
    }
  }

  // // 请求出现异常
  const err = new Error('请求出现异常')
  err.erorr = response
  return Promise.reject(err)
})

export default service
