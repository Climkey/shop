const shopModule = {
  state: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  },
  getters: {
    // 累加总数
    totalAmounts(state) {
      return state.cart.reduce((sun, prod) => sun + prod.amount, 0)
    },
    // 是否全选
    allChecked(state) {
      return state.cart.every(prod => prod.checked)
    },
    // 合计金额
    totalMoney(state) {
      return state.cart.reduce((sum, prod) => {
        if (prod.checked) {
          sum += prod.minPrice * prod.amount
        }
        return sum
      }, 0) * 100
    },
  },
  mutations: { // 同步状态更新
    // 加入购物车
    addToCart(state, payload) {
      const has = state.cart.some(prod => prod.id === payload.id)
      if (has) {
        state.cart = state.cart.map(prod => {
          const copy = { ...prod }
          if (copy.id === payload.id) {
            copy.amount += payload.amount
          }
          return copy
        })
      } else {
        const copy = { ...payload, checked: true }

        state.cart.push(copy)
      }
    },
    // 从购物车删除
    removeFromCart(state, payload) {
      state.cart = state.cart.filter(prod => prod.id !== payload.id)
    },
    // 更新数据
    modifyAmount(state, payload) {
      state.cart = state.cart.map(prod => {
        const copy = { ...prod }
        if (copy.id === payload.id) {
          copy.amount = payload.amount
          copy.checked = true
        }
        return copy
      })
    },
    // 改变商品选中状态
    changeChecked(state, payload) {
      state.cart = state.cart.map(prod => {
        const copy = { ...prod }
        if (copy.id === payload.id) {
          copy.checked = !copy.checked
        }
        return copy
      })
    },
    // 全选按钮
    checkAll(state, payload) {
      state.cart = state.cart.map(prod => {
        const copy = { ...prod }
        copy.checked = payload.checked
        return copy
      })
    },
  },
  actions: {

  },
}

export default shopModule
