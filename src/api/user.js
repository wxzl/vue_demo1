import request from '@/utils/request'
// 登录请求
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
