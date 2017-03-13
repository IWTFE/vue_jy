import * as types from '../mutation-types'
const state = {
  sidebar: {
    opened: false, //打开
    hidden: false  //隐藏
  },
  menuitems:sessionStorage.getItem('menus')
}

const mutations = {
  [types.TOGGLE_SIDEBAR] (state, opened) {
  if (state.sidebar.opened === true) {
    state.sidebar.opened = opened
  } else {
    state.sidebar.opened = true
  }
}
},
const getters = {
  // console.log(sessionStorage.getItem('menus'))
const menuitems = state => state.menuitems

}


export default {
  state,
  mutations,
  getters
}
