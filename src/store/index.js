import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as types from './mutation-types'

Vue.use(Vuex)

const state={
  count:44,
  sidebar: {
    opened: false, //打开
    hidden: false  //隐藏
  },
  menuitems:[],
  list:[]
}
const mutations={
  add(state){
    state.count ++
  },
  plus(state){
    state.count --
  },
  [types.TOGGLE_SIDEBAR] (state, opened) {
  if (state.sidebar.opened === true) {
    state.sidebar.opened = opened
    // alert('opened')
  } else {
    state.sidebar.opened = true
    // alert('true')
  }
},
  [types.GEN_Tree] (state,list) {
    var temptree = [], tree = [], items = [];
    for (var i in list) {
        if (!temptree[list[i].did]) {
            var trow = {
                id:  list[i].did,
                did: list[i].did,
                fid: list[i].fid,
                path: list[i].path,
                name:list[i].name,
                children: []
            };
            temptree[list[i].did] = trow;
            items.push(trow);
        }
        if (list[i].uid > 0) {

            temptree[list[i].did]['children'].push({
                id: list[i].uid,
                path: list[i].realname,
                iconCls: 'im_user',
                name:list[i].name,
            });
        }
    }

    for (var j in items) {
        if (temptree[items[j].fid]) {
            temptree[items[j].fid]['children'].push(temptree[items[j].did]);
        } else {
            tree.push(temptree[items[j].did]);
        }
    }
    temptree = null;
    items = null;
       state.list = tree
  }
}
// [types.GEN_Tree] (state,list) {
//   var temptree = [], tree = [], items = [];
//   for (var i in list) {
//       if (!temptree[list[i].did]) {
//           var trow = {
//               id:  list[i].did,
//               did: list[i].did,
//               fid: list[i].fid,
//               path: list[i].path,
//               iconCls: 'im_role',
//               name:list[i].name,
//               children: []
//           };
//           temptree[list[i].did] = trow;
//           items.push(trow);
//       }
//       if (list[i].uid > 0) {
//
//           temptree[list[i].did]['children'].push({
//               id: list[i].uid,
//               path: list[i].realname,
//               iconCls: 'im_user',
//               name:list[i].name,
//           });
//       }
//   }
//
//   for (var j in items) {
//       if (temptree[items[j].fid]) {
//           temptree[items[j].fid]['children'].push(temptree[items[j].did]);
//       } else {
//           tree.push(temptree[items[j].did]);
//       }
//   }
//   temptree = null;
//   items = null;
//      state.list = tree
// }
// }
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
