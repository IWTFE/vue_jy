import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as types from './mutation-types'
import {
  requestPowerUserList,
  requestPowerCreateUser,
  requestPowerModifyInfo
} from '../api/api'

Vue.use(Vuex)

const state = {
  count: 44,
  name:'',//@su code装换过来的名字
  success_message: false,
  modify_message:{
    message:false,
    code:''
  },
  sidebar: {
    opened: false, //打开
    hidden: false //隐藏
  },
  menuitems: [],
  list: [],
  tableData: [],
  paramsStore: {},
  ArrayList: [],
  ModifyInfo:{
    id:'',
    roleId: '',
    roleName: '',
    roleLevel: '',
    description: '',
    remark: '',
    roleStatus: '',
    iwoid: ''
  },
  page: {},
  total:0

}
const mutations = {
  //test11(state,a){alert(a)},
  //@su code代码转换
  changeCode(state,code){
     state.name ="dfas11111"
     if(code){
        state.name = "重复！"
        //return state.name
     }else{
       console.log(state.name)
       //return state.name
     }

  },
  add(state) {
    state.count++
  },
  plus(state) {
    state.count--
  },
  //su菜单收起操作
  [types.TOGGLE_SIDEBAR](state, opened) {
    if (state.sidebar.opened === true) {
      state.sidebar.opened = opened
      // alert('opened')
    } else {
      state.sidebar.opened = true
      // alert('true')
    }
  },
  //菜单数操作
  [types.GEN_Tree](state, list) {
    console.log(list)
    var index = 0;
    var index1 = 0;
    var tree = [],
      items = [];
    for (let i in list) {
      let row = list[i];
      if (row.funcId && row.parentFuncId === null) {
        var trow = {
          id: index++,
          funcId: row.funcId,
          funcTitle: row.funcTitle,
          requestUrl: row.requestUrl,
          parentFuncId: row.parentFuncId,
          children: []
        }
        tree.push(trow)
      }
    }
    for (let i in tree) {
      items.push(tree[i])
    }
    while (items.length) {
      var node = items.shift();
      for (let i in list) {
        var row = list[i];
        if (row.parentFuncId === node.funcId) {
          var trow = {
            id: index1++,
            funcId: row.funcId,
            funcTitle: row.funcTitle,
            requestUrl: row.requestUrl,
            parentFuncId: row.parentFuncId,
            children: []
          }
          if (node.children) {
            node.children.push(trow);
          } else {
            node.children = [trow];
          }
          items.push(trow);
          // console.log(items)
          // console.log(items)
        }
      }
    }
    state.list = tree
  },
  [types.ADD_User_List](state, params) { //获取用户列表
    let that = this
    var verifyParams = params
    console.log(params)
    console.log('角色列表数据')
    requestPowerUserList(verifyParams).then(function(response) {
      console.log(response.body)
      state.page = response.body.page
      state.tableData = []
      for (let i = 0; i < response.body.dateList.length; i++) {
        // that.listLoading = true;
        var row = {
          id:state.page.start+i+1,
          roleId: response.body.dateList[i].roleId,
          roleName:response.body.dateList[i].roleName,
          roleLevel: response.body.dateList[i].roleLevel,
          description: response.body.dateList[i].description,
          remark: response.body.dateList[i].remark,
          roleStatus: response.body.dateList[i].roleStatus,
          iwoid: response.body.dateList[i].iwoid
        }
        state.tableData.push(row)
        // console.log(state.tableData)

        // getters.
      }



      // that.listLoading = false;
    }).catch(function(error) {
      console.log(error)
    })
  },
  [types.CREATE_User](state, params) {
    var that = this
    var verifyParams = params
    requestPowerCreateUser(verifyParams).then(function(response) {
      if (response.head.result === 0) {
        alert('sucess11')
        state.success_message = true
      }else{
        state.success_message = false
      }
    })
  },
  [types.MODIFY_Info](state,params){
     var that = this
     var verifyParams = params
     requestPowerModifyInfo(verifyParams).then(function(response) {
       if (response.head.result === 0) {
         alert(response.head.result)
         state.modify_message.message=true
         state.modify_message.code = response.head.result

         //console.log(response.head.result)
       }else{
         state.modify_message.message = false
         state.modify_message.code = response.head.result
         //alert(response.head.result)
       }
     })

  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
