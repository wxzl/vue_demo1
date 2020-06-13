import axios from 'axios'
import ss from '@/store'
import { getToken } from './token'
import { Message } from 'element-ui'
// 创建 axios 实例
const service = axios.create({
  baseURL: '/api/private/v1', // api的base_url
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (ss.state.token) {
      config.headers['X-Token'] = getToken() // 添加header
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    console.log(res)
    if (res.meta.status !== 200) {
      Message({
        message: res.meta.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.meta.msg || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
  }
)
export default service
