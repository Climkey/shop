const addressModule = {
  state: {
    list: JSON.parse(localStorage.getItem('list')) || [],
    now: JSON.parse(localStorage.getItem('now')) || {},
  },
  getters: {
    doneList: state => {
      const copy = [...state.list]
      for (let i = 0; i < copy.length; i++) {
        copy[i].id = i
        copy[i].address = copy[i].province + ' ' + copy[i].city + ' ' + copy[i].county + ' ' + copy[i].addressDetail
      }
      return copy
    },
  },
  mutations: {

    // 新增地址
    addAddress(state, payload) {
      state.list.push(payload)
      localStorage.setItem('list', JSON.stringify(state.list))
    },

    // 编辑地址
    editAddress(state, payload) {
      state.now = payload
      localStorage.setItem('now', JSON.stringify(payload))
    },

    // 保存修改
    saveEdit(state, payload) {
      state.list = state.list.map(item => {
        let copy = { ...item }
        if (copy.id === payload.id) {
          copy = payload
        }
        return copy
      })
      localStorage.setItem('list', JSON.stringify(state.list))
    },

    // 删除地址
    removeAddress(state, pload) {
      state.list = state.list.filter(item =>
        item.id !== pload.id)
      localStorage.setItem('list', JSON.stringify(state.list))
    },

    // 更改默认地址
    changeDefault(state, pload) {
      state.list = state.list.map(item => {
        const copy = { ...item }
        if (copy.id !== pload.id) {
          copy.isDefault = false
        }
        return copy
      })
      localStorage.setItem('list', JSON.stringify(state.list))
    },
  },
  actions: {},
}

export default addressModule
