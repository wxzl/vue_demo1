import axios from 'axios'
import ss from '@/store'
import { getToken } from './token'
// 创建 axios 实例
const service = axios.create({
  baseURL: '/api/private/v1', // api的base_url
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  if (ss.state.token) {
    config.headers['X-Token'] = getToken()
  }
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})
// 响应拦截器
// service.interceptors.response.use(config => {

// })
export default service
