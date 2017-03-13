import * as types from '../mutation-types'
const state = {
  sidebar: {
    opened: false, //打开
    hidden: false  //隐藏
  }
}

const mutations = {
  [types.TOGGLE_SIDEBAR] (state, opened) {
  if (state.sidebar.opened === true) {
    state.sidebar.opened = opened
  } else {
    state.sidebar.opened = true
  }
}
}

export default {
  state,
  mutations
}
