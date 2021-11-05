// import { login } from '@/api/user'

const userModule = {
  state: {
    username: sessionStorage.getItem('username') || '',
    password: sessionStorage.getItem('password') || '',
  },
  mutations: { // 同步状态更新
    loginSuccess(state, payload) {
      state.username = payload.username
      state.password = payload.password
      sessionStorage.setItem('username', payload.username)
      sessionStorage.setItem('password', payload.password)
    },
    removeLogin(state) {
      state.username = ''
      state.password = ''
      sessionStorage.removeItem('username')
      sessionStorage.removeItem('password')
    },
  },
  actions: {
    loginAsync(store, payload) {
      const { username, password } = payload
      store.commit('loginSuccess', {
        username,
        password,
      })
    },
    removeAsync(store) {
      store.commit('removeLogin')
    },
  },
}

export default userModule
