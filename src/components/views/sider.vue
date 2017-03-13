<template>
<div id="sider" class='animated' :class="{ slideInLeft: show, slideOutLeft: !show }">
  <!-- 菜单由路由生成，路由由登录有所给的菜单列表生成！ -->
  <!-- <button @click="tree">点击</button> -->
    <!-- <pre><code>{{getlist}}</code></pre> -->
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router unique-opened>
      <template v-for="(item,index) in getlist">
        <el-submenu :index="index+''" v-if='item.children.length>0'>
          <template slot="title"><i class="el-icon-menu"></i>{{item.funcTitle}}</template>
               <template v-for='(item_,index_) in item.children'>
                 <el-submenu :index="index_+'1'" v-if='item_.children.length>0'>
                   <template slot="title"><i class=""></i>{{item_.funcTitle}}</template>
                        <el-menu-item v-for='(item__,index__) in item_.children' :index="item__.requestUrl" ><i :class="item.iconCls"></i>{{item__.funcTitle}}</el-menu-item>
                 </el-submenu>
                 <el-menu-item :index="item_.requestUrl" v-else='item_.children.length<0'><i :class="item.iconCls"></i>{{item_.funcTitle}}</el-menu-item>
               </template>
        </el-submenu>
        <el-menu-item v-else="item.children.length" :index="item.requestUrl"><i :class="item.iconCls"></i>{{item.funcTitle}}</el-menu-item>
      </template>
    </el-menu>

    </div>
</template>
<style media="screen">
@import '~animate.css';
.animated {
  animation-duration: .377s;
}

#sider {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  /*padding: 20px 0 50px;*/
  width: 238px;
  /*width: 500px;*/
  min-width: 45px;
  max-height: 100vh;
  height: calc(100% - 50px);
  z-index: 1024 - 1;
  background: #FFF;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
