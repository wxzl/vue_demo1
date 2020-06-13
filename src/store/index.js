import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils/token'
import { login } from '@/api/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken() // 保存token
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token // token 状态改编
    }
  },
  actions: {
    // 异步 状态改变
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      // 发送登录请求
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(res => {
          console.log(res)
          const { data } = res
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve(res.meta.msg)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  modules: {}
})
