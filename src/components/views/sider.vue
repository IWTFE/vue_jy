<template>
<div id="sider" class='animated' :class="{ slideInLeft: show, slideOutLeft: !show }">
  <!-- 菜单由路由生成，路由由登录有所给的菜单列表生成！ -->
  <!-- <pre><code>{{getlist}}</code></pre> -->
  <!-- <button @click="tree">点击</button> -->
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router unique-opened>
      <template v-for="(item,index) in getlist">
        <el-submenu :index="index+''" v-if='item.children.length>0'>
          <template slot="title"><i class="el-icon-menu"></i>{{item.name}}</template>
               <template v-for='(item_,index_) in item.children'>
                 <el-submenu :index="index_+'1'" v-if='item_.children.length>0'>
                   <template slot="title"><i class=""></i>{{item_.name}}</template>
                        <el-menu-item v-for='(item__,index__) in item_.children' :index="item__.path" ><i :class="item.iconCls"></i>{{item__.name}}</el-menu-item>
                 </el-submenu>
                 <el-menu-item :index="item_.path" v-else='item_.children.length<0'><i :class="item.iconCls"></i>{{item_.name}}</el-menu-item>
               </template>
        </el-submenu>
        <el-menu-item v-else="item.children.length" :index="item.path"><i :class="item.iconCls"></i>{{item.name}}</el-menu-item>
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
      'menus': [{
          did: 1,fid: 0,path: '/',name: "导航一"},
        {
          did: 2,
          fid: 1,
          path: '/account',
          name: '子导航一'
        },
        {
          did: 3,
          fid: 1,
          path: '/nav2',
          name: '子导航二'
        },
        {
          did: 4,
          fid: 1,
          path: '/nav3',
          name: '子导航三'
        },
        {
          did: 5,
          fid: 3,
          path: '/nav2nav1',
          name: '子导航二子导航'
        },
        {
          did: 6,
          fid: 4,
          path: '/nav3nav1',
          name: '子导航三子导航'
        },
        {
          did: 7,
          fid: 5,
          path: '/nav2nav1nav1',
          name: ''
        },
        {
          did: 8,
          fid: 3,
          path: '/nav2nav2',
          name: '子导航二子导航'
        },
        {
          did: 9,
          fid: 4,
          path: '/nav3nav1',
          name: '子导航三子导航'
        },
        {
          did: 10,
          fid: 0,
          path: '/',
          name: '导航二'
        },
        {
          did: 11,
          fid: 10,
          path: '/navss',
          name: '导航二子'
        },

        //目录下面的人
        {
          uid: 1,
          did: 2,
          realname: '/adduser',
          path:'/power/user/adduser',
          name:'权限-1'
        },
        {
          uid: 2,
          did: 9,
          realname: '/power/user/permissionquery',
          path:'/power/user/permissionquery',
          name:'r222'
        },
        {
          uid: 3,
          did: 2,
          realname: '/power/user/permissionquery',
          path:'/power/user/permissionquery',
          name:'r333'
        },
        {
          uid: 4,
          did: 6,
          realname: '/power/user/permissionquery',
          path:'/power/user/permissionquery',
          name:'r444'
        },
        {
          uid: 5,
          did: 7,
          realname: '/power/user/permissionquery',
          path:'/power/user/permissionquery',
          name:'r555'
        },
        {
          uid: 6,
          did: 8,
          realname: '/power/user/permissionquery',
          path:'/power/user/permissionquery',
          name:'r666'
        },
        {
          uid: 7,
          did: 9,
          realname: '/power/user/permissionquery',
          path:'/power/user/permissionquery',
          name:'r777'
        }
      ],
      "funcInfoArray": [{
          "funcId": "43dafb5d39f3481f85dce80c0ee95e41",
          "funcTitle": "角色管理",
          "requestUrl": "/resources/role/list",
          "funcType": 0,
          "parentFuncId": null,
          "order": 1
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e43",
          "funcTitle": "角色管理111",
          "requestUrl": "/resources/role/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
          "order": 1
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
          "funcId": "43dafb5d39f3481f85dce80c0ee95e45",
          "funcTitle": "角色权限查询",
          "requestUrl": "/resources/role/func/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
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
          "funcId": "43dafb5d39f3481f85dce80c0ee95e47",
          "funcTitle": "用户权限查询",
          "requestUrl": "/resources/user/func/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
          "order": 5
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
          "funcId": "43dafb5d39f3481f85dce80c0ee95e49",
          "funcTitle": "重置用户密码111",
          "requestUrl": "/resources/user/resetpwd/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e48",
          "order": 7
        },
        {
          "funcId": "43dafb5d39f3481f85dce80c0ee95e50",
          "funcTitle": "重置用户密码222",
          "requestUrl": "/resources/user/resetpwd/list",
          "funcType": 0,
          "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e48",
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
    console.log(user.funcInfoArray);
    console.log('susu222');
    // this.genTree(this.menus)
    //this.$store.commit("add")
    // console.log(this.tree())
    // sessionStorage.clear()
    this.genTree(this.menus) //user.funcInfoArray
    // this.genTree(user.funcInfoArray)
    sessionStorage.setItem('menus_', JSON.stringify(this.getlist))
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