<script>
import group from './parts/group.vue'
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  data() {
    return {
      tree_: '',
      tem:{},
menus1: [
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e43",
          "funcTitle": "角色管理",
          "requestUrl": "/resources/role/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
          "order": 1
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e4e",
          "funcTitle": "系统用户操作日志",
          "requestUrl": "/resources/log/user/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e42",
          "order": 1
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e4a",
          "funcTitle": "账户信息查询",
          "requestUrl": "/resources/account/viewInfo",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e49",
          "order": 1
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e40",
          "funcTitle": "系统管理",
          "requestUrl": null,
          "funcType": 0,
          "parentFuncId": null,
          "order": 1
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e57",
          "funcTitle": "与积分换彩系统对账任务查询",
          "requestUrl": "/resources/task/baaRecon/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e56",
          "order": 1
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e51",
          "funcTitle": "预缴款充值记录查询",
          "requestUrl": "/resources/prePay/charge/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e50",
          "order": 1
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e5a",
          "funcTitle": "与积分换彩差异账记录查询",
          "requestUrl": "/resources/account/baa/diff/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e59",
          "order": 1
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e5d",
          "funcTitle": "中行预缴款划付记录查询",
          "requestUrl": "/resources/prepay/boc/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e5c",
          "order": 1
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e41",
          "funcTitle": "系统用户管理",
          "requestUrl": null,
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e40",
          "order": 1
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e60",
          "funcTitle": "渠道商基本信息查询",
          "requestUrl": "/resources/dealer/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e5f",
          "order": 1
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e58",
          "funcTitle": "与国彩通对账任务查询",
          "requestUrl": "/resources/task/gctRecon/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e56",
          "order": 2
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e4b",
          "funcTitle": "账户冻结与解冻管理",
          "requestUrl": "/resources/account/inuse/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e49",
          "order": 2
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e5e",
          "funcTitle": "中银通备付金账户划付查询",
          "requestUrl": "/resources/prepay/zyt/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e5c",
          "order": 2
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e49",
          "funcTitle": "投注资金账户管理",
          "requestUrl": null,
          "funcType": 0,
          "parentFuncId": null,
          "order": 2
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e42",
          "funcTitle": "日志管理",
          "requestUrl": null,
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e40",
          "order": 2
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e52",
          "funcTitle": "充值记录查询",
          "requestUrl": "/resources/account/charge/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e50",
          "order": 2
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e44",
          "funcTitle": "角色权限管理",
          "requestUrl": "/resources/role/normal/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
          "order": 2
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e5b",
          "funcTitle": "与国彩通差异账记录查询",
          "requestUrl": "/resources/account/gct/diff/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e59",
          "order": 2
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e4f",
          "funcTitle": "系统处理日志",
          "requestUrl": "/resources/log/sys/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e42",
          "order": 2
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e53",
          "funcTitle": "投注记录查询",
          "requestUrl": "/resources/betRecord/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e50",
          "order": 3
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e4c",
          "funcTitle": "账户收支明细查询",
          "requestUrl": "/resources/account/payDetail/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e49",
          "order": 3
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e45",
          "funcTitle": "角色权限查询",
          "requestUrl": "/resources/role/func/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
          "order": 3
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e50",
          "funcTitle": "交易管理",
          "requestUrl": null,
          "funcType": 0,
          "parentFuncId": null,
          "order": 3
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e46",
          "funcTitle": "用户权限管理",
          "requestUrl": "/resources/user/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
          "order": 4
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e54",
          "funcTitle": "派奖记录查询",
          "requestUrl": "/resources/award/return/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e50",
          "order": 4
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e56",
          "funcTitle": "对战管理",
          "requestUrl": null,
          "funcType": 0,
          "parentFuncId": null,
          "order": 4
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e59",
          "funcTitle": "差错账处理",
          "requestUrl": null,
          "funcType": 0,
          "parentFuncId": null,
          "order": 5
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e55",
          "funcTitle": "提现记录查询",
          "requestUrl": "/resources/cash/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e50",
          "order": 5
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e47",
          "funcTitle": "用户权限查询",
          "requestUrl": "/resources/user/func/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
          "order": 5
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e5c",
          "funcTitle": "资金划付管理",
          "requestUrl": null,
          "funcType": 0,
          "parentFuncId": null,
          "order": 6
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e48",
          "funcTitle": "重置用户密码",
          "requestUrl": "/resources/user/resetpwd/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
          "order": 6
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e5f",
          "funcTitle": "渠道商信息管理",
          "requestUrl": null,
          "funcType": 0,
          "parentFuncId": null,
          "order": 7
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e4d",
          "funcTitle": "修改密码",
          "requestUrl": "/resources/user/updatePassword",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
          "order": 7
        }
      ]
    }
  },
  props: {
    show: Boolean
  },
  components:{
    'gro': group
  },
  mounted() {
    //将菜单数组给sessionStorage
    // sessionStorage.setItem('menus',JSON.stringify(this.menus))
    var user = JSON.parse(sessionStorage.getItem('user'))
    //console.log(user.funcInfoArray);
    //this.tem = user.funcInfoArray
    //console.log('susu222');
    // this.genTree(this.menus)
    //this.$store.commit("add")
    // console.log(this.tree())
    // sessionStorage.clear()
    this.genTree(this.menus1) //user.funcInfoArray
    // this.genTree(user.funcInfoArray)
    // sessionStorage.setItem('menus_', JSON.stringify(this.getlist))
    //console.log(sessionStorage.getItem('menus_')+'获取加工好的菜单！')
  },
  computed: {
    ...mapGetters([
      'getcount',
      'getsidebar',
      'menuitems',
      'getlist'
    ])
  },
  methods: {
    ...mapActions([
      'add_',
      'plus_',
      'toggleSidebar',
      'genTree'
    ]),
    tree() {
      //console.log(this.getList)
      //sessionStorage.setItem('menus_',JSON.stringify(this.getlist))
      //console.log(sessionStorage.getItem('menus_')+'获取加工好的菜单！')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
